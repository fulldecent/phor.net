# Copilot instructions for fixing errors

To build, first use `nvm use` and then do tests with `yarn build && yarn test`.

- `[nice-checkers/mailto-awesome]`

  - Fix this using the `mailto` include, for example:
    ```html
    {%-
      include mailto.html body="..." link="..."
    %}
    ```

    Study that include's source code carefully; it centralizes subject/body encoding and localization.

## How to fix broken links

### Fetch and analyze

1. Fetch: load `url`.
    - Environment: use a standard browser user-agent (for example, latest Chrome on Windows).
    - Redirects: follow up to 10 redirects and record the final URL.
    - Timeouts: use reasonable timeouts (for example, 5s connect, 10s read).

2. Analyze the result:
    - Success condition: the request results in a 2xx status code, the content is relevant to the expected topic (if provided), and the page is not a soft 404 (for example, a “not found” message on a 200 OK page) or blocked.
    - Failure condition: any other outcome, including:
        - HTTP errors (4xx, 5xx)
        - Network errors (DNS, timeout, TLS)
        - Blocked access (paywall, login required, CAPTCHA, geo-block)
        - Soft 404s or content of an empty page
        - Irrelevant content (for example, redirect to the homepage, unrelated article)

3. Determine next step:
    - If the success condition is met, the process is complete. Set `status: ok` and proceed to send response.
    - If the failure condition is met, proceed to the next step to find a replacement.

### Research and discover

If the original URL is invalid, begin a structured search for a replacement. Document your queries and key findings in the `notes` field.

- On-site search (same domain)

  - URL variations: try simple modifications such as swapping `http` for `https`, adding or removing `www.`, adding or removing a trailing slash, and removing common tracking parameters (for example, utm_*, gclid).
  - Path simplification: remove parts of the URL path to navigate up the directory structure (for example, from `/news/2024/article-slug` to `/news/2024/` or `/news/`).
  - Internal search: use the website's own search feature with keywords from the expected topic or the original URL’s slug.
  - Sitemap: check for `/sitemap.xml` to find lists of valid URLs.

- External search engines

  If on-site methods fail, use a search engine with targeted queries:
  - `site:example.com "expected page title"`
  - `site:example.com keyword1 keyword2`
  - `"{phrase from expected title}" author_name`
  - If the domain is defunct, search for the organization’s name to see if they rebranded or moved to a new domain.

- Common migration patterns

  Look for evidence of common site structure changes:
  - Subdomain to path: change from `blog.example.com/post` to `example.com/blog/post`.
  - Path restructuring: change from `/articles/2020/post` to `/blog/post`.
  - Versioned docs update: change from `/docs/v1/feature` to `/docs/feature`.

### Select and verify

From your research candidates, select the best possible replacement based on the following priority:

1. A URL specified in a `canonical` tag on the original (if accessible).
2. A near-exact match of the title and URL slug on the same domain.
3. A direct topical successor on a new, official domain (for example, confirmed company rebrand).
4. A relevant hub or category page on the same domain if the specific article was retired.

Verification criteria

- Title/heading match: the new page’s `<title>` or `<h1>` has significant word overlap with the expected topic.
- Content match: the body of the new page contains key terms and concepts from the expected topic.
- Contextual match: the publication date, author, or surrounding content aligns with the original context.

### Update

If you have high confidence that you have found the replacement URL, replace it in the document.
