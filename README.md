# NextJs / Prismic starter

This is a starter template for [Next.js](https://nextjs.org/) and
[Prismic](https://prismic.io/), including scss scaffolding and common
component patterns.

DEV: `yarn dev` PROD: `yarn build && yarn start`

# Contents

- [Project structure in 5 minutes](#project-structure-in-5-minutes)
- [Prismic](#prismic)
  - [Fetching data](#fetching-data)
  - [Layout](#layout)
  - [Slices](#slices)
  - [Preview](#preview)
  - [Titles in Prismic](#titles-in-prismic)
- [Environment variables](#environment-variables)
- [GraphQL](#graphql)
- [Styling](#styling)
- [Testing](#testing)
- [Logging](#logging)

## Project structure in 5 minutes

Everything lives in `.src/`, except for:

- Config files, yay
- Static assets available from the root in `./public`, e.g. favicons, fonts
  etc

### ./src/api

All connections to 3rd party services and helpers.

### ./src/assets

All local assets (i.e. not in prismic), both SVGs and images.

### ./src/components

All shared components. For each component, all of the following should be
true:

- It doesn't contain any data (i.e. strings, images etc) but displays it via
  props
- It doesn't do any data fetching (it's "dump")
- It has styles, and tries to stay as simple and not-nested as possible (see
  below)
- It's in its own folder with its styles, and perhaps some other related
  components (e.g. Carousel and CarouselItem live in the same folder)
- It uses the grid and container patterns ([see below](#styling)) to stay
  within layout
- It uses named exports, not default exports

### ./src/containers

All shared containers. For each container, all of the following should be
true:

- It takes "complex" data and maps it into components (e.g. the slice
  container)
- It doesn't contain any data (i.e. strings, images etc) but displays by
  passing it to components
- It doesn't have any styles
- It's used by many things and perhaps up high in tree (e.g. nav)

### ./src/context

All contexts, well, just the ui context. Used to share UI state between nodes
in the render tree.

### ./src/fragments

Shared GraphQL fragments, see below.

### ./src/hooks

Hooks! Drop in some nice ones if ya got'em.

### ./src/pages

All pages/templates/things that the user sees.

These are created by assembling everything else. Here's where all content
should live, i.e. if we've got a "static" page, it should contain **all data**
in the page itself. You should not have to go hunting around for it. If I want
to change a word, image or ordering of components, I should do it in the page.

Also, pages **do not** have styling. This rule makes it much easier to handle
layout—it's done in components, that's it.

For dynamic pages, they should be structured like this:

- `getStaticProps` does setup and fetches data. No heavy lifting here, it
  should all be inside `./src/api`. For Prismic pages, the query should be
  inside the page itself. This makes it easier to figure out what data should
  be there, see below.
- The default export receives the data and assembles the page using components
  and containers

Dynamic routes are TBD.

### `./src/styles`

Shared and default styles.

- `config.scss`, imported by components to get access to stuff
- `fonts.scss`, include any `@font-face` stuff here
- `forms.scss`, sane defaults for form html elements
- `global.scss`, global styles applied to elements, `:root` and CSS vars
- `grid.scss`, all scss mixins related to the layout grid. Do not edit this
  directly
- `layout.scss`, layout helpers @section and @container
- `reset.scss`, css reset and sanity settings
- `type.scss`, type-based mixins responsive font headings etc
- `utils.scss`, utility mixins for common reusable css patterns
- `variables.scss` project default variables. this is where layout defaults,
  colours, fonts etc. are controlled

### `./src/types`

Types and interfaces used in the project.

### `./src/utils`

Classic. All things that don't fit elsewhere.

### `./src/masks`

Copies of all "masks" from Prismic that define the types. This pretty much
means we copy paste from the JSON editor after we do changes. This allows for
version control of the data types but it's easy to forget... Hoping for
something better here at some point.

## Prismic

- Create your Prismic repo.
- Connect it via `PRISMIC_*`
  [environment (.env) variables](#environment-variables)
  - The API token should be the permanent one from
    `settings > API & Security`, after you create a new token.
- Create some document types.
- To get up and running quickly:
  - create `Layout` as a singleton type, `Page` and `Article` as repeatables,
    and copy the JSON from `./src/prismic-masks` into the JSON builder for
    them.
  - Sync the types by running yarn generate, this will populate
    `./graphql.schema.json` and `./src/prismic-types.tsx`.

### Fetching data

Data for dynamic pages is fetched via `getServerSideProps` by calling
`./src/api/prismic.ts` with the relevant GraphQL query.

### Layout

Layout is included in all queries on page level and included in the props
passed along. `layout` is picked up by `./src/pages/_app.tsx` and from there
passed into `./src/components/layout/Layout.tsx`.

### Slices

_[Content needed]_

### Preview

Preview works by adding an entry the Prismic preview setting, e.g.
`https://<my-site>.prismic.io/settings/previews/` for each "preview" you want,
e.g. `development`, `staging`, `production`.

Add the entry and have it point to the resolver at `/api/preview`. When a
preview session is started it will hit `./src/pages/api/preview.tsx` first and
setup the preview session with Next.

In development (as long the development server runs on port `3000`) previews
should just work. There might be some issues with link resolving, debug via
`./src/pages/api/preview.tsx` and `./src/utils/linkResolver.tsx`.

TODO setup in prod.

### Titles in Prismic

Since Prismic uses the first field in a document as the internal title, it
should be set specifically. In fact we have _four_ types of titles:

- The _prismic_ title
- The _displayed_ title on the actual site, this might be more complex, e.g.
  it has the possibility of emphasis or being shown in multiple lines
- The _title_ meta title on the actual site, e.g. the text inside the
  `<title>` element
- The _SEO title_, shown when the page is shared.

## Environment variables

Uses `.env` to store config/secrets:

```
PRISMIC_REST_URL
PRISMIC_GRAPHQL_URL
PRISMIC_API_TOKEN
PRISMIC_REPOSITORY_LOCALE
```

To start, copy `.env.example` to `.env` and add the relevant variables.

## GraphQL

To query data from Prismic we use the GraphQL API. This allows us to do all
fetching in a single query, getting data from different sources, e.g. a page
and some news.

Prismic has an open GraphiQL client running at
`https://[repo-name].prismic.io/graphql` (which happens to also be the
endpoint). You can play around with queries there and get the data you want.

To keep things clean and consistent, all "types" should be handled via
fragments, see `./src/fragments`. This makes sure each thing has the same data
in all contexts, you don't forget something that's included elsewhere.

When creating a new type/adding to an existing one, follow this script:

- Do the changes to the type in the Prismic UI
- Change a document using these new changes and _publish_, otherwise the API
  won't show the change
- Use the GraphiQL UI to select the data as needed
- After it's good, copy the "mask" into the project
- Run `yarn generate` to auto generate the types into
  `./src/prismic-types.tsx`
- Copy the query into page, reference the required fragments
- Connect via `getStaticProps`, data will come in as `any` but here's the
  place to type it
- Pass the data into the page and map the content

### Generating types

This project uses `graphql-codegen` to automatically create ts types for
prismic data. Since Prismic still relies on their REST API for stuff, we have
to jump through one hoop to generate this.

`./src/utils/generatePrismicIntrospection.js` is run _before_
`graphql-codegen` to create `./graphql.schema.json`.

All config for `graphql-codegen` is in `./codegen.yml`.

### Working with slices

Each "slice zone" per content type has its own type. _But_, if we make sure
they're all exactly the same, we can create a union type that encompasses all
different types. This mapping happens in `./src/types/prismic/slices`.

Using this we can create a single container that works for all slices, see
`./src/containers/slices`.

## Styling

Components use scss modules for styling, but the starter also provides utility
components to prevent having to reuse mixins too often. Use the utility
components wherever possible. Examples of these are under `/pages/index.tsx`.

When styling components with scss, use the `@grid` pattern to position
elements, and always write mobile-first.

### `<Section />`

High-level utility for spacing between components, with adjacent-component
logic. You'll almost always use this for wrapping Prismic [slices](#slices),
but rarely in regular components. Optional container boolean prop for adding a
`<Container />` to wrap child components. `Section` or `@section` should never
be used to style children of a module.

### `<Container />`

A wrapper to set max width and spacing around components. It is default
included in `<GridLayout />` component, and also included by default as `scss`
the `@grid` mixin.

### `<Grid />`

The Grid component places child components in an equal, defined column grid.
`components/grid/Grid`;

### `<GridLayout />` and `<GridLayoutItem />` 

Not to be confused with `<Grid />`, this positions items along the grid at
defined columns and at optional breakpoints.

### Writing (s)css modules

- Use BEM syntax for nested components.
- modifiers should be just single word classnames
- Use `classnames` package for multiple classnames
- Stick to lint-defined patterns as much as possible
- If the \*.module.scss file is big, this is an indication that the component
  could be split into smaller components

### Hello world scss module

```
@import 'styles/config';

.myModule {

  &__container {
    // if needed outside grid:
    // @include container;
  }

  &__grid {
    @include grid;
    // OR
    @include grid($container: false);
  }

  &__content {
    @include grid-item; // it's 100% in mobile

    @media (min-width: $min-tablet) {
      @include grid-item(6); // it's 6/12 cols in tablet
    }

    @media (min-width: $min-desktop) {
      @include grid-item(3); // it's 3/12 cols in desktop
    }
  }
}
```

Use the common breakpoints defined for changing the grid so the layout changes
consistently. For component specific responsiveness, use sizes that make sense
based on viewport width.

## Testing

Jest is setup in the project. Create tests in a file named `/<name>.test.ts`,
see tests that are already in the repo.

```bash
yarn test # single run
yarn test --watch # run and watch for changes and rerun tests
yarn test --coverage # coverage report for tested files
```

### Linting

Following "linters" are defined:

- `eslint`, with [`HXMstyle` config](https://github.com/hugsmidjan/hxmstyle/)
- `stylelint`, with
  [`HXMstyle` config](https://github.com/hugsmidjan/hxmstyle/)
- `types`, runs TypeScript compiler to check types are OK

Run separately with `yarn lint:<name>` or all with `yarn lint`.

### GitHub actions

GitHub action for running both tests and linters is defined in
`.github/workflows/lint-test.yml`.

## Logging

Logging should all go through a logger, this allows for a single point to add
info or to refactor into a separate logging system.

In `utils/logger.ts` there's a basic logger that can extended or changed via
`ILogger` interface. Either instanciate or use the exported `logger`
singleton.
