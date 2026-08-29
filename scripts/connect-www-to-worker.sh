#!/usr/bin/env bash
#
# Wizard - connects www.kayesind.com to the kayes-industries Worker.
# Fixes: 522 on www + "No zones match www.kayesind.com" confusion.
# Zone is kayesind.com (apex). www is a hostname inside that zone, not a new zone.

set -euo pipefail

# ──────────────────────────────────────────────────────────────────────────
# Wizard library — delightful, consistent UX. Identical across every wizard.
# ──────────────────────────────────────────────────────────────────────────

if [[ -t 1 ]] && command -v tput >/dev/null 2>&1 && [[ "$(tput colors 2>/dev/null || echo 0)" -ge 8 ]]; then
  BOLD=$(tput bold); DIM=$(tput dim); RESET=$(tput sgr0)
  BLUE=$(tput setaf 4); GREEN=$(tput setaf 2); YELLOW=$(tput setaf 3); RED=$(tput setaf 1)
else
  BOLD=""; DIM=""; RESET=""; BLUE=""; GREEN=""; YELLOW=""; RED=""
fi

TOTAL_STAGES=0

_STAGE_INDEX=0
ENV_FILE="${ENV_FILE:-.env}"
WRITTEN_ENV=()
WRITTEN_SECRET=()
SKIPPED=()

_clear() {
  [[ -t 1 ]] || return 0
  if command -v tput >/dev/null 2>&1; then tput clear; else printf '\033[2J\033[3J\033[H'; fi
}

banner() {
  _clear
  printf '\n%s%s  %s%s\n' "$BOLD" "$BLUE" "$1" "$RESET"
  printf '%s  %s stages%s\n\n' "$DIM" "$TOTAL_STAGES" "$RESET"
  printf '%s  You drive the browser; this wizard tells you exactly what to do and\n' "$DIM"
  printf '  captures the values you copy back. Stop any time with Ctrl-C and re-run\n'
  printf '  later — it remembers values already saved.%s\n' "$RESET"
  pause "Ready to start?"
}

stage() {
  _clear
  _STAGE_INDEX=$((_STAGE_INDEX + 1))
  printf '\n%s%s▸ Stage %s/%s · %s%s\n' \
    "$BOLD" "$BLUE" "$_STAGE_INDEX" "$TOTAL_STAGES" "$1" "$RESET"
}

say()  { printf '  %s\n' "$1"; }
step() { printf '  %s•%s %s\n' "$BLUE" "$RESET" "$1"; }
note() { printf '  %s%s%s\n' "$DIM" "$1" "$RESET"; }
warn() { printf '  %s⚠ %s%s\n' "$YELLOW" "$1" "$RESET"; }

open_url() {
  local url="$1"
  printf '  %s↗ opening%s %s\n' "$GREEN" "$RESET" "$url"
  { if   command -v wslview     >/dev/null 2>&1; then wslview "$url"
    elif command -v explorer.exe >/dev/null 2>&1; then explorer.exe "$url"
    elif command -v xdg-open    >/dev/null 2>&1; then xdg-open "$url"
    elif command -v open        >/dev/null 2>&1; then open "$url"
    else warn "couldn't open a browser — visit it manually: $url"; fi
  } >/dev/null 2>&1 || warn "couldn't open a browser — visit it manually: $url"
}

pause() {
  printf '  %s%s%s ' "$DIM" "${1:-Press Enter to continue}" "$RESET"
  read -r _ || true
}

confirm() {
  local reply=""
  printf '  %s? %s [y/N] ' "$YELLOW" "$1"
  read -r reply || true
  [[ "$reply" =~ ^[Yy] ]]
}

_existing() {
  [[ -f "$ENV_FILE" ]] || return 1
  local line; line=$(grep -E "^${1}=" "$ENV_FILE" | tail -n1) || return 1
  printf '%s' "${line#*=}"
}

