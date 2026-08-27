# Multi-page Information Architecture (GreatDia-inspired, no Blog/Exhibition)

The single `index.astro` landing had 7 heavy sections (Hero + IndustriesOverview + ClientMarquee + InteractiveCatalog + WheelProfilesBlueprint + GritParticleMatrix + CorporateProfile + InteractiveRFQ) causing bloated LCP and unfocused SEO.

We move to 4 top-level routes modeled after GreatDia: `/` (Home - teaser), `/about` (history + executive statement + facility), `/products` (ToolFamily -> WheelProfile matrix), `/contact` (RFQ + addresses + map). No `/blog` or `/exhibition` routes - we delete filler, not hide it. Hash anchors 301 to new routes. This is hard to reverse because URLs, sitemap, and nav are public contracts.
