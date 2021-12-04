# Graaf-Reinet Club History | Gatsby static site

Based on the Gatsby Netlify [demo starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) commit hash `7c31b771d53795aa2cbffe707b0ad21f3e45bdab`.

It makes use of [Gatsby v4](https://www.gatsbyjs.com/gatsby-4/) and is [Netlify CMS](https://www.netlifycms.org) capable.


## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)


### Develop Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step

```bash
git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
cd [REPO_NAME]
npm i
npm start
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting for production.

If you want use Netlify CMS locally, run the site in one terminal with `npm run start` and in another
Terminal you can use `npx netlify-cms-proxy-server` which proxy requests so you'll be automatically logged
in as a user on [http:localhost:3000/admin](http:localhost:3000/admin).

### Adding pages

- Add template in `src/templates`.
- Add page in `src/pages/page-name..`. This automatically creates a route to the page at `/page-name...`.

#### Adding to CMS

- Add a template in `src/cms/preview-templates`. Add this template to `src/cms/cms.js`.
  - This create a template so the person using the CMS can kind of get an idea what things are going to look like.
- Add form configuration to `static/admin/config.yml`.