ask() {
  local key="$1" prompt="$2" current input
  current=$(_existing "$key" || true)
  if [[ -n "$current" ]]; then
    printf '  %s%s%s %s[Enter keeps current]%s ' "$BOLD" "$prompt" "$RESET" "$DIM" "$RESET"
  else
    printf '  %s%s%s ' "$BOLD" "$prompt" "$RESET"
  fi
  read -r input || true
  [[ -z "$input" && -n "$current" ]] && input="$current"
  printf -v "$key" '%s' "$input"
}

ask_secret() {
  local key="$1" prompt="$2" current input
  current=$(_existing "$key" || true)
  if [[ -n "$current" ]]; then
    printf '  %s%s%s %s[Enter keeps current]%s ' "$BOLD" "$prompt" "$RESET" "$DIM" "$RESET"
  else
    printf '  %s%s%s ' "$BOLD" "$prompt" "$RESET"
  fi
  read -rs input || true
  printf '\n'
  [[ -z "$input" && -n "$current" ]] && input="$current"
  printf -v "$key" '%s' "$input"
}

write_env() {
  local key="$1" value="$2" tmp
  touch "$ENV_FILE"
  tmp=$(mktemp)
  grep -vE "^${key}=" "$ENV_FILE" > "$tmp" || true
  printf '%s=%s\n' "$key" "$value" >> "$tmp"
  mv "$tmp" "$ENV_FILE"
  WRITTEN_ENV+=("$key")
  printf '  %s✓ wrote%s %s → %s\n' "$GREEN" "$RESET" "$key" "$ENV_FILE"
}

set_secret() {
  local name="$1" value="$2"
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    if printf '%s' "$value" | gh secret set "$name" >/dev/null 2>&1; then
      WRITTEN_SECRET+=("$name")
      printf '  %s✓ set%s GitHub secret %s\n' "$GREEN" "$RESET" "$name"
      return
    fi
  fi
  SKIPPED+=("GitHub secret $name (set it manually: gh secret set $name)")
  warn "skipped GitHub secret $name — gh not ready; set it later"
}

set_var() {
  local name="$1" value="$2"
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    if gh variable set "$name" --body "$value" >/dev/null 2>&1; then
      printf '  %s✓ set%s GitHub variable %s\n' "$GREEN" "$RESET" "$name"
      return
    fi
  fi
  SKIPPED+=("GitHub variable $name")
  warn "skipped GitHub variable $name — gh not ready; set it later"
}

