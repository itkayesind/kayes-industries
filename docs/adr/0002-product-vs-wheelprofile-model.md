# Product Has-A WheelProfile (not Is-A)

`src/data/catalog.ts` (Product) and `src/data/wheelProfiles.ts` (WheelProfile) were disconnected lists - no link between a sellable tool and its ISO shape.

We decide Product *has-a* WheelProfile: WheelProfile is the ISO shape (6A2, 11A2, 1EE1 etc.) with engineering drawing and dimensional table; Product is the sellable SKU that implements that shape in a bond/grit/size. Catalogue navigation is ToolFamily -> WheelProfile -> Products. The PDF catalogue remains a static download at `/docs/Kayes-Diamond-Tools-Catalogue.pdf`; the web matrix is the interactive source of truth and shares dimensions, not copy. Reversing this would require rewriting all catalogue URLs and data joins.
