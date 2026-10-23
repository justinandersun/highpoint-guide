# Highpoint Guide — 50-State Accuracy Audit

Every guide page was independently fact-checked against authoritative sources (Wikipedia, Peakbagger, SummitPost, AllTrails, the managing agency's own current page — state park, national forest, NPS unit, county, etc.) and against each file's own internal consistency (frontmatter vs. body text, math that should reconcile). **No corrections have been applied** — per your instruction, everything below is flagged for your review, including the obvious ones.

Checklist applied to each state: region/range name (watching for cross-state content contamination), core numeric stats (elevation/prominence/isolation/rank) vs. Peakbagger/Wikipedia, trail distance/gain vs. AllTrails/the managing agency, internal consistency between frontmatter and body, lowest-point-of-state claims, permit/fee/regulation currency, link liveness (flagging redirects to generic/wrong pages, not just hard 404s), trailhead directions, SAR contact currency, and a spot-check of other specific factual claims.

Jump to: an [executive summary](#executive-summary) of the highest-priority items across all 50, then full state-by-state detail below it.

---

## Executive summary

### ⚠️ Fix independent of everything else

- **[Florida](#fl--britton-hill)** — the `official_info` link is hijacked. It now redirects through a chain ending in a page showing Thai-language online-gambling spam under fake "baby products" branding. This isn't link rot, it's actively sending readers somewhere bad.
- **[Hawaii](#hi--mauna-kea)** — the summit-access description (in the intro, Regulations, *and* FAQ) says reaching Mauna Kea's true summit "requires express permission from the local tribe." That's inaccurate on two counts: it's a voluntary cultural request, not a permission system, and Native Hawaiians don't have a federally recognized tribal government of the kind implied. Worth fixing carefully given the subject.

### Errors that would send a hiker to the wrong place

- **[Arkansas](#ar--magazine-mountain)** — the Recommended Route names and describes the *wrong trail* (a 0.9-mile loop that never reaches the summit) instead of the correct Signal Hill Trail. A hiker following the guide as written wouldn't summit.
- **[Alaska](#ak--denali)** — frontmatter coordinates are 60+ miles from Denali's actual summit.
- **[Maryland](#md--hoye-crest--backbone-mountain)** — frontmatter coordinates are 7–8 miles from the real trailhead.
- **[Missouri](#mo--taum-sauk-mountain)** — frontmatter coordinates are ~1.9 miles off.
- **[Texas](#tx--guadalupe-peak)** — the access-point label names the wrong town (Dell City instead of Pine Springs, a different town ~22 miles away in a different county); the underlying map link itself is fine, just the displayed text.
- **[Oklahoma](#ok--black-mesa)** and **[Georgia](#ga--brasstown-bald)** — both give a reversed compass direction in their directions/geography.
- **[Massachusetts](#ma--mount-greylock)** — driving directions for travelers coming from New York are backwards (send them away from the destination).
- **[New Mexico](#nm--wheeler-peak)** — names the wrong sub-peak ("Walker" instead of the real "Mount Walter").

### Likely cross-state content contamination — a systemic pattern worth a dedicated pass

This is the same issue the Minnesota report flagged, and it shows up repeatedly:
- **Minnesota**'s copy describes Michigan's Mount Arvon region almost verbatim (confirmed one-directional — Michigan's own file is clean).
- **Mississippi** and **Louisiana** both use `range: "Ozark Highlands"`, a range that doesn't reach either state.
- **North Dakota** describes "Dakota Hogback" geology — a Colorado/Wyoming feature — instead of White Butte's actual (much younger) geology.
- **Tennessee** uses "Blue Ridge Mountains" (the range used by its neighbors' highpoints — NC, VA, GA) instead of the correct Great Smoky Mountains.
- **Montana** and **Wyoming** both use the identical nonstandard string `"Greater Yellowstone Rockies"` for two different mountains in two different ranges.
- **Maine**'s "Chimney Pond Hut" uses AMC/White Mountains (New Hampshire) terminology — Baxter State Park has no "huts."

### Dead, hijacked, or mistargeted links

Nearly universal — the large majority of states have at least one `official_info` or `sar` link that now redirects to a generic agency landing page instead of the specific content, or 404s outright, usually because an agency merged, renamed, or migrated domains since the guide was written. These are listed per-state below rather than repeated here.

### Numeric drift and internal inconsistency

Also very common: roughly 30 of the 50 states have at least one case where frontmatter and body text state two different numbers for the same thing (distance, gain, elevation), or where a figure is simply outdated relative to the current survey/fee schedule. Listed per state below.

### Clean

**[Kansas](#ks--mount-sunflower)** was the only file with zero confirmed issues — every claim checked out against multiple sources.

---

## State-by-state findings

### AK — Denali
**Confirmed issues (several significant):**
- **Elevation outdated**: 20,320 ft listed; USGS officially revised to **20,310 ft** in Sept 2015 (GPS survey). File's own `updated` field claims 2026-01-31, so this should've been caught.
- **Frontmatter lat/long are badly wrong**: `63.82571, -149.73178` is 60+ miles from Denali's actual summit (63.0695, -151.0074 per Wikipedia/NPS). The file's own `weather` link correctly targets the right coordinates, contradicting its own frontmatter.
- **Frontmatter distance_miles (56.0) / gain_feet (24,500) contradict the body text**, which itself says the West Buttress route is "~13 miles one-way... ~13,500 ft gain" — external sources (SummitPost/AAI) corroborate the body (13-16mi one-way, ~13,100ft gain from base camp), not the frontmatter numbers.
- **Permit fees outdated**: states $375/$275 (25+/under 25); current NPS page lists **$475/$375** for the upcoming season.
- **Webcam link dead/generic**: `nps.gov/subjects/air/webcams.htm?site=dena` loads a blank generic NPS page. Current: `nps.gov/dena/photosmultimedia/webcams.htm`.
- Minor: Anchorage airport distance/direction ("four miles south") should be ~5mi southwest; "5th busiest cargo airport" is now more like 3rd-4th per recent data.

**Fine:** 1913 first-ascent history; name-change timeline (1896→1917 McKinley→2015 Denali); CMC/waste rules; camp elevations; ~90% West Buttress popularity; rank_elevation=1; no cross-state contamination; wikipedia/weather/mountain-forecast links; sar link (denalirescue.org) is real/active.

**Inconclusive:** peakbagger/summitpost/alltrails blocked by bot-walls (summitpost's pid corroborated elsewhere as correct). "Great One" (body) vs "High One" (FAQ) translation — both attested, just inconsistent within the file.

---

### AL — Cheaha Mountain
**Confirmed issues:**
- Wrong exit number: body says "I-20, take exit 431" — the park's own site says **Exit 191**; 431 is actually the highway number (AL Hwy 431), conflated with the exit number.
- Range name likely wrong: frontmatter `range: "Appalachian Ridges"` isn't a recognized name anywhere — Wikipedia/Britannica place Cheaha in the **Talladega Mountains**.
- Hotel claim outdated: body/FAQ say there's "a campground, hotel, and convenience store at the summit" — the old Cheaha Hotel **has been torn down**; the new 32-room lodge isn't taking reservations until ~Nov 2026. Campground/Mountain Store claims are still accurate.

**Fine:** elevation 2,407ft, rank 35th; lat/long exact match; wikipedia/weather/official_info links live; permit framework (buy at store, PIN from ranger, no bolting); "Rock Garden" climbing area confirmed real.

**Inconclusive:** name etymology (Choctaw vs Creek/Muscogee) genuinely disputed across sources, not an error. summitpost/peakbagger 403'd but Wayback shows recent 200s (likely just bot-blocked); alltrails 403'd with no Wayback snapshot, unconfirmed either way. A possible added waiver/fee requirement for climbing turned up in one search snippet but couldn't be confirmed directly — flag Regulations section for a manual re-check.

---

### AR — Magazine Mountain
**Confirmed issues (one is significant — wrong trail named):**
- **Recommended Route names the wrong trail.** Guide labels the route "Benefield Trail (West Loop)" and describes its history/pond/picnic loop — but AR State Parks confirms that loop is only 0.9mi and never reaches the Signal Hill summit. The frontmatter's actual stats (`distance_miles: 1.8`, `gain_feet: 259`) and the embedded AllTrails widget match a *different*, correct trail: the official **"Signal Hill Trail"** to the 2,753ft summit marker. As written, a hiker following the described route/history would not summit. Needs the route name/description corrected to Signal Hill Trail.
- **Range/location self-contradiction + error.** Body says the highpoint is in "the Boston Mountains of the Northern Ouachitas" — the Boston Mountains are actually part of the *Ozarks*, not the Ouachitas, and are well north of Mount Magazine. Mount Magazine itself is in the Frontal Ouachita Mountains/Arkansas River Valley. This also contradicts the file's own frontmatter (`range: "Ozark Highlands"`) and the Access Point section's "Ozark National Forest" framing — three different range labels in one file.

**Minor/lower confidence:** Benefield homestead date given as "1870s"; park sources say "1880s" — conflicting sources, not fully resolved.

**Fine:** elevation 2,753 ft; rank 34th; named peaks Signal Hill (2,753ft)/Mossback Ridge (2,700ft); 18 campsites; park phone; wikipedia/weather links.

**Inconclusive:** summitpost/peakbagger/alltrails links 403'd to bot-check. official_info and arkansasstateparks.com sub-pages now redirect to arkansas.com domain (still resolve correctly today, but flagged as rot risk).

---

### AZ — Humphreys Peak
**Confirmed issues:**
- Lockett Meadow camping fee outdated: guide says $10/site + $5/extra vehicle; current Coconino NF rate is **$27/night** (1 site, up to 8 people/1 vehicle), $10/night/extra vehicle, $12-14 day use.
- Agassiz Peak fine outdated: guide says climbing it "can result in a $500 fine"; current Forest Order (effective through Dec 2029) sets a Class B misdemeanor fine of **up to $5,000 (individuals)/$10,000 (orgs)** and/or up to 6 months imprisonment for entering above ~11,500ft (covering Humphreys/Abineau/Agassiz).
- `official_info` link rotted — redirects to generic Coconino NF landing page, not Humphreys-specific.
- Internal inconsistency: frontmatter `distance_miles: 10.1` vs body's own "approximately 9.5 miles round trip" (which matches the body's own "3mi + 1.75mi" one-way math ×2). Third-party sources range 9-11.5mi, so unclear which is "right," but the two numbers in the same file should agree.

**Fine:** location/range (Coconino NF, San Francisco Peaks, Kachina Peaks Wilderness, 18,960 acres); elevation 12,633ft; prominence claim once filtered to lower-48 (26th); rank_elevation 12 (50-states-only ranking); naming history; SAR/weather/snow links.

**Inconclusive:** peakbagger/summitpost 403'd to bot-check; Windy.com webcam JS-rendered, unverifiable by fetch; camping-elevation threshold and exact road mileage vary slightly across sources.

---

### CA — Mount Whitney
*(The permit-date rule itself is out of scope here — it's already been independently verified and automated separately.)*

**Confirmed issues:**
- "National Oceanographic & Atmospheric Administration" — wrong name, it's **National Oceanic and Atmospheric Administration**.
- Elevation conflict: frontmatter `elevation_feet: 14494` but body says "14,505 feet" twice — **14,505 is the current correct figure** per Wikipedia; frontmatter is outdated.
- "Smithsonian Institute Shelter, built in 1904" — correct name is **Smithsonian Institution Shelter**, completed **1909** (1904 was just when a lightning death prompted building it).
- Badwater Ultramarathon claim says participants "trek from Death Valley to the peak" — the race's official finish is **Whitney Portal (8,360ft)**, not the summit.
- Distance inconsistency: frontmatter `distance_miles: 21.2` vs body's "22-mile round trip" — don't match each other; current widely-cited figure is 21.4mi RT/11mi one-way.
- `official_info` link redirects to generic Inyo NF page, not Whitney-specific.
- `webcam` link redirects to a generic Windy.com map, not a working Lone Pine camera feed.
- Minor: `keywords` frontmatter still said "2025 permits" (now fixed as part of the date-automation work).

**Fine:** Inyo/Tulare county-line claim; first-ascent names/date; rank #2; Lone Pine Lake/Outpost Camp/Trail Camp mileages/elevations; gain 6,663ft plausible; Whitney Portal Road access; bear/marmot guidance; Mountaineer's Route description; wikipedia link.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd; sar link (inyosheriff.org) blocked by Cloudflare JS challenge, not indexed anywhere — can't confirm either way; esavalanche.org's coverage of the Whitney area specifically is unconfirmed.

---

### CO — Mount Elbert
**Confirmed issues:**
- Body dates the Mount Massive cairn-raising dispute to "the 1970s" — should be the **1930s** (per a Dec. 11, 1939 newspaper account of two teens stacking a 7-ft cairn; no source corroborates "1970s").
- `official_info` link rotted — redirects to generic PSICC landing page. Current: fs.usda.gov/r02/psicc/recreation/mount-elbert-fourteener
- `sar` link dead — lakecountyco.com domain now redirects to lakecountyco.gov, old /sheriff/ path 404s. Current: lakecountyco.gov/232/Sheriff

**Fine:** location/range (San Isabel NF, Sawatch Range, Lake County); elevation 14,440 ft, rank 3rd (matches "2nd in contiguous US" claim); naming/first-ascent history; coordinates; trail distance/gain (9.8mi/4,458ft vs ~9-10mi/4,400-4,700ft range across sources); trailhead directions; wikipedia/weather/webcam/snow links.

**Inconclusive:** peakbagger/alltrails links 403'd to bot-check. The "2002 recalculation" claim for the 14,440ft figure conflicts with Wikipedia's attribution to the 1988 NAVD88 datum shift — sources disagree, no primary NGS record found to settle it.

---

### CT — Mount Frissell (south slope)
**Confirmed issues:**
- Lodging & Camping section falsely says "Bash Bish Falls State Park, nearby, offers camping facilities" — that park is day-use only (free lot, dawn-to-dusk, no campground) per mass.gov. Actual nearby camping: Mount Washington State Forest's primitive Ashley Brook sites, or Taconic State Park (Copake Falls, NY) across the state line.
- `official_info` link points to the wrong park unit (Bash Bish Falls SP, centered on the waterfall, different road) instead of **Mount Washington State Forest** (mass.gov/locations/mount-washington-state-forest), which actually manages the Mt. Frissell trailhead/parking.

**Fine:** highpoint-vs-summit framing (CT's highpoint is on Frissell's south slope; true summit is in MA) — correctly explained; location "Salisbury, CT" accurate; `range: "Northern U.S. Appalachians"` is this site's consistent broad-region label across CT/MA/ME/NH/RI/VT/DE, not a mixup; rank_elevation 36 confirmed; route narrative (Round Mountain cairn, trail fork, canister/sign) matches Highpointers Foundation/SummitPost; no fees/permits, seasonal road closure, no restrooms all check out; weather link correct.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd to bot-check. Trail distance/gain (2.3mi/862ft) runs a bit low vs independent trackers (~2.4-2.9mi/~900-1050ft) but couldn't load AllTrails directly to reconcile. Elevation 2,380ft vs Wikipedia's 2,379ft — trivial 1ft discrepancy, both sourced.

---

### DE — Ebright Azimuth
**Confirmed issues:**
- Frontmatter `location: "Town of Azimuth"` is fabricated — no such incorporated town exists. It's unincorporated northern New Castle County, addressed as Wilmington, DE 19810. "Azimuth" is only an informal Google Maps micro-locality tag, not a real town.
- Regulations section's toll claim ("approaching via I-95, you'll pay tolls") contradicts the guide's own directions — Delaware's only I-95 toll plaza is near Newark/MD line, well south of the route given (I-95 N to Exit 8). This error is inherited verbatim from SummitPost's own text.

**Fine:** elevation 448ft (matches Wikipedia's 447.85/SummitPost's 448 almost exactly); rank 49/"second-lowest" (correct 50-states-only framing, ~103ft above FL's Britton Hill); lat/long exact match; ~500ft to PA border; 3 USGS benchmark disks detail; access directions; correctly avoids inventing trail/hiking details for what's actually a roadside drive-up; wikipedia/official_info/weather/google links all live and correct.

**Inconclusive:** peakbagger/alltrails bot-blocked, couldn't verify. `range: "Northern U.S. Appalachians"` vs Wikipedia/DGS's "Appalachian Piedmont" — related but distinct terms, Peakbagger (which would settle it) was inaccessible.

---

### FL — Britton Hill ⚠️ security note
- **`official_info` link now redirects to a hijacked spam domain** — waltonoutdoors.com 301-redirects through rootnbone.com to labbymemorial.com, which displays Thai-language online-gambling spam disguised as "baby products" branding. This isn't just dead/stale — **it's actively sending readers to a malicious redirect chain and should be fixed ASAP**, independent of the rest of the audit. Replacement: Walton County Parks Dept (mywaltonfl.gov).
- Frontmatter `location: "Town of Lakewood"` wrong — Lakewood is an unincorporated community, not a town.
- Internal inconsistency: body says the park is "in Paxton, FL" while frontmatter says "Town of Lakewood" — Paxton is just the name of the USGS topo quadrangle a few miles away, not the park's location.
- `range: "Piedmont-Southeast Coast"` looks wrong — Wikipedia/PeakVisor say "Florida Ridge Hills." "Piedmont" is a GA/Carolinas/VA term, possible cross-state contamination (peakbagger itself was 403-blocked so not triple-sourced).

**Fine:** elevation 345ft; rank 50th (lowest of 50 states, correct scoping); coordinates; Lake Jackson bi-state description; 0.1mi/0ft-gain walk-up framing.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd. Naming origin (postmistress vs Britton family lumber baron) disputed between sources. Access mileages and "free/open 24hrs" claim unverified — official source being dead cut this agent's research short; **flag for a follow-up re-check.**

---

### GA — Brasstown Bald
**Confirmed issues:**
- Directional error: body says Brasstown Bald is "about 30 miles southwest of... Springer Mountain" — computed bearing from coordinates shows it's actually **northeast** of Springer Mountain (distance ~28mi is about right, direction is backwards).
- Trail name/distance error: Lodging section calls it "Jack Knob's Trail" (1.5mi) — actual name is **"Jacks Knob Trail"** (no apostrophe), and its real length to the AT junction is **4.5 miles** (2.2mi just to the GA-180 road crossing), not 1.5mi.
- `official_info` link redirects to generic Chattahoochee-Oconee NF hub, no Brasstown-specific content.
- Likely optimistic drive time: "~1.5 hours north of Atlanta" — straight-line distance alone is ~84mi; third-party sources consistently say "2 hours from Atlanta."

**Fine:** elevation 4,784ft, rank 25th; range/location (Blue Ridge Mtns/Chattahoochee NF); Enotah name/history; no cross-state contamination; weather/webcam links correctly geolocated; trail distance/gain (1.4mi/426ft) roughly matches third-party sources (1.2-1.4mi/426-460ft).

**Inconclusive:** parking/shuttle fee ($5/person, free under 13) unconfirmed — official link dead, secondary sources disagree ($5 vs $7, different age cutoffs). summitpost/peakbagger/alltrails 403'd but still indexed/alive per search.

---

### HI — Mauna Kea ⚠️ cultural-sensitivity note
- **Mischaracterizes the summit-access restriction** (appears in intro, Regulations, AND FAQ): says reaching the true summit "requires express permission from the local tribe." This is **not accurate** — per Wikipedia/UH Hilo's own pages, it's a voluntary cultural request: a sign at the summit cinder cone (Puʻu Wekiu), posted at the request of Kahu Ku Mauna (the Native Hawaiian cultural advisory council), simply asks hikers not to proceed out of respect for its sacred status. No office grants/denies "permission," and there's no regulation requiring it. "Local tribe" is also inaccurate — Native Hawaiians have no federally recognized tribal government of that kind. **This both overstates a real restriction and risks misrepresenting Native Hawaiian governance on a topic the file itself flags as culturally sensitive — worth prioritizing.**
- Meters conversion error: "13,796 feet (4,198 meters)" — correct is **~4,205m** (off by ~23ft/7m).
- Internal inconsistency: frontmatter `gain_feet: 4753` vs body's own "ascends 4,576 feet" — 177ft discrepancy in the same file.
- `official_info` and `sar` both point to the same dead link (ifa.hawaii.edu/info/vis/, 404) — was never SAR-specific even when live. Current visitor management: UH Hilo's Center for Maunakea Stewardship (hilo.hawaii.edu/maunakea/).

**Fine:** elevation 13,796ft, rank 6th; no-camping rule; VIS elevation/acclimatization guidance; pets rule; Apr-Oct season; weather/webcam/snow/google links.

**Inconclusive:** peakbagger/summitpost/alltrails all 403'd (even their homepages) — couldn't verify 13.2mi distance figure. Also notable gap: Regulations section never mentions the current 4WD-required/2WD-prohibited rule for the summit road past the VIS, despite the FAQ saying visitors "can drive up."

---

### IA — Hawkeye Point
**Confirmed issues:**
- Camping fee outdated: body says "$20/night" — Osceola County's current official page says **$25/night**.
- `official_info` link dead (404) — county migrated .org→.gov; current: osceolacountyia.gov/living-here/hawkeye-point/.
- `gain_feet: 6` inconsistent with body's own "rising 20 feet above the surrounding farmland" and third-party stats (0.28mi/33ft gain for the same short walk).
- Soft inconsistency: frontmatter `location: "Private Property"` vs body's own "Osceola County now owns the highpoint" (body is correct — county has owned it since 2007/08). Same "Private Property" label is reused verbatim across many sibling guides (il/in/ks/ky/la/md/mi/ms/nd/ne/oh/ri) so may be intentional, but sits oddly next to IA's own ownership claim specifically.

**Fine:** elevation 1,670ft, rank 42nd; coordinates; directions; silo/marker description; Gull Point SP distance; campground facts (opened 2011, 12 sites, phone number); "Great Plains" range label defensible; 0.3mi distance matches third-party figures.

**Inconclusive:** peakbagger 403'd (isolation data unconfirmed elsewhere); summitpost/alltrails 403'd but likely live; webcam page rendered no content to verify; Sterler-family acreage history varies slightly across sources.

---

### ID — Borah Peak
**Confirmed issues:**
- "State senator William Borah" wrong — he was a **U.S. Senator** (1907-1940), not state senator.
- 1983 earthquake claim wrong: body says it "caused the summit to rise seven feet" — actually the summit rose **~1 foot**; it was the adjacent Lost River Valley that dropped ~8ft. Guide conflated the valley-subsidence figure with the summit.
- `location`/Regulations both say "Challis National Forest" — outdated, merged with Salmon NF in 2000, now **Salmon-Challis National Forest** (even the guide's own dead official_info URL has "Salmon-Challis" baked into its slug).
- Internal inconsistency: frontmatter `terrain: "Class IV"` (correct, matches Wikipedia's "Class 4 arête") contradicts body calling Chickenout Ridge a "semi-exposed **third**-class scramble."
- Three dead/broken links: `official_info` (404 on current USFS site), `webcam` (DNS failure, domain gone), `sar` (SSL cert mismatch, county migrated to custercountyidaho.org/departments/sheriff/).
- Typo: `description` frontmatter says "high point of **Idado**."

**Fine:** elevation 12,662ft, rank 11th; "~6,000ft prominence" (actual 5,982ft); 1912 first ascent/1934 naming history; distance/gain (8.2mi/5,301ft matches independent reports almost exactly); no-permit claim; wikipedia/weather/snow links.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd. Wikipedia's infobox now shows 12,666ft per a 2021 LiDAR resurvey (12,662 still more widely used elsewhere). Borah's 1936 presidential run was actually just a failed primary bid, not a general-election candidacy — minor simplification in the guide.

---

### IL — Charles Mound
*(The access-date rule itself is out of scope here — it's already been independently verified and automated separately.)*

**Confirmed issue:**
- `official_info` link (highpointers.org/events/) is live but wrong — it's a generic events page (currently just a 2027 convention notice) with **zero mention of Charles Mound**. A better live page exists on the same domain: highpointers.org/charles-mound-2025-access-dates-announced/.

**Fine:** elevation 1,235ft, rank 45th; no cross-state contamination (lat/long, "<0.5mi from WI border" — actual ~0.25mi, close enough); directions; distance math internally consistent (1mi gravel+0.25mi dirt ×2 = 2.5mi matching frontmatter); three owner rules match current listings; contact email appears current (corroborated by a Nov 2024 highpointers.org post); wikipedia/weather/google links live.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd. Sears Tower comparison math is internally consistent (1,450+583=2,033) and close to real figures, but couldn't pin down an authoritative "583ft ground elevation" source (building's also officially "Willis Tower" since 2009, though "Sears Tower" usage is still extremely common — likely a non-issue). `gain_feet: 275` plausible but third-party estimates range 200-262ft.

---

### IN — Hoosier Hill
**Confirmed issues:**
- A.H. Marshall claim wrong: body says he was "first to ascend all 50 state highpoints" — he completed all **48** states that existed in 1936 (AK/HI weren't states yet); **Vin Hoeman was first to complete all 50, in 1966.**
- `official_info` link dead (404, confirmed live) — Wayback shows it existed as of Oct 2024, since removed/moved.
- Summit marker description stale: body says marked by "a sign in the woods" — original sign was repeatedly stolen, **replaced in 2016 with an engraved stone/boulder monument**; any sign now is at the roadside lot, not the summit.

**Fine:** elevation 1,257ft, rank 44th; coordinates exact match; landowner name; 2005 Eagle Scout project details; Randolph County landfill controversy; directions (minor ~10mi vs ~11mi rounding); wikipedia/weather links.

**Inconclusive:** `alltrails` link path says "/us/ohio/..." for a trail physically in Indiana — possible AllTrails mis-categorization, couldn't confirm via fetch (403, no Wayback); worth a manual click-check. One-way distance varies 50ft-0.3mi across sources; one outlier puts Ohio-border distance at 2mi vs guide's ~1mi.

---

### KS — Mount Sunflower
**Confirmed inaccuracies: none found.** The cleanest file in the whole audit — every checked claim matched reliable sources:
- Elevation 4,039ft and rank 28 both match Wikipedia, SummitPost, geokansas.ku.edu, and the Highpointers Foundation archive exactly.
- Location (Wallace County, extreme western KS near CO border) and coordinates match SummitPost — no cross-state contamination.
- Ownership/landmarks (Ed and Cindy Harold, the railroad-spike sunflower sculpture, summit register) confirmed via Wikipedia.
- Driving directions and Regulations section (no permit, park on dirt road, walk the last half mile, respect private land) match SummitPost's "Getting There"/"Red Tape" nearly verbatim, including specific mileages.
- Frontmatter internally reconciles with body (0.5mi walk stated in both).
- `webcam`/`sar`/`snow` correctly "na" for this undeveloped private site.
- All live links (wikipedia, official_info, weather) return 200 with correct, specific content; summitpost loaded fine in a real browser (curl's 403 was just bot-blocking).

**Inconclusive:** peakbagger/alltrails bot-blocked, no evidence of being dead. `gain_feet: 13` (likely sourced from AllTrails) couldn't be independently corroborated — no other source gives a precise gain figure to compare against.

---

### KY — Black Mountain
**Confirmed issues:**
- Dead link: `official_info` (highpointers.org/wp-content/uploads/2010/05/ky-release.pdf) returns 404.
- Ownership contradiction: frontmatter `location: "Private Property"` conflicts with body/FAQ's repeated claim that "the state now owns the high point" — Wikipedia confirms "the Commonwealth of Kentucky now owns the land" (though only dates a 1999 purchase of mineral/timber rights specifically, not surface land — so the body's specific "acquired in 2018" date is unconfirmed by any reachable source).
- Unsupported "high-voltage tower" claim — Wikipedia's detailed summit-structure inventory (fire lookout, radio/transmitter towers, FAA radar dome, NGS benchmarks) never mentions a power-line tower.
- `view: "None"` likely overstated — Wikipedia specifically notes the Great Smoky Mountains are visible from the summit on clear days.

**Fine:** elevation 4,145ft, rank 27th (consistent with this repo's own VT/KS entries); `range: "Appalachian Plateaus"` is actually valid here (unlike MS's identical label, which was wrong) — Cumberland Mountains are a section within the Appalachian Plateau province, confirmed by Wikipedia; Route 160/Lynch-Appalachia border crossing access narrative; weather/google links; Kingdom Come State Park confirmed. "Private Property" location tag is a legitimate taxonomy used elsewhere on the site, not contamination — just possibly outdated for KY specifically.

**Inconclusive:** peakbagger/summitpost/alltrails 403'd, couldn't cross-check. Current mining/access reality is murky given documented active mining + communications infrastructure on part of the mountain — recommend independently reconfirming today's access rules before relying on the "no waiver necessary" framing.

---

### LA — Driskill Mountain
**Confirmed issues:**
- Frontmatter `range: "Ozark Highlands"` wrong — Ozarks are entirely in northern AR/southern MO (+slivers OK/KS), never reach Louisiana. Contradicts the article's OWN body text, which correctly places it in the "Piney Woods of East Texas and Louisiana" — likely cross-state copy contamination. (Even the correct label would be something like "West Gulf Coastal Plain/Piney Woods," not Ozark Highlands.)
- Body claims Louisiana is "one of **three**" states with a below-sea-level low point — actually only **two** (California's Badwater Basin and Louisiana's New Orleans). Error inherited verbatim from SummitPost's overview text, which the guide closely mirrors.
- Lodging/FAQ both say Lake Claiborne State Park is "~20 miles **northeast**" — using each page's own coordinates, the park is ~20.6mi almost due **north** (a few degrees west of north). Distance is right, direction is wrong.

**Fine:** elevation 535ft, rank 48th/"third lowest" claim; coordinates; I-20 directions and "two false summits" detail (verbatim match w/ SummitPost); private-land/no-permit regulation; namesake history; wikipedia/weather/google links live; official_info redirects louisianatravel.com→explorelouisiana.com but lands on the same correct content (not a broken redirect).

**Inconclusive:** peakbagger/alltrails fully blocked (Cloudflare challenge, not 404s) — couldn't confirm distance_miles:1.8/gain_feet:167 trail stats.

---

### MA — Mount Greylock
**Confirmed issues:**
- Prominence overstated/mislabeled: body says "nearly 2,700 feet" prominence above Adams, MA — that's just elevation-minus-town-elevation math (3,489-801), not true topographic prominence, which is actually **2,463ft** (Wikipedia)/2,484ft (PeakVisor) — misuse of the term, ~230+ft overstated.
- Elevation mismatch: frontmatter `elevation_feet: 3491` vs Wikipedia/PeakVisor's current **3,489ft**.
- Range imprecise: frontmatter "Northern U.S. Appalachians" + body's "Berkshire Mountains" both miss it — Wikipedia/PeakVisor identify Greylock specifically as the **Taconic Mountains**, "geologically distinct from the nearby Berkshires."
- Driving directions reversed: body tells NY travelers "I-90 West...towards Albany, then Route 20 East into MA" — I-90 West from Albany goes toward Buffalo (AWAY from MA); the MA border is reached via **I-90 East** from Albany (NYC travelers would use I-87, not I-90 at all).
- Season/stats inconsistency: frontmatter says `season: "All Year"` + trivial drive-up stats (0.1mi/20ft gain) but Regulations says the summit road closes Columbus Day-Memorial Day — for roughly half the year the "trivial" stats don't apply at all, a real hike is required instead.
- Minor: body says Melville viewed Greylock from an "observation deck" at Arrowhead — Wikipedia says it was his writing desk/study window.

**Fine:** rank 31st (exact match); no cross-state contamination (all place/trail names Greylock-specific); google link matches embedded map; wikipedia/weather/snow links; Melville/Moby-Dick history, War Memorial Tower, Bascom Lodge, AT crossing all genuine.

**Inconclusive:** summitpost/peakbagger/official_info/sar/alltrails all 403'd — couldn't confirm $2 parking fee, exact closure dates, Bascom Lodge season, or AllTrails' Overlook Trail stats. "Monadnock status" claim unconfirmed either way.

---

### MD — Hoye-Crest / Backbone Mountain
*(This page was flagged as "recently reviewed" going in — found real issues anyway.)*

**Confirmed issues:**
- Frontmatter `lat`/`long` (39.1475,-79.56999) wrong — sits ~7-8 miles south of the real trailhead/summit. Correct: ~39.2373,-79.485 (confirmed by FOUR independent/internal sources: Wikipedia's infobox, this same file's OWN embedded map iframe, its OWN weather link, and its OWN Access Point google maps short-link — all cluster at ~39.237, only the raw frontmatter lat/long are off). Bad value appears to match SummitPost's mislabeled "Backbone Mountain" pin — likely the error's source.
- `official_info` link dead — garretttrails.org now returns a Squarespace "Domain Not Claimed" 404 (tried both the listed URL and the org's other known slug, both dead; Garrett Trails itself is still active per Facebook/MyGarrettCounty.com, just not at this domain).
- Internal inconsistency: body says "about 1 mile round-trip with 700-foot gain" — contradicts the file's OWN frontmatter (`distance_miles: 2.3`) AND its own trail narrative (a 0.75-mile waypoint precedes the final push, which wouldn't fit inside a 1-mile RT). Wikipedia/SummitPost describe ~1mi one-way (~2+mi RT), matching the 2.3mi frontmatter, not the body's "1 mile round-trip" claim.

**Fine:** highpoint identity/location (Backbone Mountain, Garrett County MD, no cross-state mixups); elevation 3,360ft, rank 32nd; Silver Lake correctly placed in WV; I-68 Exit 14 directions; private-property/coal-company ownership and no-permit rule; gain_feet 688 vs body's "700ft" (trivial rounding, not a real error); wikipedia/weather links.

**Inconclusive:** summitpost confirmed live; peakbagger/alltrails fully blocked (persistent Cloudflare walls even via live interactive browser), couldn't confirm AllTrails' exact stats.

---

### ME — Katahdin
**Confirmed issues:**
- Entrance fee wrong: doc says "$14" — Baxter SP's current fee schedule (effective Jan 2025) says **$20/vehicle**, AND applies to non-Maine-resident vehicles only (ME residents pay nothing) — the doc omits the residency distinction entirely.
- Helon Taylor Trail distance/endpoint wrong: doc says "4.3 miles to summit, leading directly to Pamola Peak" — Baxter's own page says Helon Taylor is **3.2mi one-way to Pamola Peak**, which is NOT the true summit (Baxter Peak is, 5,268ft) — 4.3mi only works if you add the separate 1.1mi Knife Edge segment on top.
- "Chimney Pond Hut" doesn't exist — Baxter SP has no "huts" (that's AMC/White Mountains NH terminology, likely cross-state contamination). Correct facility: **Chimney Pond Ranger Station**. Also only relevant to Chimney-Pond-side routes, not a universal sign-in for every trail (Hunt Trail hikers never pass it).
- Driving directions wrong: doc says exit "Millinocket-Mattawamkeag," "~50 miles north of Bangor" — actual I-95 exit is **Exit 244** ("Medway/Millinocket"; Mattawamkeag is a different, unrelated exit), and Millinocket is **~70 miles** from Bangor, not 50.
- `webcam` link redirects to a generic listing page (neoc.com/webcams/) instead of the specific cam.

**Fine:** rank 22nd (exact match); wikipedia/official_info/weather/snow/google links all live and on-target; AT northern-terminus claim; camping season (May15-Oct15) and 4-month reservation window; no lowest-point claims made.

**Inconclusive:** summitpost/peakbagger/alltrails all fully blocked, couldn't confirm 10.4mi/4,200ft recommended-route stats. Katahdin's elevation (5,268ft in doc) has no single "correct" figure — Wikipedia itself cites both 5,267ft and 5,269ft in the same article. "Previously needed full gear, now just a flashlight" claim has no corroborating source.

---

### MI — Mount Arvon
*(Cross-checked specifically against the MN contamination pattern — none found here, see below.)*

**Confirmed issues:**
- Distance/gain stats wrong/self-contradictory: frontmatter says `distance_miles: 0.1`/`gain_feet: 10`, but body itself says the walk is "a half-mile" one-way with "moderately steep sections" (implying ~1.0mi RT, not 0.1). External sources show an even longer hike: Peakbagger logs 1.6mi one-way/421ft gain; the guide's OWN linked/embedded AllTrails page lists **11.2mi RT/1,007ft gain**.
- `official_info` link dead (404); baragacounty.org domain now redirects to keweenawbay.org (unrelated chamber-of-commerce site). Current content: visitbaragacounty.com/activities/mt-arvon/ — which also names the current landowner as Weyerhaeuser (guide just says generic "paper companies") and says visitors can now drive within 2 miles of the summit.
- Minor: guide says Arvon rises "~10 miles" north of Lake Superior; Wikipedia says ~8 miles SOUTH of the lake. Traces to an old SummitPost estimate.
- Notable currency gap: guide states as settled fact that Arvon "is Michigan's highest point" — a 2025 peer-reviewed LiDAR resurvey (Gilbertson et al.) found **Mount Curwood now measures 0.4ft higher**, reversing the 1982 result the guide describes; separately a 2018 NOAA survey found a Tilden Mine waste pile over 20ft higher than Arvon. Arvon remains the conventionally-listed highpoint, but it's no longer undisputed.

**Fine:** ✅ Confirmed: this file's own location/range description (Huron Mountains/Upper Peninsula/Baraga County) is accurate and self-consistent — **no Minnesota/Eagle Mountain content was found here.** The MN→MI contamination was one-directional (MN's copy wrongly describes MI's region), not a two-way swap. Elevation 1,979.238ft vs Curwood's 1,978ft and the 1982 resurvey story; rank_elevation 38 (50-states-only, correctly not claiming the territories-inclusive 41); driving directions match the canonical published route verbatim; Baraga State Park camping real; wikipedia/weather/snow links live; free/no-permit access confirmed.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd but archived snapshots show matching valid content (bot-blocking, not dead).

---

### MN — Eagle Mountain
*(Piloted first, before the rest of the audit — this is what prompted the full 50-state pass.)*

**Confirmed issues:**
- Body says "Huron Mountain Range" / "north-central Upper Peninsula" — that's Michigan's highpoint region (Mount Arvon), not Minnesota's. Correct: Misquah Hills, Cook County, near the BWCAW.
- "15 miles from Lake Superior" — best-sourced figure is ~12 miles.
- Internal inconsistency: body says "3.5-mile trail" (one-way?) but frontmatter `distance_miles: 6.6` doesn't reconcile (3.5×2=7.0).
- `official_info` link stale — redirects to generic Superior NF landing page. Current: fs.usda.gov/r09/superior/recreation/trails/eagle-mountain-trail
- `sar` link dead after county site migration (co.cook.mn.us → cookcountymn.gov).

**Fine:** elevation 2,301 ft; rank 37th; prominence 1,321 ft; isolation 437 mi (corroborated, not first-hand confirmed); BWCAW free self-issued permit rule; wikipedia/weather links.

**Inconclusive:** summitpost/peakbagger/alltrails links (403'd to bot-check, likely fine).

---

### MO — Taum Sauk Mountain
**Confirmed issues:**
- Frontmatter `lat`/`long` wrong — sit ~1.9 miles southwest of the real summit/trailhead. Every OTHER geo-reference in the same file (weather link, Access Point google maps link, embedded iframe) clusters tightly around the correct location (~37.5703,-90.7279 per Wikipedia) — only the raw frontmatter lat/long are off.
- Body calls the range "St. Francis Mountains" (twice) — correct name is **"St. Francois Mountains."** Not just a spelling nuance — "St. Francis" is a distinct real Missouri name (the St. Francis River), so reads as a genuine mix-up.

**Fine:** elevation 1,772ft, rank 41st; Mudlick Mountain prominence comparison (693ft vs Taum Sauk's ~512-522ft) correctly explaining why Taum Sauk isn't the prominence title-holder; paved summit trail stats (0.4mi RT/13ft gain, ADA-accessible) match the state park's own accessibility page; no hiking fee/permit but campground fee matches current mostateparks.com; Mina Sauk Falls correctly called MO's highest waterfall, 3-mile loop confirmed; Highpointers Club founder Jack Longacre correctly named; no cross-state contamination; 2005 reservoir failure isn't mentioned so nothing to check there.

**Inconclusive:** peakbagger/summitpost/alltrails all 403'd (even homepages). Mina Sauk Falls "132ft in three stages" figure unconfirmed (Wikipedia gives no height). Minor clarity gap (not an error): the 0.4mi/13ft stats describe the short paved summit walk while the "three-mile loop" prose describes the separate Falls Trail — both correct individually but not clearly distinguished as two different trails.

---

### MS — Woodall Mountain
**Confirmed issues:**
- Range wrong: frontmatter `range: "Appalachian Plateaus"` — that physiographic province doesn't include Mississippi at all (covers NY/PA/OH/MD/WV/VA/KY/TN/AL/GA per Wikipedia); Woodall Mountain's actual range is "Southwest Appalachian Mountains"/"Appalachian foothills." Possible copy from another state.
- Battle of Iuka aftermath mischaracterized: body says Union troops "driven Confederate troops from Iuka to Corinth, MS" — actually Price's army retreated south via Fulton Road to Ripley (joining Van Dorn's army 5 days later), and the COMBINED force then attacked Corinth days later — not a direct retreat "to Corinth."

**Fine:** elevation 806ft, rank 47th; Union troop strength ~4,500 (exact match); naming history; access-road description; no-fee claim; google/weather links.

**Inconclusive:** peakbagger/summitpost/alltrails 403'd. "Renamed in 1878" date unverified. Regulatory claims (hunting club/easement/no-trespassing) unsourced. Notable gap: Wikipedia confirms 3 radio towers + NGS survey disk/register at summit, none mentioned in guide (not wrong, just missing, given frontmatter says "view: None").

---

### MT — Granite Peak
**Confirmed issues:**
- Elevation wrong: frontmatter `elevation_feet: 12799` — Wikipedia currently lists **12,807ft**.
- `official_info` redirects to Shoshone NF's generic listing page (70 unrelated campground/picnic listings) — Shoshone NF is headquartered in WYOMING and never mentions Granite Peak/Montana at all. This also contradicts the doc's own `location` field, since Granite Peak's MT-side access is actually part of Custer Gallatin NF.
- `location` field misspells "Gallatan" (should be Gallatin) AND describes two separate forests ("Custer & Gallatan National Forests") that merged into the single **Custer Gallatin National Forest** back in 2014.
- `range: "Greater Yellowstone Rockies"` questionable — not a Wikipedia-used name (actual range is **Beartooth Mountains**). Notably, `wy.mdx` (Gannett Peak — a DIFFERENT mountain in the Wind River Range) uses the IDENTICAL string "Greater Yellowstone Rockies" — strongly suggests a copy-pasted/templated value rather than a peak-specific name for either file.
- Moderate confidence: body hyperlinks "Lady of the Lake Trail" to an AllTrails URL slugged "granite-peak-via-south-west-ramp-route" — suggests AllTrails' actual name for that trail differs from what's stated (AllTrails blocked automated access, not fully confirmed).

**Fine:** rank 10th (confirmed between NV's Boundary Peak and ID's Borah Peak); first-ascent date/party (Aug 29 1923, Elers Koch et al.); "hardest state highpoint outside Alaska" framing; distance_miles 27.0 reconciles with body's "13-14mi one way"; sar link (Park County MT Sheriff, confirmed real) and google maps/weather links all work.

**Inconclusive:** peakbagger/summitpost 403'd, AllTrails rendered no usable text. Prominence/isolation, exact AllTrails stats, Couloir 1/2 route-fork detail, gain_feet:5780, and East Rosebud campground claim (3 campgrounds/34 sites/$9/night) all unverified.

---

### NC — Mount Mitchell
**Confirmed issues:**
- Frontmatter `location: "Pisgah National Forest"` wrong — the summit itself sits inside **Mount Mitchell State Park** (Pisgah NF only surrounds/borders it). Contradicts the article's OWN body text ("summit lies within Mount Mitchell State Park...").
- "~35 miles northeast of Asheville" overstates it — official NC State Parks page says **30 miles**. The 35mi figure traces to SummitPost's text, which the guide also mirrors, but doesn't match the managing agency's own current figure.
- `official_info` link dead (404) — NC Parks migrated URL structure; current: ncparks.gov/state-parks/mount-mitchell-state-park/trails.

**Fine:** elevation 6,684ft, rank 16th; "highest point east of the Mississippi" framing; Mount Craig as 2nd-highest eastern peak; trail stats (0.4mi/91ft gain, confirmed via archived AllTrails); coordinates; google maps link; park history (1915 founding, Locke Craig's 1913 election, logging/railroad/Parkway dates — matches SummitPost AND independently corroborated by NCpedia); directions; regulations/camping text; sar link live and current (not generic); wikipedia/weather/webcam/snow links all live.

**Inconclusive:** peakbagger/alltrails bot-blocked but cross-checks via Wikipedia's own citations + Wayback snapshots found no discrepancies. Exact spelling of a 1909 state forester's name in the history section unconfirmed beyond SummitPost.

---

### ND — White Butte
**Confirmed issues:**
- Geology/range wrong, likely cross-contamination from "Dakota": frontmatter `range` + body both say "Dakota Hogback Formation... over 60 million years ago" — the Dakota Hogback is a CO/WY Front Range ridge of Cretaceous Dakota Sandstone, unrelated to White Butte. Per SummitPost (geology credited to former ND State Geologist), White Butte's actual caprock is Oligocene White River Group + Miocene Arikaree Group over the Chadron Formation — roughly **16-34 million years old**, not a hogback and not 60Ma.
- Internal math error: body says hike is "approximately 1.7 miles round trip" — contradicts frontmatter `distance_miles: 3.4`. SummitPost confirms 1.7mi is ONE-WAY, 3.4mi is round trip. Body should say "1.7 miles one-way (3.4 round trip)."
- `wikipedia` link is a disambiguation page, not the article — resolves to a list (SD community, SD summit, 2 Saskatchewan entries, AZ prominence) instead of the ND highpoint article. Should link White_Butte_(North_Dakota).
- Trail description possibly outdated: recent Google Maps reviews + a SummitPost Oct-2025 trip report (noting a relocated trailhead, "new trail under construction" since 2023) describe a shorter ~0.88mi one-way/~400ft-gain hike from a parking lot — shorter than the file's "walk ~1 mile of private dirt road to a gate" narrative, which matches the OLDER pre-2023 route. Worth a current re-check.

**Fine:** elevation 3,506ft; location between Amidon/Bowman on private land (Dennis family), $5 donation; ~426ft gain consistent with recent reports; no-permit/close-gate/no-trespassing rules; rattlesnake hazard and summit register; summitpost/official_info/weather/snow links all live.

**Inconclusive:** peakbagger/alltrails bot-blocked. Rank 30th (file) vs SummitPost's prose saying 31st — minor cross-source disagreement, not resolved. Dakota/Lakota "sacred site" status unconfirmed either way.

---

### NE — Panorama Point
**Confirmed issues:**
- Elevation internally inconsistent: frontmatter `elevation_feet: 5424` vs body's own "5,429 feet" — Wikipedia's infobox (the source behind the "20th among state highpoints" ranking) uses 5,429ft; the physical summit marker reads 5,424ft. Pick one.
- `official_info` link dead (404) — Kimball's chamber site current replacement: visitkimball.com/places/panorama-point/.
- "1971" federal-recognition date misattributed: body says Panorama Point "was officially recognized... by the federal government and mapping companies in 1971" — per visitkimball.com (the likely source), 1971 is actually when the Chamber of Commerce installed the summit MARKER; federal/mapping verification came later at an unspecified date.

**Fine:** coordinates exact match; location/region (Kimball County, no cross-state contamination); rank 20th confirmed; 1951 discovery story (Art Henrickson/Claude Alden, WWI altimeter) and full turn-by-turn directions both verbatim-confirmed; "~33 miles from Kimball, NE"; no-permit/donation-box framing; drive-up/zero-gain characterization; weather link live.

**Inconclusive:** current ownership ("Glen and Jill Klawonn") — Wikipedia names only "High Point Bison Ranch" with no owner, visitkimball.com instead names an apparently older/unrevised landowner (Henry Constable) — neither confirms nor contradicts. $3 donation amount and exact final-approach distance unconfirmed. summitpost/peakbagger/alltrails/atlas obscura all 403'd.

---

### NH — Mount Washington
**Confirmed issues:**
- Wind record overstated: body claims it "hold[s] the record for the highest wind speed ever recorded" (231mph, 1934) — that was the WORLD record only 1934-1996; a 253-254mph gust at Barrow Island, Australia (1996) is the current WMO-ratified world record. MWA's gust is now a regional/historical record, not the world's.
- Cog Railway directions wrong: guide says take "Mt. Clinton Road from Bretton Woods" to reach Marshfield Station — actual Bretton Woods route is Base Station Road ("Cog Base Road"); Mt. Clinton Road is a SEPARATE, seasonal route from Crawford Notch (US-302), closed to cars in winter.
- Presidential Range length overstated: text says the massif "stretch[ed] 30 miles east to west" — Wikipedia gives the ridge/traverse as **19 miles**.
- Three dead/mistargeted links: `official_info` redirects to generic White Mountain NF hub, not Mount Washington/Pinkham Notch specific; `webcam` 404s (MWO's live webcams moved to a different URL); `sar` (wildlife.state.nh.us) connection refused on both http/https — NH Fish & Game appears to have migrated to wildlife.nh.gov.

**Fine:** elevation 6,288ft, rank 18th; location "Mount Washington State Park" (60.3-acre summit parcel); both google maps codes resolve correctly; snow/avalanche-center and weather links live; "World's Worst Weather" branding matches the Observatory's own self-description.

**Inconclusive:** Lakes of the Clouds Hut elevation and Harvard Cabin fees/capacity couldn't be re-verified (AMC/HMC pages 404'd). WMNF parking-pass prices and summitpost 403'd. Notable: the `alltrails` field points to the long Lion Head Trail while frontmatter's distance/gain (0.1mi/20ft) describe the separate short walk-up — worth checking since other guides (e.g. NC's) tie that field to the actually-recommended route instead.

---

### NJ — High Point Monument
**Confirmed issues:**
- Monument design comparison wrong: body says it's "modeled after the Washington Monument" — actually modeled after the **Bunker Hill Monument** (Charlestown, MA), confirmed by NJ DEP's OWN official page, Wikipedia, AND Atlas Obscura all independently agreeing.
- Day-use fee understated/oversimplified: Regulations+FAQ say "up to $10/vehicle" at peak times — actual current fee is tiered: NJ residents $5 weekday/$10 weekend; **non-residents $10 weekday/$20 weekend**. True max is $20, not $10, and the resident/non-resident split is omitted entirely.

**Fine:** naming (Kittatinny Mountain ridge, range "Appalachian Ridges" matches Peakbagger's exact label, no cross-state contamination); elevation 1,803ft, rank 40th; 1923 founding/Kuser donation; "over 16,000 acres" (matches NJ DEP's own page; Wikipedia alone cites a conflicting 14,193-acre figure, but the managing agency's own number backs the guide); Monument Trail blazes/distance (~3.5mi matches AllTrails' commonly-cited 3.4-3.6mi); frontmatter's separate 0.2mi/40ft stats correctly describe the short parking-to-monument walk, not the full loop (no contradiction); Lake Marcia, AT parking, google/weather/snow links all live. official_info link still works but now chains through two redirects — worth updating to the direct dep.nj.gov URL.

**Inconclusive:** peakbagger/alltrails/NJ DEP pages themselves all bot-gated against direct fetch — figures cross-checked via Google's indexed snippets instead (good corroboration, not a direct load). No isolation/prominence in frontmatter to check.

---

### NM — Wheeler Peak
**Confirmed issues:**
- Sub-peak name wrong: body calls it "Walker" — actual name is **Mount Walter** (13,141ft, just north of Wheeler, commonly mistaken for the true summit).
- Sangre de Cristo range stats wrong: body says range "stretches 250 miles from Santa Fe, NM to Salida, CO" — Wikipedia says **~242 miles**, from Poncha Pass, CO (near, not at, Salida) to Glorieta Pass, NM (southeast of, not at, Santa Fe) — and explicitly notes the range does NOT reach Salida.
- Dead link: `webcam` (skitaos.com/ski-ride/cams-conditions) 404s — current nav points to skitaos.com/weather.
- `official_info` redirects to generic Carson NF listing (135 results), no Wheeler Peak/Williams Lake mention.
- Elevation mismatch with the article's OWN cited source: frontmatter/body use 13,161ft; Wikipedia's CURRENT infobox (the exact page linked in frontmatter) lists 13,167ft — likely a datum difference, but doesn't match what's actually linked.

**Fine:** range/location naming (Sangre de Cristo, Carson NF/Wheeler Peak Wilderness); rank 8th; namesake history (George M. Wheeler); Taos Pueblo sacred-mountain significance; internal distance/gain math (8.7mi/2,972ft vs "~8mi/3,000ft" prose) consistent; google maps/iframe consistently point to same location; weather link live.

**Inconclusive:** peakbagger/summitpost/alltrails/hiking project all 403'd. "1948 survey by Harold D. Walker" claim, Truchas-Peak-former-highpoint history, "first two miles on private property" claim, and "~19 miles from Taos" distance all unconfirmed (the Walker/1948 detail is especially worth a manual check given the separate confirmed Walter/Walker mix-up above). `sar` link is a generic NM State Police homepage, not SAR-specific.

---

### NV — Boundary Peak
**Confirmed issues:**
- Elevation internally inconsistent: frontmatter `elevation_feet: 13140` vs body's own "13,147 feet" — current Wikipedia infobox is 13,147ft (NAVD88); 13,140 is the older NGVD29 figure. Pick one datum.
- Trail distance internally inconsistent: frontmatter `distance_miles: 7.0` vs body's own "7.4-mile round-trip."
- "Montgomery Peak stands 298 feet higher" doesn't reconcile with ANY elevation pair in the file or sources — true gap is ~300-301ft either using current (13,447 vs 13,147) or older (13,441 vs 13,140) figures, not 298.
- `official_info` redirects to generic Inyo NF listing, zero mention of Boundary Peak/wilderness/trailhead.

**Fine:** managing agency (Inyo NF); coordinates; prominence (~253ft matches "just over 250ft"); rank 9th; White Mountains range id and Montgomery Peak twin-summit relationship; Von Schmidt survey name/date; weather/snow/sar links (sar confirmed live, correct Esmeralda County Sheriff contact); google maps access link.

**Inconclusive:** peakbagger/summitpost/alltrails 403'd, couldn't verify AllTrails' 4,215ft gain/7.4mi stats. "Legally settled in 1980" boundary-dispute date unconfirmed (sources verify 1872-73 survey + 1893 resurvey, no 1980 date found).

---

### NY — Mount Marcy
**Confirmed issues (several):**
- `range: "Canadian Shield"` nonstandard/wrong — Wikipedia's infobox lists "Adirondack Mountains" as the range (Canadian Shield is the broader GEOLOGIC PROVINCE, not a range name). No OTHER guide in this repo uses a geologic province for this field — all 49 others use actual range names.
- Parking fee "$15" outdated — ADK's current page says non-members pay **$25/day** before 1pm; $15 is only the after-1pm half-day rate.
- Camping restriction wrong: guide says restricted "below 4,000 feet" — DEC's current page says **no camping above 3,500 feet**, except at a lean-to.
- "Summit wardens" wrong term — actual program (founded 1989) is the "Summit Stewardship Program," staffed by "summit stewards."
- "Adirondack Loj" (used twice) misspells the property's deliberately-spelled official name, **"Adirondak Loj"** (no "ck" — historic intentional spelling).
- `official_info` redirects to a generic High Peaks Wilderness Complex landing page, Marcy-specific content gone.
- `sar` link is just the generic DEC homepage, no SAR content — real emergency contact is Forest Ranger Dispatch (1-833-NYS-RANGERS).

**Fine:** elevation 5,344ft, rank #21 (confirmed both ways); "two exclusive 5,000ft peaks" (Marcy+Algonquin) and "43 of 45 other major peaks visible" both match Wikipedia exactly; Van Hoevenberg Trail stats internally consistent; wikipedia/weather/snow/google links all correct.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd. "800 feet above tree line" claim and exact summit-panorama compass directions unconfirmed. Day-hiker shower availability at trailhead unconfirmed.

---

### OH — Campbell Hill
**Confirmed issues:**
- Elevation overstated by ~1ft: frontmatter `elevation_feet: 1550` — documented elevation is **1,549.09ft** (confirmed by Wikipedia, the on-summit 1900 USC&GS marker text, AND Highpointers.org).
- `official_info` link dead (hard 404) — no obvious corrected URL found on that domain.
- `alltrails` link is just the generic alltrails.com homepage, not a Campbell Hill page — effectively broken.

**Fine:** region/location (Bellefontaine, Logan County, no cross-state contamination); Charles D. Campbell ownership history; 664th Aircraft Control/Air Defense Command Cold War narrative + conversion to Ohio Hi-Point Career Center; rank 43rd (confirmed states-only ranking); driving directions; phone number (matches current school site); no-permit/pedestrian-gate claims; lat/long/google link/iframe all resolve to same place; wikipedia/summitpost/weather/webcam links all live.

**Inconclusive:** peakbagger persistent Cloudflare challenge, can't confirm either way. Stated visitor hours (M-F 6:30am-10pm, Sat 6:30am-3pm) match SummitPost almost verbatim (likely the guide's own source) but newer visitor reports hint actual access may now be simpler (open until dusk daily) — not confirmable either way.

---

### OK — Black Mesa
**Confirmed issues (several):**
- Cap rock misidentified: body says named for "dark pumice" — actually **basalt** (Raton basalt lava); pumice is a different, light-colored rock.
- Volcanic age wrong by an order of magnitude: body says lava is "30 million years ago" — Wikipedia dates it **3-5 million years ago**.
- Wrong lava source named: body credits "the nearby Capulin Volcano" specifically — actual source is an unnamed vent in the Raton-Clayton volcanic field; NPS confirms Capulin erupted only ~56,000-62,000 years ago, far too young to have produced Black Mesa's 3-5-million-year-old flow.
- CO summit elevation off: body says "5,715 feet" (USGS) — Wikipedia gives 5,705ft.
- OK summit elevation off: frontmatter `elevation_feet: 4975` — Wikipedia AND the official TravelOK state-park page both say **4,973ft**.
- Mesa de Maya elevation off: body says "6,840+ feet" — Wikipedia lists 6,902ft (and doesn't corroborate the "Corona" alt-name either).
- Trail distance internally inconsistent: frontmatter `distance_miles: 8.8` vs body's "8.5-mile round-trip" (8.5 matches TNC's own preserve page) — AND the body's own segment breakdown (2.5mi+1mi+1mi one-way) sums to **9.0mi round trip**, matching NEITHER figure already in the same file.
- Trailhead directions reversed: doc says from Kenton "head east on CR 325" — The Nature Conservancy's official page instead routes hikers WEST on Hwy 325 toward/through Kenton before turning north — opposite direction. (The "5.0 miles north" and "lot on the left/west side" details do match.)

**Fine:** rank 23rd; OK/CO/NM tri-state setting; Cimarron County's unique 4-state border; granite obelisk summit marker; regulations (free, no permit, dawn-to-dusk, no camping in preserve but allowed at state park); wikipedia/official_info/weather links all live and accurate.

**Inconclusive:** summitpost/peakbagger/alltrails 403'd, couldn't cross-check AllTrails' own distance/gain. No prominence/isolation fields exist in this file to check.

---

### OR — Mount Hood
**Confirmed issues:**
- Volcanic history wrong: body says "last erupting in 1907" — per Wikipedia (citing USGS), that 1907 event was later discredited as non-eruptive fumarolic activity. Last CONFIRMED eruptive activity was 1865-66, last major eruptive period 1781-82.
- Timberline Lodge elevation wrong: body says "5,800 feet" — Wikipedia gives **6,000ft**. Also fails internal consistency: frontmatter's elevation_feet(11,239) minus gain_feet(5,308) implies a ~5,931ft trailhead, closer to Wikipedia's 6,000 than to the body's own 5,800.
- Waste disposal rule outdated: guide says use "blue bags" — current official Mt. Hood NF climbing-permit page specifies **WAG bags** (free at Timberline Climbers Registration), not blue bags.
- `sar` link loads but is just the generic Clackamas County Sheriff department page, no SAR/Mount-Hood-specific content.
- `official_info` redirects to the general Mt. Hood NF recreation hub, functional but generic.

**Fine:** rank 13th; Jan 2024 climbing-permit rule (required above 9,500ft, $20/3-day or $50/annual via Recreation.gov, no quota — verified verbatim against current FS page); Palmer lift top at 8,600ft; Timberline Lodge's 1936-38 WPA construction and The Shining filming history; coordinates/range/location (no cross-state contamination); wikipedia/weather/webcam links live.

**Inconclusive:** summitpost/peakbagger/alltrails/britannica all 403'd — route distance(6.7mi)/gain(5,308ft) unconfirmed. elevation_feet(11,239) has too much legitimate cross-source variance to call an error (Wikipedia's current NAVD88 is 11,249ft, FS's own page says 11,240ft, Wikipedia ALSO cites 11,239 as a valid older survey). "2nd-most-climbed glaciated peak behind Mt. Fuji" claim and current Mountain Locator Unit rental availability (current FS page recommends PLBs, never mentions MLUs) unverified.

---

### PA — Mount Davis
**Confirmed issues:**
- Trail distance/gain wrong: frontmatter `distance_miles: 2.0`/`gain_feet: 124`, body calls it "a two-mile round-trip" — Wikipedia AND SummitPost both say High Point Trail is 0.8mi ONE-WAY (~1.6mi RT, not 2.0) with ~200ft gain (not 124ft). Two independent sources agree, not AllTrails-confirmed since that was blocked.
- Camping regulation backwards: guide says camping "restricted to designated backpacking sites" — the official Forbes State Forest page (reached via the guide's OWN official_info redirect) says the OPPOSITE: primitive dispersed backpack camping is allowed in "most areas" without a permit; "designated" sites are actually for motorized/roadside camping requiring a permit+reservation. More importantly, that SAME page explicitly CLOSES the Mt. Davis Natural Area itself (+300ft of the picnic area) to backpack camping — a Mount-Davis-SPECIFIC closure the guide omits entirely.
- Internal inconsistency: body names "Mount Davis Highpoint Trail" TWICE with two different distances — first as the 2-mile main route, then as "the 5.7-mile Mount Davis Highpoint Trail loop." No source corroborates a 5.7-mile loop under this name — appears fabricated or confused with another trail.
- Range likely imprecise: `range: "Appalachian Plateaus"` — Wikipedia/SummitPost/Peakbagger-style sources all classify it under "Allegheny Mountains" specifically (summit of Negro Mountain ridge). "Appalachian Plateaus" is a legitimate broader province though, so may be a granularity choice rather than outright error.

**Fine:** elevation 3,213ft, prominence 653ft; Somerset County/Forbes State Forest location; coordinates; name origin (John Nelson Davis); Negro Mountain 30-mile ridge renaming-debate history (2007 PA resolution, 2011 MD bill, 2019 sign removal); CCC-built trail/observation tower; no fee/permit to hike; 1-night permit-free camping threshold; rank 33 (standard 50-state convention); driving directions verified valid; access point resolves correctly; wikipedia/summitpost/weather links live.

**Inconclusive:** peakbagger/alltrails both persistently 403'd, couldn't confirm live/accurate first-hand. Isolation distance/reference point unconfirmed beyond Wikipedia/SummitPost.

---

### RI — Jerimoth Hill
**Confirmed issues:**
- Elevation gain contradiction: frontmatter `gain_feet: 0` vs body's own "elevation gain of ten feet" — BOTH Wikipedia AND the Highpointers Club's own official guide table confirm ~10ft, not 0. Frontmatter is wrong and self-contradicts the body.
- Ownership history reversed/fabricated: body says "Brown University acquired it in 2012 and transferred ownership to RI DEM in October 2014" — Wikipedia says Brown already owned the summit for DECADES (donated by alumnus Walter Turner, used as an observatory site); Brown did NOT "acquire" it in 2012. In 2014 Brown instead **sold** the summit to the state (retaining future observatory rights) — the "2012 acquisition" appears invented and the transaction direction is backwards. ("RI DEM/October 2014" specifics unconfirmed either way, not flagged wrong by Wikipedia, just unverifiable.)
- `location: "Private Property"` stale — both Wikipedia and the guide's OWN body narrative establish state ownership by 2014; contradicts itself.
- `official_info` link dead — redirects to a 404.

**Fine:** elevation 812ft, rank 46th; wikipedia/weather/google links all live and correct; I-395/Route 101/East Killingly directions corroborated; historic landowner-hostility narrative (Richardson) accurately summarized; `range: "Northern U.S. Appalachians"` matches this site's own consistent New England convention, not an error.

**Inconclusive:** summitpost/peakbagger/alltrails all 403'd (even homepages). "24 hours access" and "2005 Highpointers Club built the trail" claims unconfirmed. Body's "200 yards" one-way distance is somewhat shorter than Wikipedia's "0.3-mile trail" — possibly rounding/realignment, not confirmed wrong.

---

### SC — Sassafras Mountain
*(Full-depth follow-up to the item-1 fix already applied — see the "Jocassee Gorges" naming fix in `sc.mdx`.)*

**Confirmed issues (new, beyond what's already been fixed):**
- **`keywords` frontmatter still says "Jocassee Gorges Wilderness Area"** — the same wrong name already fixed in `location` and the body — this one occurrence was missed.
- Short summit-walk stats wrong: frontmatter `distance_miles: 0.2`/`gain_feet: 52` match NEITHER the official source NOR the file's own body text — Conserving Carolina's page (the file's OWN official_info link) says **0.5mi RT/80ft gain**, and the body ITSELF independently says "a direct 0.5-mile trail from the parking area" — contradicting its own frontmatter.
- Camping regulation incomplete/misleading: "Lodging & Camping" flatly says "backpacking and dispersed camping are allowed within Jocassee Gorges" — omits that SCDNR requires a **permit** for general backcountry camping there (only camping directly along the Foothills Trail corridor, within 100ft, is exempt).
- AllTrails link filed under the wrong state: the URL is .../us/**north-carolina**/sassafras-mountain... even though presented as the SC highpoint's route (AllTrails' own "near Sassafras Mountain" index IS filed under South Carolina).

**Fine (from this follow-up pass):** range "Blue Ridge Mountains"; rank_elevation 29 (50-states-only ranking, correctly not the territories-inclusive 30); coordinates; wikipedia/summitpost/official_info/weather links; F. Van Clayton Memorial Highway directions; Foothills Trail from Chimneytop Gap (~4.7mi RT/~1,400ft gain, corroborated); no permit/fee for hiking/parking; "three states visible from tower" claim corroborated. (Already confirmed fine via the item-1 pass: tower opened April 2019; elevation 3,533ft most authoritative post-construction figure.)

**Inconclusive:** peakbagger/alltrails bot-blocked, couldn't confirm prominence/isolation or fully render the AllTrails page.

---

### SD — Black Elk Peak
**Confirmed issues:**
- `range: "Great Plains"` wrong — parent range is the **Black Hills** (an outlying Rocky Mountain subrange that RISES FROM the Great Plains, per Wikipedia's own infobox). "Great Plains" names the surrounding lowland, not the range itself.
- Regulations section says Custer SP "requires a per-person and vehicle entry fee" — current official fee page shows it's **per vehicle** ($25/1-7 days or $20/motorcycle; $40/$60 annual); a per-person fee ($4) applies only to motorcoach passengers, not hikers.
- `official_info` redirects to a generic 177-item Black Hills NF directory, no mention of Black Elk Peak/Wilderness.
- Internal math doesn't reconcile: body says Trail 9 South is "~3.8 miles one way" with "~1,000ft" gain (implying 7.6mi RT) — but frontmatter says `distance_miles: 6.4`/`gain_feet: 1500`. One-way would need to be ~3.2mi to match frontmatter's RT figure.
- Uncorroborated/likely fabricated claim (stated TWICE): "highest summit in a line between the Rocky Mountains and the Pyrenees in France" — Wikipedia only discusses a narrower, contested "highest point east of the Rocky Mountains" claim, no mention of France/Pyrenees anywhere (also, Pyrenees straddle France/Spain, not just France).

**Fine:** elevation 7,242ft, rank 15th; Aug 2016 Harney→Black Elk renaming vote/rationale; 1938 CCC fire lookout tower history; location (Black Hills NF); sar/weather links live and current.

**Inconclusive:** peakbagger/summitpost/alltrails all 403'd. `snow` link loads but defaults to Snow-Water-Equivalent layer instead of the Snow-Depth layer its URL requests. "40-60 million years ago" Laramide uplift dating roughly consistent with general framing but not pinned to exact figures.

---

### TN — Kuwohi (Clingmans Dome)
**Confirmed issues:**
- Range wrong, likely cross-state template contamination: frontmatter `range: "Blue Ridge Mountains"` — Kuwohi's actual parent range is the **Great Smoky Mountains** (confirmed by Wikipedia AND SummitPost). "Blue Ridge Mountains" is the range used for NEIGHBORING highpoints (Mount Mitchell NC, Mount Rogers VA, Brasstown Bald GA) — looks like a copied template value.
- Elevation gain internally inconsistent: frontmatter `gain_feet: 337` vs body's own "gains 332 feet" (stated TWICE) — 332 matches general consensus sourcing, 337 appears to be the error.
- Trail distance doesn't reconcile: frontmatter `distance_miles: 1.3` vs body's own "a half-mile paved path" (≈1mi RT) AND NPS's own page saying "1 mile roundtrip" — 1.3 matches none of these.
- Renaming petition year wrong: FAQ says "In 2023, the Eastern Band of Cherokee Indians successfully petitioned to restore the name Kuwohi" — per Wikipedia, the tribal council authorized the formal petition in **early 2024**, approved and effective **September 18, 2024**. No 2023 date corroborated anywhere.
- Minor/recheck annually: guide says road closes "December 1 through March 31" — NPS's current seasonal page lists 2026 season as open April1-Nov29 (closed Nov30-Mar31) — off by a day or two from current posted dates.

**Fine:** elevation 6,643ft, rank 17th; TN/NC border location within GSMNP; Cherokee meaning "mulberry place"; observation tower completed Oct 1959; "up to 100 miles" visibility; 7-mile access road; current $5/$15/$40 parking-tag system; pets/bikes prohibition; ALL nine frontmatter links live and on-topic (including sar - teambusar.org, confirmed legitimate active GSMNP-area SAR nonprofit).

**Inconclusive:** peakbagger/alltrails Cloudflare/CAPTCHA-blocked, exact stats unconfirmed. "Smokemont and Elkmont closest campgrounds" claim geographically plausible but NPS's campground page 404'd, not definitively confirmed.

---

### TX — Guadalupe Peak
**Confirmed issues:**
- Trail distance/gain: THREE different distances across one file — frontmatter 8.1mi, body/FAQ "8.4-mile," and the page's OWN linked official NPS source says **8.5 mile round trip**; also two different gains (frontmatter 2,950ft vs body's "3,000-foot," NPS also says 3,000ft).
- Elevation off by 2ft: frontmatter `elevation_feet: 8749` — current Wikipedia/states-by-elevation both say **8,751ft**. (rank_elevation:14 is correct and confirmed.)
- Access-point label names the WRONG TOWN: link text reads "Dell City, TX" — reverse-geocoding the actual coordinates resolves to **Pine Springs, Culberson County, TX** (same ZIP NPS itself uses). Dell City is a separate village ~22 miles away in a different county. The underlying google maps link itself resolves correctly — only the displayed address TEXT is wrong.

**Fine:** Capitan Reef/Permian geology; summit pyramid history (American Airlines, 1958, Butterfield Overland Mail centennial); pet policy; location (no cross-state contamination); wikipedia/NPS/weather/snow/google links all live.

**Inconclusive:** backcountry campsite permit requirement unclear — NPS's wilderness-permit pages all 404'd this session, guide never mentions needing one which is suspicious given NPS generally requires one. "80mph" wind-gust claim and "Southwest Basins and Ranges" range label plausible but unverified. summitpost/peakbagger/alltrails 403'd.

---

### UT — Kings Peak
**Confirmed issues:**
- `location: "Ashely & Wasatch National Forests"` — "Ashely" is a typo for "Ashley." More substantively, "Wasatch National Forest" hasn't existed standalone since 1973 (merged into Wasatch-Cache, then again in 2008 into **Uinta-Wasatch-Cache National Forest** — the guide's own official_info link domain is literally "uwcnf"). Correct: Ashley NF and Uinta-Wasatch-Cache NF.
- `range: "Western Rocky Mountains"` — not a real classification. Wikipedia's Uinta Mountains article just says "a subrange of the Rocky Mountains," no "Western" qualifier anywhere.
- `official_info` redirects to generic Uinta-Wasatch-Cache NF homepage, no Kings Peak/Henry's Fork specific content.
- `sar` link (summitcountysheriff.org) wrong county — Kings Peak's summit is in **Duchesne County**, not Summit County (confirmed independently via Wikipedia's Kings Peak AND Duchesne County articles; the wilderness spans both counties but the peak itself doesn't sit in Summit County).
- Trail distance: guide says 27.8mi RT (internally consistent) — Wikipedia says the SAME route (Henry's Fork/Anderson Pass) is **29 miles RT**, a ~1.2mi discrepancy (only sourced to Wikipedia; AllTrails/SummitPost blocked).

**Fine:** elevation 13,528ft, rank 7th; Clarence King naming/history; weather link live and geo-correct; Henrys Fork Campground google link; Anderson Pass summit-scramble description matches Wikipedia; frontmatter internally consistent with body prose otherwise.

**Inconclusive:** peakbagger/summitpost/alltrails/Utah Avalanche Center snow link all 403/503'd. High Uintas Wilderness group-size/permit rule and "County Road 290" access claim unconfirmed (official page redirected to generic content).

---

### VA — Mount Rogers
**Confirmed issues:**
- `sar` link dead/hijacked: no longer reaches Mount Rogers VFD Rescue Squad — now redirects to a generic AI-written-looking content-farm page about volunteer firefighting in general. Needs a current SAR contact.
- Grayson Highlands parking fees stale: body says "$3 peak weekend/$2 peak weekday" — current official fee schedule says **$7 standard/$10 peak weekends**. Figures trace to SummitPost's text, which itself labels them "for many years" historical reference, not current.
- Park hours outdated: body says 7am-10pm spring/summer/fall, sunrise-sunset winter — current official page says **8am-10pm year-round**, no seasonal variation.
- Round-trip distance internally inconsistent: prose opens "a 9-mile round trip," frontmatter says `distance_miles: 8.6`, and the SAME section's own numbered steps say "approximately four miles one way" (=8mi RT) — THREE different numbers in one document. SummitPost (the apparent source text) explicitly assigns "9 miles" to the Elk Garden approach and "8 miles" to the Massie Gap approach USED in this guide — the 9-mile figure appears misattributed from the other trailhead.

**Fine:** elevation 5,729ft, 19th-highest state highpoint/4th-highest east of Mississippi; range (Blue Ridge); Lewis Fork Wilderness, GW-Jefferson NF; nearest higher peak (Grandfather Mtn, 40+mi); park founding dates (1965/1966); Fraser fir/5,500ft threshold; balsam woolly adelgid since 1962; extensive pony details (Shetland descent, pony association, no-touch policy, viewing corridor); driving mileages; landmarks; wikipedia/official_info/weather/snow/summitpost/google links all live.

**Inconclusive:** alltrails/peakbagger both blocked (CAPTCHA/Cloudflare), distance/gain unconfirmed from those sources. Pony population (~120 claimed vs ~100 per Wikipedia) and exact "Grayson Highland Fall Fest" name unconfirmed.

---

### VT — Mount Mansfield
**Confirmed issues:**
- Alpine tundra count wrong: body claims it's "one of two places in Vermont where Arctic Tundra exists" — Wikipedia AND the Green Mountain Club (the trail-managing nonprofit) both say **three** sites: Mansfield, Camel's Hump, AND Mount Abraham. Guide's wording matches SummitPost's older/outdated "two" framing.
- Taft Lodge fee stale: doc says "lodge charges $6 per person" — per GMC's own current page, that fee was **eliminated entirely in 2023** (was $5 pre-2023) — staying is now free.

**Fine:** elevation 4,393ft, rank #26; Adams Apple/Chin/Nose/Forehead sub-elevations; "2.3 miles above treeline" stat; ~40,000 annual visitors; Chittenden County summit location; Underhill/Stowe directions; closure dates/toll-road-gondola regulations; Laura Cowles-vs-Sunset Ridge whiteout guidance — all match sources verbatim or near-verbatim; weather/sar links live and correct; google maps link resolves to a real, well-reviewed visitor center, not generic.

**Inconclusive:** peakbagger/alltrails both bot-protected (alltrails even behaved inconsistently across attempts) — distance_miles(2.8)/gain_feet(1053) and prominence/isolation/rank data unconfirmed. Current summer availability of the Stowe gondola unconfirmed (site routed to anti-bot queue).

---

### WA — Mount Rainier
**Confirmed issues (several):**
- Climbing fee stale: guide says "$68/person in 2024" — current NPS page (last updated Jul 2026) lists **$82/person**, PLUS omits a separate $12/person/night wilderness permit fee required May1-Sep15 even for climbers. Stale despite the file's own `updated: 2026-01-31` claim.
- Elevation outdated AND internally inconsistent: frontmatter (14,411ft) and the route table both say 14,411ft, but the intro paragraph says "14,410 feet" — self-contradiction. Current Wikipedia (2020s GPS resurveys/2025 NAVD88 recalc) lists **14,406ft** — both 14,410 and 14,411 are superseded.
- Camp Muir elevation wrong: guide says "10,080 ft" — Wikipedia gives **10,188ft**.
- "Tahoma" naming misattributed: guide says it was "originally named Tahoma... by the Yakima people" — Wikipedia derives the name from Lushootseed (Coast Salish peoples, the Puyallup Tribe is actively petitioning to restore it) — NOT the Yakima/Yakama, a distinct, unrelated inland Sahaptin-speaking people from east of the Cascades.
- Park acreage off: guide says "235,625 acres" — Wikipedia says **236,381 acres**.
- `sar` link questionable: points to Seattle Mountain Rescue, whose own site describes coverage as "near Seattle WA"/North Bend-based with **no mention of Mount Rainier at all**.

**Fine:** rank 4th (behind Denali/Whitney/Elbert); first-ascent date/climbers (Aug 17 1870, Stevens & Van Trump); ~25 glaciers/"most glaciated in contiguous US" claim; ~10,000+ annual climbers/~50% success rate; 1899 founding; google maps Paradise link; weather/webcams/NWAC links all live; no timed-entry caveat needed (NPS confirms none required at Rainier currently).

**Inconclusive:** summitpost/peakbagger/alltrails all 403'd, couldn't cross-check distance_miles(14.9)/gain_feet(9015) or prominence/isolation. Sluiskin's (1870 guide) tribal affiliation unconfirmed.

---

### WI — Timms Hill
**Confirmed issues:**
- Winter parking cross-street wrong: guide says park at "Ring School Road and Rustic Road" — current official Price County page says verbatim "Ring School Rd. and **County RR**" — not Rustic Road. Guide's phrasing matches an older/stale SummitPost page rather than the current official one.
- Trailhead sign attribution wrong: guide says "turn south on County Road RR at the sign for High Point Village" — the actual posted sign reads "Road to Timm's Hill County Park," not "High Point Village" (a real place, but a SEPARATE cabin-rental community elsewhere, correctly described in the guide's own Lodging section — just wrongly attributed to this sign).
- Trail distance/gain don't reconcile: frontmatter `distance_miles: 0.4`/`gain_feet: 98` vs body's own "a quarter-mile uphill hike" (~0.25mi) — internal inconsistency. SummitPost independently says 1/4mi gaining 140ft, which ALSO conflicts with the 98ft frontmatter figure. AllTrails blocked (CAPTCHA), so treat 0.4mi/98ft as unconfirmed and likely off.

**Fine:** elevation 1,951.5ft, rank 39th; coordinates/location (no cross-state contamination); park history (named for logger Timothy Gahan, Price County acquired 1983); 220-acre park size; Ice Age Trail connection; no fee/camping; trailhead address; one-way park road; single observation tower; wikipedia/official_info/summitpost/weather/snow links all live.

**Inconclusive:** peakbagger/alltrails both bot-blocked/CAPTCHA'd, couldn't confirm stats firsthand (though Peakbagger's commonly-reported numbers align with Wikipedia/SummitPost from secondary mentions).

---

### WV — Spruce Knob
**Confirmed issues:**
- `range: "Appalachian Plateaus"` wrong — Spruce Knob is the highest point of the **Allegheny Mountains**, part of the Ridge-and-Valley Appalachians (per the guide's OWN cited Wikipedia article).
- Geology claim false: body says Pottsville Sandstone is "found only in PA, WV, OH, and western MD" — Wikipedia's Pottsville Formation article also lists Alabama and Mississippi.
- Internal inconsistency: frontmatter `distance_miles: 0.6` vs body's "Whispering Spruce Trail, a 0.5-mile loop" — Wikipedia independently corroborates ~0.5mi, so frontmatter's 0.6 is likely the error.
- `official_info` redirects to a generic Monongahela NF overview, no Spruce-Knob-specific content.
- Access Point road number looks wrong: guide says "Forest Rd 274" — Wikipedia names only FR 112 and FR 104 as paved roads to the summit; FR 274 appears nowhere (the accompanying google maps link itself DOES correctly resolve, so only the road-number TEXT looks wrong).
- Wrong route numbers in driving directions: guide says "State Route 28/55" from Seneca Rocks — Wikipedia states paved access begins at "US Route 33/WV Route 28," not WV 55.

**Fine:** elevation 4,863ft, rank #24 (correctly bracketed between OK #23 and GA #25); coordinates; Krummholz/wind-sculpted red spruce description; Briery Gap Road reference; no entrance fee; "Trump Mountain" renaming-bill FAQ facts (HCR 33, Feb 2025, Del. Coop-Gonzalez) match current reporting.

**Inconclusive:** peakbagger/summitpost/alltrails all 403'd, prominence/isolation and AllTrails' own stats unverified. Observation tower's "1969" construction date, Shawnee/Cherokee/Mingo indigenous-peoples claim, "21 miles/36 minutes" drive time, and HCR 33's current status all unverified.

---

### WY — Gannett Peak
**Confirmed issues (confirms the MT suspicion — same wrong string used here too):**
- `range: "Greater Yellowstone Rockies"` — IDENTICAL string to MT/Granite Peak's file, confirmed generic/wrong here too. Gannett Peak's actual range is the **Wind River Range**. "Greater Yellowstone Ecosystem" is a broad ecological designation, not a mountain range — this is very likely a copy-pasted/templated value across both files, not peak-specific for either.
- `snow` link (jhavalanche.org→bridgertetonavalanchecenter.org) covers the WRONG mountains — its forecast zones are Tetons/Snake River Range/Salt River & Wyoming Ranges/Togwotee, explicitly NOT the Wind River Range where Gannett Peak actually is. Useless/misleading for this climb.
- `sar` link redirects to the generic Sublette County homepage, no SAR content.
- `official_info` redirects to a generic 398-site Bridger-Teton NF directory, no Gannett Peak/Bridger Wilderness mention.
- Internal inconsistency: frontmatter `distance_miles: 53.1`/`gain_feet: 11217` doesn't match EITHER route described in the body (East/Glacier Trail = 50mi/~10,750ft; West/Pole Creek = 40mi/~9,050ft) — unclear which route the frontmatter numbers represent, if either.

**Fine:** elevation 13,804ft (within Wikipedia's own 13,802-13,810ft spread across its pages, not a clear error); prominence 7,076ft; isolation ~290.36mi; rank #5 (holds both ways); 1922 first ascent (Tate/Stahlnaker); 1906 naming for Henry Gannett; two-counties/two-NF/two-Wilderness-Areas claim; Dinwoody/Gooseneck glaciers correctly placed; ~70mi to Grand Teton (independently computed ≈69mi); weather link live and correctly geolocated.

**Inconclusive:** alltrails/summitpost/peakbagger all 403'd, couldn't verify exact mileage/gain or isolation's named reference peak. Whether either trailhead crosses Wind River Indian Reservation land requiring a tribal permit unconfirmed (Reservation does require a tribal license for hiking/fishing on ITS roadless land generally, but these specific routes weren't addressed). "Father of the Quadrangle" phrase for Henry Gannett isn't verbatim on Wikipedia (which calls him "father of mapmaking in America" instead).

---

## Changelog — fixes applied

**Site fix (not a guide):** `src/pages/rank.js` now queries only `src/guides/`. Before, the blog post's MDX file added a blank 51st row (NaN difficulty/effort, linking to /null/).

Each state's audit items, what was done, and the source checked at the time of the edit. Status: ✅ fixed · ⏭ skipped (reason given) · ❓ needs your decision.

### AK — Denali (complete)
- ✅ Elevation 20,320 → **20,310** (frontmatter + body). Source: Wikipedia infobox citing USGS Sept 2015 survey.
- ✅ Coordinates → **63.06917, -151.00639** (Wikipedia summit coords; matches the weather link).
- ✅ Distance/gain 56.0 mi / 24,500 ft → **34.6 mi / 14,639 ft**. NPS publishes no route length, so the embedded AllTrails West Buttress route (34.6 mi out & back, 14,639 ft) was used. Body now says ~17 mi each way, ~13,100 ft net from 7,200 ft Base Camp.
- ✅ Permit fee $375/$275 → **$475/$375** (NPS mountaineering page, 2027 season). The $15 entrance fee and 60-day registration were reconfirmed.
- ✅ Webcam → nps.gov/dena/learn/photosmultimedia/webcams.htm (the URL the audit suggested redirects here).
- ✅ Airport "four miles south" → "about five miles southwest of downtown"; "fifth-largest cargo airport" → "among the world's busiest cargo airports".
- ✅ "The Great One" → **"The High One"**, matching the FAQ and Wikipedia ("based on a Koyukon word for 'high' or 'tall'").
- ✅ **Not in the audit:** the federal name has been **Mount McKinley since January 2025** (Interior Dept., per Wikipedia). Per your decision, the page keeps "Denali" and the intro and FAQ now add that the federal name was restored in 2025 while Alaska still uses Denali.

### AR — Magazine Mountain (complete)
- ✅ Recommended Route → **Signal Hill Trail**, which reaches the summit. Description now follows the official park trail page (arkansas.com/state-parks/explore/trails/signal-hill-trail): gentle forest walk, 400 sq ft stone map at the summit. Benefield Loop kept only as an optional side trip that "does not reach the summit". The FAQ trailhead question is updated to match.
- ✅ Range: `Ozark Highlands` → **Ouachita Mountains** (Wikipedia: Frontal Ouachita Mountains, Arkansas River Valley). Intro no longer says "Boston Mountains of the Northern Ouachitas"; location is now Mount Magazine State Park (the Ozark NF framing is kept as "surrounded by").
- ✅ Distance stays **1.8 mi / 259 ft** (embedded AllTrails loop). The park lists the trail as 1.5 mi without saying round trip, so the body gives both figures.
- ✅ `official_info` → the arkansas.com Signal Hill Trail page (the old arkansasstateparks.com URL already redirected to arkansas.com).
- ✅ Benefield homestead "1870s" vs "1880s" (sources conflict) → "19th-century".

### FL — Britton Hill (complete)
- ✅ **Hijacked `official_info`** (waltonoutdoors.com → labbymemorial.com spam, reconfirmed live) → Walton County's own page, **mywaltonfl.gov/Facilities/Facility/Details/Lakewood-Park-28**.
- ✅ Location "Town of Lakewood" → **"Lakewood Park, Walton County"**. The intro calls Lakewood an unincorporated community, and the "Paxton, Florida" park location is removed.
- ✅ Range "Piedmont-Southeast Coast" → **Florida Ridge Hills** (Wikipedia infobox).
- ✅ Re-check of the inconclusive items:
  - Hours: "open 24 hours" was **wrong**. The county page says **Dawn to Dusk** and admission is free. Regulations is updated and now includes the county address and phone; the FAQ facilities list now matches the county page (restrooms, pavilions, picnic tables, walking path).
  - Access mileage: confirmed by routing (~21 mi north on US 331 from I-10, then 2.8 mi on CR 285). The text now names County Highway 285.
- ⏭ Naming origin (postmistress vs. Britton family) is disputed between sources, so the "named after a retired postmistress" claim was removed rather than replaced.
- No change: elevation 345 ft, 0.1 mi / 0 ft, rank 50 (all confirmed fine by the audit).

### GA — Brasstown Bald (complete)
- ✅ "30 miles southwest of … Springer Mountain" → **northeast**.
- ✅ Drive time "an hour and a half" → **"approximately two hours"** north of Atlanta.
- ✅ "Jack Knob's Trail, 1.5-mile" → **Jacks Knob Trail**: runs south from the summit area, crosses GA 180 at Jacks Gap after ~2.2 mi, and reaches the AT at Chattahoochee Gap after ~4.5 mi (Wikipedia; NRT database).
- ✅ `official_info` → Forest Service Brasstown Bald Visitor Information Center page (fs.usda.gov/r08/chattahoochee-oconee/recreation/brasstown-bald-visitor-information-center).
- ✅ **Re-checked the inconclusive fee item, and it was wrong.** "$5/person, under 13 free, free shuttle" → **$10/adult (16+), $6 after hours, 15 and under free; shuttle included with admission**, hours 10–5, last shuttle 4:30, no shuttle 12:30–1:10, America the Beautiful passes accepted, holiday closures. Updated in Recommended Route, Regulations, and FAQ.
- ✅ Distance 1.4 → **1.2 mi** round trip. The Forest Service lists the Summit Trail as a "0.6 mile paved foot trail" (very steep). The intro's "half-mile" → 0.6-mile. "Turn onto a dirt road" was removed because the agency describes the whole trail as paved. Gain stays at **426 ft** (AllTrails; the Forest Service gives no gain figure).
- ✅ Added: dogs are not permitted inside the visitor center (Forest Service page).

### HI — Mauna Kea (complete)
- ✅ **Summit-cone wording** (intro, Regulations, FAQ): "requires permission from the local tribe" was removed everywhere. The guide now says a sign at the base of the summit cone (Puʻu Wēkiu) asks visitors not to climb it out of respect, that this is a request rather than a permit system, and encourages honoring it. The cultural council is not named because neither UH Hilo's pages nor Wikipedia name it.
- ✅ Meters 4,198 → **4,205 m** (matches UH Hilo's "important things to know" page).
- ✅ Gain: frontmatter 4,753 vs body 4,576 → **4,708 ft** in both places, and distance 13.2 → **13.0 mi** (embedded AllTrails Humuʻula Trail: 13 mi out & back, 4,708 ft; UH Hilo publishes no trail length or gain). The body now says ~6.5 mi one way, ~4,700 ft.
- ✅ Dead `official_info` → hilo.hawaii.edu/maunakea/visitor-information/important-things-to-know; dead `sar` → …/visitor-information/public-safety (lists 911, Maunakea Rangers (808) 960-2952, VIS (808) 934-4550).
- ✅ Gap filled: Regulations and FAQ now state that **4WD/AWD is required** above the VIS (UH Hilo public-safety page), with the road-conditions number and emergency info. The pets FAQ is aligned with UH rules (no pets except service animals and Forest Reserve hunting dogs).
- ✅ Range "Hawaii" → **Mauna Kea (shield volcano)** (⚑ from the plan's range table, pending your review).
- ⏭ Not in the audit, unconfirmed: whether the Mauna Kea State Recreation Area (Lodging section) currently allows camping. Left as is.

### MA — Mount Greylock (complete)
- ✅ Elevation 3,491 → **3,489** (Wikipedia, NAVD88/NGS). ⚠️ Note: DCR's own mass.gov page still says **3,491 ft**. We follow the Wikipedia/USGS rule, but you may want to reconsider here.
- ✅ Prominence: "nearly 2,700 feet above Adams" is kept as relief above the town, and the true topographic prominence (**~2,463 ft**, Wikipedia/Peakbagger) is added.
- ✅ Range → **Taconic Mountains** (Wikipedia: "geologically distinct" from the Berkshires); intro reworded to "Taconic Mountains in … Berkshire County".
- ✅ NY directions: fixed in batch 0 (I-87 north to Albany, then I-90 **East**).
- ✅ Season/stats inconsistency: `season` "All Year" → **"May-Oct"** (auto-road season), and the Recommended Route now says the drive-up applies mid-May–late Oct and the summit is hike-only otherwise. Drive-up stats (0.1 mi / 20 ft) are unchanged.
- ✅ Melville "observation deck" → "visible from Arrowhead, the author's home" (Wikipedia).
- ✅ Re-checked the inconclusive items on mass.gov (loaded in browser):
  - Road closure "Columbus Day–Memorial Day" → auto roads open **May 16–Oct 30 (2026)**; tower/Bascom Lodge open ~Memorial Day weekend; Visitor Center accessible year-round; park dawn to dusk.
  - **New:** vehicles over 22 ft are prohibited on the auto roads.
  - Camping fees added: $8 resident / $20 non-resident.
- ⏭ **$2 summit parking fee: could not be confirmed.** mass.gov shows no amount, and the only web source for "$2" was this guide itself; a 2017 Boston Globe article gave $5–10. The guide now says there is a summit parking fee and gives the Visitor Center phone number (413) 499-4262 instead of a number.
- ⏭ "Monadnock status" left as is (unconfirmed either way).

### MD — Hoye-Crest / Backbone Mountain (complete)
- ✅ Coordinates 39.1475, -79.56999 → **39.23733, -79.48533** (Wikipedia's Hoye-Crest article, GNIS-sourced; matches the file's own map/weather link). Note: Wikipedia's *Backbone Mountain* ridge article uses the old value, which is likely where the error came from. The nearby-highpoints list was checked: Spruce Knob, Mount Davis, Mount Rogers.
- ✅ Dead `official_info` (garretttrails.org: no longer resolves) → **Mon Forest Towns' Maryland Highpoint Trail page** (live; "climbs nearly 700 feet in about a mile", no permits or fees). No Garrett County or Maryland agency page exists for the hike.
- ✅ Body "about 1 mile round-trip" → **"a little over 1 mile one way (about 2.3 miles round trip)"**, matching frontmatter 2.3 mi / 688 ft (unchanged).
- ✅ Range "Appalachian Plateaus" → **Allegheny Mountains** (Wikipedia Hoye-Crest infobox).

### MO — Taum Sauk Mountain (complete)
- ✅ Coordinates 37.55635, -90.75803 → **37.57033, -90.72790** (Wikipedia; matches the file's own weather link and map). The nearby-highpoints list was checked: Magazine Mountain, Woodall Mountain.
- ✅ "St. Francis Mountains" (×2) → **St. Francois Mountains**; range "Ozark Highlands" → **St. Francois Mountains** (Wikipedia infobox).
- ✅ Clarity gap: Recommended Route now separates the **paved, ADA-accessible summit walk (0.4 mi round trip)**, which the frontmatter stats describe, from the **separate 3-mile Mina Sauk Falls loop**.
- ⏭ "132 feet in three stages" for Mina Sauk Falls is unconfirmed (no source gives a height). Left as is.

### NM — Wheeler Peak (complete)
- ✅ Sub-peak "Walker" → **Mount Walter (13,141 ft)** (batch 0; Wikipedia).
- ✅ **"Harold D. Walker" 1948 survey → Harold D. Walter.** The audit asked for a manual check. The story comes from SummitPost, which misspells the name; UNM's archives (Harold D. Walter, 1900–1958) and Taos News confirm Walter, a photographer/mountaineer, measured Wheeler higher than Truchas in 1948, prompting a USGS resurvey, and Mount Walter is named for him. Text rewritten accordingly.
- ✅ Range length "250 miles from Santa Fe to Salida" → **~242 miles from Poncha Pass, CO to Glorieta Pass, NM** (Wikipedia). Range field → "Sangre de Cristo Mountains".
- ✅ Elevation 13,161 → **13,167** (frontmatter + body; Wikipedia NAVD88). ⚠️ The Carson NF's own Wheeler Peak Trail page still says **13,161**, so the agency and Wikipedia disagree here, as with MA.
- ✅ Webcam (404) → skitaos.com/weather. `official_info` → Carson NF Williams Lake Trail (#62) page (live, updated Aug 2026).
- ✅ **Not in the audit, added to Regulations:** Carson NF's annual summer closure of the Wheeler Peak / Williams Lake area "for local community, traditional purposes" (Aug 21–28 in 2026, per the July 20, 2026 press release).
- ✅ Distance kept: 8.7 mi / 2,972 ft. The Forest Service gives ~2 mi to the #67 junction + ~2 mi to the summit (≈8 mi round trip), consistent with the body's "approximately 8-mile".
- ⏭ `sar` (generic NM State Police homepage) left as is: State Police coordinate SAR in New Mexico, and no more specific official page was found. "First two miles on private property" and "~19 miles from Taos" are unconfirmed and left as is.

### OK — Black Mesa (complete)
- ✅ "dark pumice" → **basalt**; "30 million years ago" → **3 to 5 million years ago**; "Capulin Volcano" → **a vent in the Raton-Clayton volcanic field** (all from Wikipedia's Black Mesa article). ⚠️ TNC's own preserve page also says "30 million years ago", which is probably where the error came from; Wikipedia's figure was used per the audit.
- ✅ Colorado summit 5,715 → **5,705 ft**; Mesa de Maya "6,840+, also known as the Corona" → **6,902 ft**, with the "Corona" name dropped (neither confirmed by Wikipedia). Black Mesa is now described as Mesa de Maya's eastern finger (Wikipedia).
- ✅ Elevation 4,975 → **4,973** (Wikipedia, TravelOK, and TNC all agree).
- ✅ Distance 8.8 → **8.5 mi** round trip (TNC: "This 8.5 mile trail"). The segment breakdown that added up to 9.0 mi was reworded to drop the unsourced 2.5 mi / 1 mi figures; gain 748 ft unchanged (AllTrails).
- ✅ Trailhead directions: **the audit was mistaken here.** TNC routes *west* on Hwy 325 from Boise City and turns north on the road marked "Colorado" *before* Kenton, so "east of Kenton" was right. Batch 0 rewrote the directions to follow TNC's wording.
- ✅ Range "Great Plains" → **Mesa de Maya** (⚑ Black Mesa has no named range; Wikipedia describes it as Mesa de Maya's eastern finger).

### TX — Guadalupe Peak (complete)
- ✅ Distance/gain: frontmatter 8.1 mi / 2,950 ft and body/FAQ "8.4-mile" → **8.5 mi / 3,000 ft** everywhere (NPS hiking page: "8.5 mile round trip hike with a 3,000 foot elevation gain").
- ✅ Elevation 8,749 → **8,751** (Wikipedia, NAVD88/NGS).
- ✅ Access label "Salt Flat, Dell City, TX" → **"Pine Springs, TX"** (batch 0; the map link itself was already correct).
- ✅ **Re-checked the inconclusive permit item, and the guide was missing it.** NPS's Permits & Reservations page says "Wilderness use permits are required for all overnight backpacking in the park". Added to the backcountry campsite paragraph in Lodging & Camping.
- ✅ Range "Southwest Basins and Ranges" → **Guadalupe Mountains** (Wikipedia infobox).
- ⏭ "80 mph" wind-gust claim unverified; left as is.

### AL — Cheaha Mountain (complete)
- ✅ "I-20, take exit 431" → **exit 191, then AL Hwy 281 south (Talladega Scenic Drive)** (park's own driving-directions page).
- ✅ Hotel claim (intro + FAQ) → campgrounds, cabins, chalets and the **Mountain Store**; "the old Cheaha Hotel has been torn down, and a new hotel is being built (scheduled to open in 2026)" (park page). "Convenience store" → Mountain Store throughout.
- ✅ Range "Appalachian Ridges" → **Talladega Mountains** (Wikipedia: "part of the Talladega Mountains, a small section of the Ridge-and-Valley Appalachians").
- ✅ Elevation 2,407 → **2,413** under the Wikipedia/USGS rule (infobox cites the NGS benchmark "Cheehahaw", NAVD88). ⚠️ The park's own page still says **2,407**, and the audit had marked 2,407 "fine", so you may want to override this one. Rank 35 is unaffected.
- ✅ **Not in the audit, added to Regulations:** the park's day-use admission fee ($5 ages 12+, $2 ages 4–11 and seniors, free 0–3 and veterans/military) and its sunset closing (park page).
- ⏭ Climbing waiver/fee re-check: still unconfirmed. A search snippet says the official page requires a waiver signed at the Mountain Store, but that page now redirects to the park's fishing page. The existing permit wording is left as is.
- ⏭ Name etymology (Muscogee vs. Choctaw) is disputed between sources; left as is.

### AZ — Humphreys Peak (complete)
- ✅ Lockett Meadow fees "$10/site, $5/extra vehicle, $5 picnic, free day-use parking" → **$27/night (up to 8 people, 1 vehicle), $10/extra vehicle**, day use "$12–$14 per vehicle" (the Forest Service page lists both figures), 17 first-come sites (Forest Service campground page).
- ✅ **Not in the audit, added:** Lockett Meadow Road (FR 552) is **closed to all traffic, including foot traffic, through November 2026** (Forest Service alert).
- ✅ Agassiz "$500 fine" → the current Forest Order (Dec 2024–Dec 2029): closes the area above ~11,500 ft treeline around Humphreys/Abineau/Agassiz; **exempts hikers staying on system trails or on snow cover**; violations are a Class B misdemeanor, **up to $5,000 / $10,000 (orgs) and/or 6 months**. Read directly from the order text.
- ✅ Distance: body "≈9.5 mi" (3 + 1¾ mi segments) vs frontmatter 10.1 → body now uses the Forest Service figure, **5–5.5 mi one way, ~10 mi round trip**; frontmatter **10.1** kept (within the agency's range). Gain 3,382 → **3,420** (Forest Service trail page).
- ✅ `official_info` → Forest Service Humphreys Trail No. 151 page.
- ✅ Elevation 12,633 → **12,637** under the Wikipedia/USGS rule (NGS "Frisco" benchmark, NAVD88). Rank 12 is unaffected.
- ✅ Range "Colorado Plateau" → **San Francisco Peaks** (Wikipedia).
- ⏭ The "no camping above 11,400 ft" wording was left as is: it's a separate Kachina Peaks Wilderness rule, and the audit flagged it only as inconclusive.

### CA — Mount Whitney (complete)
- ✅ "National Oceanographic & Atmospheric Administration" → **National Oceanic and Atmospheric Administration**.
- ✅ Elevation: frontmatter 14,494 → **14,505**, matching the body (Wikipedia, NAVD88). Rank 2 is unaffected.
- ✅ "Smithsonian Institute Shelter, built in 1904" → **Smithsonian Institution Shelter, built in 1909** (Wikipedia: Smithsonian Institution Shelter).
- ✅ Badwater "trek … to the peak" → **race 135 miles … to Whitney Portal, the 8,360-foot trailhead** (Wikipedia: Badwater Ultramarathon).
- ✅ Distance 21.2 → **22.0 mi**, matching the body's "22-mile round trip" (Inyo NF trail page: "climbs over 6,000 feet in 11 miles"). Gain 6,663 unchanged (the agency gives only "over 6,000 ft").
- ✅ `official_info` → Inyo NF Mt. Whitney Trail page.
- ✅ `webcam` (lookr → generic Windy map) → **"na"**. No confirmed live Whitney/Lone Pine camera was found. The site doesn't currently render the `webcam` field anywhere.
- ✅ `keywords` "2025 permits" was already fixed earlier.

### CO — Mount Elbert (complete)
- ✅ Massive cairn dispute: **the audit was only half right.** The 1930s episode is real (a Dec. 11, 1939 newspaper account of two teens building a 7-ft cairn), but Colorado Public Radio also says "in the 1970s they piled rocks on Massive's highest point". The text now says **"As early as the 1930s, and again in the 1970s"**.
- ✅ `official_info` → fs.usda.gov/r02/psicc/recreation/mount-elbert-fourteener (live, Elbert-specific).
- ✅ `sar` → lakecountyco.gov/232/Sheriff (live).
- ✅ Range "Southern Rocky Mountains" → **Sawatch Range** (Wikipedia).
- No change: elevation 14,440, distance/gain, rank 3 (all fine per the audit).

### CT — Mount Frissell, south slope (complete)
- ✅ "Bash Bish Falls State Park … offers camping facilities" → **day-use only (sunrise to sunset)**, per mass.gov. Campers are now pointed to **Taconic State Park's Copake Falls Area (NY)**: tent platforms, RV sites, cabins (NY State Parks page).
- ✅ **The audit's suggested alternative is closed:** mass.gov says Mount Washington State Forest's wilderness (backcountry) camping is **"closed until further notice"**. The guide now says so instead of recommending the Ashley Brook sites.
- ✅ `official_info` → **Mount Washington State Forest** (mass.gov), which manages the trailhead area.
- ✅ Elevation 2,380 → **2,379** under the Wikipedia rule (List of U.S. states by elevation; the Frissell article's 2,454 is the MA summit). Rank 36 is unaffected.
- ✅ Range "Northern U.S. Appalachians" → **Taconic Mountains** (Wikipedia).
- ⏭ Distance/gain (2.3 mi / 862 ft) unchanged: no agency figure exists, and independent trackers vary (2.4–2.9 mi).

### DE — Ebright Azimuth (complete)
- ✅ Location "Town of Azimuth" (no such town) → **"New Castle County"** (Wikipedia infobox). The Access Point label "RFPJ+78 Azimuth, Delaware" → "RFPJ+78 Wilmington, Delaware" (the postal address the audit cites, Wilmington 19810).
- ✅ Toll claim (Regulations + FAQ): **the audit overstated this.** I-95's only mainline toll plaza is near the Maryland line in Newark (Wikipedia: Interstate 95 in Delaware), so drivers coming *from Maryland* do pay; drivers from Pennsylvania or Wilmington don't. Reworded to say exactly that rather than deleted.
- ✅ Range "Northern U.S. Appalachians" → **Piedmont Plateau** (Wikipedia, Delaware article: "The northernmost part of the state is part of the Piedmont Plateau").
- No change: elevation 448, rank 49 (fine per the audit; Wikipedia infobox 448).

### IA — Hawkeye Point (complete)
- ✅ Camping fee $20 → **$25 per night** (Osceola County's Hawkeye Point page).
- ✅ Dead `official_info` (osceolacountyia.org) → **osceolacountyia.gov/living-here/hawkeye-point/** (live).
- ✅ Gain 6 → **9 ft** (embedded AllTrails route: 0.3 mi, 9 ft; the county gives no figure). The body's "rising 20 feet above the surrounding farmland" describes local relief, not hike gain, and is unchanged.
- ✅ Location "Private Property" → **"Hawkeye Point, Osceola County"** (per your decision; the county page confirms county ownership since 2008).
- ✅ Range "Great Plains" → **Coteau des Prairies** (⚑ Wikipedia: the plateau extends into northwestern Iowa; it doesn't name Hawkeye Point specifically).
- ⏭ Acreage history (guide: 1.6 acres donated + 5 purchased in 2007; county: "acquired seven acres" in 2008) is minor and was marked inconclusive; left as is.

### ID — Borah Peak (complete)
- ✅ "state senator" → **U.S. Senator**; "ran in the presidential election in 1936" → "sought the Republican presidential nomination in 1936" (minor simplification fixed).
- ✅ 1983 earthquake "summit rose seven feet" → **summit rose about a foot; the Lost River Valley dropped about eight feet** (Wikipedia).
- ✅ "Challis National Forest" (location + Regulations) → **Salmon-Challis National Forest**.
- ✅ Chickenout Ridge "third-class" vs frontmatter Class IV: Wikipedia supports both (infobox "Class 3 Scramble"; route text "Class 4 arête"). The body now says "mostly Class 3 with a short Class 4 arête"; frontmatter stays **Class IV** (hardest move).
- ✅ Dead links: `official_info` → Salmon-Challis "Borah Peak" epic-adventures page; `sar` → custercountyidaho.org/departments/sheriff/; `webcam` (dead domain) → Idaho 511 **US-93 Willow Creek Summit** camera image (the nearest highway cam to the trailhead).
- ✅ "Idado" typo → Idaho.
- ✅ Elevation 12,662 → **12,666** (Wikipedia, 2021 LiDAR resurvey), frontmatter + intro. Rank 11 is unaffected. Note: the Forest Service page still says 12,662.
- ✅ Distance/gain 8.2 mi / 5,301 ft → **7.0 mi / 5,262 ft** (Forest Service: "Total Distance (one-way): 3.5 miles", "Total Elevation Gain: 5,262 feet").
- ✅ Trailhead campground elevation "7,200 feet" → **7,400** (Forest Service jumpoff elevation). The $5 fee and few sites are confirmed (5 sites, May 20–Sep 30).
- ✅ Range "Idaho-Bitterroot Rocky Mountains" → **Lost River Range** (Wikipedia).

### IL — Charles Mound (complete)
- ✅ `official_info` (generic /events/ page) → **highpointers.org/charles-mound-2025-access-dates-announced/** (live; it's the newest Charles Mound post and confirms the guide's rules: daylight only, no pets, no private lane). There is no permanent per-state Highpointers page, and the date automation is unchanged.
- ✅ Range "Midwest-Great Lakes Area" → **Driftless Area** (Wikipedia: "It is within the Driftless Area").
- No other changes: elevation 1,235 (matches Wikipedia, NAVD88), rank 45, location "Private Property" (still privately owned).

### IN — Hoosier Hill (complete)
- ✅ Marshall "first to ascend all 50" → **first to climb all 48 contiguous highpoints, finishing at Hoosier Hill in 1936**; added that **Vin Hoeman first completed all 50 in 1966** (Wikipedia: Hoosier Hill, Highpointing).
- ✅ "marked by a sign in the woods" → **engraved stone**, which replaced the repeatedly stolen wooden sign in 2016 (Wikipedia).
- ✅ Dead `official_info` → **visitrichmond.org/listing/highest-point-in-indiana-hoosier-hill/** (the page moved to a new slug; it confirms dawn-to-dusk hours, free admission, and the rock marker).
- ✅ AllTrails URL "/us/ohio/": checked. AllTrails itself files the trail under Ohio (Hollansburg, OH), so the URL is correct and was kept.
- ✅ Distance/gain 0.1 mi / 0 ft → **0.6 mi / 13 ft** (embedded AllTrails route; no agency figure exists). The audit noted sources vary from 50 ft to 0.3 mi one way.
- ✅ Range "Midwest-Great Lakes Area" → **Tipton Till Plain** (Wikipedia).
- No change: elevation 1,257 (Wikipedia), rank 44.

### KY — Black Mountain (complete)
- ✅ Dead `official_info` (2010 coal-company waiver PDF) → **Highpointers Foundation's Black Mountain page** (archive.highpointersfoundation.org/27_KY_Black.shtml, live; covers the waiver history, state ownership, and directions). There is no official Kentucky or Harlan County page.
- ✅ Ownership: Wikipedia confirms "the Commonwealth of Kentucky owns the land and no waiver is required". Location "Private Property" → **"Commonwealth of Kentucky"** (per your naming rule). The unsourced "acquisition … in 2018" date was removed.
- ✅ "High-voltage tower" (unsupported) → **FAA radar dome, radio towers, and transmitter buildings** (Wikipedia's summit inventory).
- ✅ `view` "None" → **"Okay"**. Wikipedia: trees cleared by the radar dome open views, and the Smokies are visible on clear days. (`view` isn't displayed on the site.)
- ✅ Range "Appalachian Plateaus" → **Cumberland Mountains** (Wikipedia).
- ⏭ "Plans for a new lookout tower" is unverified and wasn't in the audit; left as is.
- No change: elevation 4,145 (Wikipedia; the Highpointers Foundation uses 4,139), rank 27.

### LA — Driskill Mountain (complete)
- ✅ Range "Ozark Highlands" (cross-state contamination) → **Piney Woods** (⚑ Wikipedia gives no range; this matches the guide's own body, "the densely forested Piney Woods of East Texas and Louisiana").
- ✅ "one of three" below-sea-level states → **"one of only two (with California)"** (Badwater Basin and New Orleans, per Wikipedia's state elevation list).
- ✅ Lake Claiborne State Park "~20 miles northeast" (Lodging + FAQ) → **north**. Computed from Wikipedia coordinates: 20.7 mi at a bearing of 356°.
- No change: elevation 535, 1.8 mi / 167 ft, rank 48, location "Private Property" (still privately owned).

### ME — Katahdin (complete)
- ✅ Entrance fee "$14" → **$20 per visit / $50 season for non-Maine vehicles; Maine-plated vehicles free** (Baxter reservation site, Non-Resident Fees). Added: register at the Togue Pond or Matagamon gatehouse (Baxter hiking page).
- ✅ **Not in the audit, added:** the **Katahdin Trailhead Pass** (formerly Day Use Parking Reservations). It's needed to guarantee parking at Roaring Brook, Abol, or Katahdin Stream unless you camped in the park the night before; opens April 1; one per vehicle (Baxter hiking page). Replaces the vaguer "arrive early" advice.
- ✅ Helon Taylor "4.3 miles to summit, leading directly to Pamola Peak" → **3.2 mi to Pamola Peak + 1.1 mi Knife Edge to Baxter Peak (≈4.3 mi one way)**.
- ✅ "Chimney Pond Hut" → **Chimney Pond Ranger Station**, only on routes through Chimney Pond; the guide now notes that Helon Taylor branches off after 0.1 mi (Baxter: "The Helon Taylor trail leaves the Chimney Pond Trail after the first 0.1 mile").
- ✅ Directions "exit Millinocket-Mattawamkeag, ~50 miles north of Bangor" → **Exit 244 (Medway/Millinocket), Route 157 to Millinocket, ~70 miles from Bangor** (Wikipedia I-95 exit list; ~72 road miles by routing).
- ✅ Webcam → **neoc.com/webcams/**, which is now NEOC's "Katahdin Live Webcam & Night Sky" page (the old specific-cam URL redirects there).
- ✅ Elevation 5,268 → **5,267** (Wikipedia infobox, NGS NAVD88). Rank 22 is unaffected.
- ✅ Range "Northern U.S. Appalachians" → **Appalachian Mountains** (Wikipedia infobox; Katahdin is described as an isolated monadnock, and no source ties it to the Longfellow Mountains, so the plan's guess was dropped).
- ⏭ The "previously full gear, now just a flashlight" claim is unconfirmed; left as is. Distance/gain 10.4 mi / 4,200 ft unchanged (no agency total for the loop).

### MI — Mount Arvon (complete, one ❓)
- ✅ Dead `official_info` → **visitbaragacounty.com/activities/mt-arvon/** (live).
- ✅ "Paper companies own the surrounding land" → **Weyerhaeuser** (county page: "Thanks to Weyerhaeuser (the landowner)").
- ✅ Lake Superior "~10 miles to the north" → **about 8 miles** (Wikipedia: Arvon "rises about eight miles south of Lake Superior").
- ✅ **Curwood/Tilden note (per your decision):** the intro now says 2025 surveys found Curwood ~0.4 ft higher and a 2018 NOAA report found the Tilden Mine waste pile higher than either, and that Arvon remains the conventionally recognized highpoint. A new FAQ, "Is Mount Arvon really the highest point in Michigan?", covers the same points (all from Wikipedia).
- ✅ **Not in the audit, fixed:** the FAQ said the road is "accessible by most vehicles". The county says the roads "become muddy and are often unfit for passenger cars" in the rainy season, and AllTrails recommends 4WD, so the FAQ now says high-clearance/4WD is recommended.
- ✅ Gain 10 → **9 ft** (embedded AllTrails route: 0.1 mi, 9 ft). **The audit's "AllTrails says 11.2 mi / 1,007 ft" is no longer true**; that page now shows 0.1 mi from a small lot at the end of the 4WD road.
- ❓ **Distance conflict, needs you:** AllTrails (and the frontmatter) say **0.1 mi** from the top lot, but the body's driving log ends "At 7.2 miles, park in the lot and walk approximately a half mile", up a trail that "was once a rough road accessible by 4-wheel drive vehicles". These may be two different parking spots (walk-up from a lower lot vs. drive to the top). The frontmatter stays 0.1 per the AllTrails rule and the body is unchanged until you confirm.
- ✅ Range "Midwest-Great Lakes Area" → **Huron Mountains** (Wikipedia).
- No change: elevation 1,979 (Wikipedia), rank 38, location "Private Property" (Weyerhaeuser).