finish() {
  _clear
  printf '\n%s%s  ✓ Setup complete%s\n' "$BOLD" "$GREEN" "$RESET"
  (( ${#WRITTEN_ENV[@]} ))    && note "wrote ${#WRITTEN_ENV[@]} value(s) to $ENV_FILE: ${WRITTEN_ENV[*]}"
  (( ${#WRITTEN_SECRET[@]} )) && note "set ${#WRITTEN_SECRET[@]} GitHub secret(s): ${WRITTEN_SECRET[*]}"
  if (( ${#SKIPPED[@]} )); then
    printf '\n'; warn "still to do by hand:"
    for s in "${SKIPPED[@]}"; do note "  - $s"; done
  fi
  printf '\n'
}

# ──────────────────────────────────────────────────────────────────────────
# STAGES — kayesind.com www fix
# ──────────────────────────────────────────────────────────────────────────

TOTAL_STAGES=5

banner "Fix www.kayesind.com - connect to Worker"

# ── Stage 1 ───────────────────────────────────────────────────────────────
stage "Confirm zone kayesind.com is Active"
say "Your NS already point to Cloudflare (abby/adam) - apex https://kayesind.com is live with 200."
say "The error 'No zones match www.kayesind.com' means you tried to add www as a new zone."
say "Do not add a zone for www - www is a hostname inside the kayesind.com zone."
open_url "https://dash.cloudflare.com/?to=/:account/domains"
step "Log in, find kayesind.com in the list. Status should be Active (not Pending)."
step "Click kayesind.com to open the zone. Check the Overview shows the 2 nameservers abby.ns.cloudflare.com / adam.ns.cloudflare.com."
note "If it still shows Pending, your Turbify NS change is still propagating - wait 5 min and refresh."
if ! confirm "Zone kayesind.com shows Active?"; then
  warn "Stop here and let the NS propagate, then re-run this wizard."
  exit 1
fi

# ── Stage 2 ───────────────────────────────────────────────────────────────
stage "Delete old www DNS first (fixes your current error)"
say "Error 'already has externally managed DNS records' means a DNS record for www already exists."
say "You must delete it BEFORE adding the Custom Domain - otherwise Cloudflare blocks it."
open_url "https://dash.cloudflare.com/?to=/:account/:zone/dns/records"
step "Inside kayesind.com zone -> DNS -> Records."
step "Find the row: Name www | Type A or CNAME | Content 3.230.199.117 / 35.168.67.138 or Turbify -> Click Delete (trash icon) -> Confirm."
step "Also delete any CNAME www if present. Leave apex kayesind.com as is for now."
note "Do not create a new record yet - the Worker will create the proxied one for you in next stage."
if ! confirm "No record for www remains in the list?"; then
  warn "Delete it now, then continue - otherwise Adding Custom Domain will keep failing."
  exit 1
fi

# ── Stage 3 ───────────────────────────────────────────────────────────────
stage "Attach www to the Worker"
say "Your Worker kayes-industries already serves kayesind.com (we saw 200 HIT). Now add www."
open_url "https://dash.cloudflare.com/?to=/:account/workers-and-pages"
step "Click Workers & Pages -> find kayes-industries -> click it."
step "Go to Settings tab -> Domains & Routes -> Custom Domains section."
step "You should see kayesind.com already listed as Active. If not, add it first: Add Custom Domain -> type kayesind.com -> Add."
step "Now add www: Click Add Custom Domain -> type exactly www.kayesind.com -> Add Custom Domain."
note "This will auto-create the proxied DNS for www. If you still see 'No zones match', you are on Add Zone - use Settings > Domains & Routes inside the Worker."
pause "Press Enter after www.kayesind.com shows Active in Domains & Routes"


# ── Stage 4 ───────────────────────────────────────────────────────────────
stage "Set www redirect and purge cache"
say "Best practice is www -> apex 301 so you have one canonical domain."
open_url "https://dash.cloudflare.com/?to=/:account/:zone/rules/redirect-rules"
step "Optional but recommended: Create rule -> Redirect Rule -> When incoming requests match http.host eq \"www.kayesind.com\" -> Static redirect to https://kayesind.com status 301 keep path."
step "Back to zone -> Caching -> Configuration -> Purge Cache -> Purge Everything."
note "This clears the cached 522 error for www."
pause "Press Enter after purge completes"

# ── Stage 5 ───────────────────────────────────────────────────────────────
stage "Verify both hosts return 200"
say "We will check from Cloudflare edge - both should be 200, not 522 or NXDOMAIN."
open_url "https://www.kayesind.com"
step "Also test in a new incognito window: https://kayesind.com and https://www.kayesind.com should both show the KAYES INDUSTRIES Astro site."
step "If www 301s to apex, that is also success."
step "Check Cloudflare analytics: Workers & Pages -> kayes-industries -> Metrics should show requests for both hosts."
note "If www still 522: wait 60s, hard refresh (Ctrl+Shift+R), or chrome://net-internals/#dns -> Clear host cache. Then curl -I https://www.kayesind.com should show cf-cache-status."
if confirm "Both https://kayesind.com and https://www.kayesind.com now load (200 or 301)?"; then
  say "Done. Your fix from earlier (wrangler.jsonc + deploy) is now fully wired."
else
  warn "Leave zone Active for 5 min and re-check. If still 522, check DNS has no Turbify A records and Custom Domains are both Active."
fi

finish
