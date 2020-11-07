# Contributing Guidelines

This is a GatsbyJS site, on top of Netlify CMS for now, and powered by YAML files. It's easy to start hacking. All you need is to

1. Fork the repo
1. `yarn` to fetch dependencies
1. copy .env.template file to .env.development in the same directory in which .env.template is stored
1. Set up the environment variable .env.development file
1. `yarn start` to spin up dev server on localhost:8000
1. Update, commit, push to your fork. And open a pull request

Swing by `src/data/links/` to see all the links, and if you'd like to add a new one just copy and paste one of the older ones and update it.

We're working on rewriting this whole thing to Statamic, and that rewrite does an import of the YAML mentioned above, then converts it with `node convert.js`. Check out the `api/` directory for that, and the [Statamic v3 Beta Documentation](https://statamic.dev/).

Things are a tad confusing at the moment, but swing by our issues or @philsturgeon on Twitter. We'll get it cleared up soon.


# Deploying to production

Ensure all the environment variable is set on production server. If service like Netlify, Render is used, the env variable can be in their web app.
