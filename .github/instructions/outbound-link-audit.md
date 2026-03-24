# External link review procedure  

**Last full review completed:** March 20, 2026  

This guide outlines the steps for AI-assisted or manual review of all external hyperlinks across our family of websites. The goal is to confirm that every linked destination maintains a solid reputation and aligns with our internal standards for outbound references.

## Purpose and process summary
Perform this check regularly (e.g., after major content additions). The sequence is:

1. Generate fresh builds of all sites  
2. Collect and deduplicate external link targets from the output HTML  
3. Group links by type/domain category  
4. Access each destination and document key page attributes, only use a browser with MCP for this
5. Assess compliance with our reference guidelines  
6. Document issues and suggested actions  

## Phase 1: generate site builds
Produce current static HTML for analysis:

```sh
bundle exec jekyll build
```

## Phase 2: gather external links
Identify `<a href="...">` elements that point outside our controlled domains.

**Domains to ignore (internal or infrastructure):**
- Our properties and subdomains:  
  *.phor.net
- Common CDNs and font services:  
  cdn.jsdelivr.net • fonts.googleapis.com • fonts.gstatic.com • cdnjs.cloudflare.com  

**Recommended extraction (one-liner approach):**

```bash
grep -r -o 'href="https\?://[^"]*"' build\
  | cut -d'"' -f2 \
  | sort -u \
  | grep -vE '(phor\.net|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)' \
  > tmp/external-links-list.txt
```

To trace origins (for later fixes):

```bash
mkdir -p audit-notes
while read -r url; do
  echo -e "\n=== ${url} ===\n" >> tmp/link-audit-sources.txt
  grep -ril "${url}" sites/*/source/ >> tmp/link-audit-sources.txt
done < tmp/external-links-list.txt
```

## Phase 3: preliminary classification
Organize links roughly before inspection:

## Phase 4: inspect each destination
Use a controlled browser session (standard desktop size, e.g., 1280×800) to:

- Load the URL  
- Follow all redirects to final location  
- Capture page title, organization identity, and main purpose
- Note any access barriers (CAPTCHA, region locks, paywalls)  
- Save a brief summary or screenshot if helpful

Handle in small groups (10–20 URLs) and log results incrementally.

## Phase 5: compliance evaluation
Apply these mandatory filters to every link:

**Basic requirements (all must pass):**
- Uses HTTPS
- Page loads properly (no 4xx/5xx errors, no blank/fake content)  
- Topic relevance — content matches the linking context on our site  
- Anchor text is meaningful (avoid naked URLs unless deliberate)  

**Reputation & quality filters:**
- Organization is clearly identified  
- No signs of misleading claims, aggressive monetization, or user-deceptive tactics  
- Generally viewed as trustworthy (e.g., public agencies, major academic centers, well-established organizations)

**Guideline-specific rules:**
- Prefer clean/canonical URLs — remove UTM parameters, session IDs, error tokens, etc., and verify the cleaned version works identically  

## Phase 6: output and resolution
Create a summary report in a temporary folder (e.g., `tmp/link-audit-2026-03/` — do not commit):

- **Approved** — short tally + confirmation all criteria met  
- **Problems found** — for each:  
  - Target URL  
  - Originating source file(s)  
  - Specific rule broken  
  - Action: remove, swap source, clean parameters, etc.  
- **Unclear / needs discussion** — restricted access, borderline reputation, context-dependent value  

Fix issues directly in source Markdown files (never built HTML).

## Reference examples from past reviews
(Use these patterns for consistent decisions)

- **Cleaned** — Stripped tracking/error strings from otherwise valid healthychildren.org link; confirmed same content loads  

## Additional reminders
- Run after significant content changes  
- Keep temporary files/folders out of version control  
- Make source-file edits for any removals or replacements  
- This is a comprehensive process — evaluate every discovered external link  
