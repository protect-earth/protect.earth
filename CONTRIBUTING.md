# Contributing Guidelines

This is a GatsbyJS site, on using Airtable as a data source for the directory.

If you'd like to suggest links, you can do that through this [Airtable form](https://airtable.com/shr9iNOeyFAAk8zqN).

If you'd like to work on the codebase:

1. Fork the repo.
2. `npm install` to fetch dependencies.
3. copy `.env.template` file to `.env` in the same directory in which `.env.template` is stored.
4. Enter environment variables for `.env` (ask phil@protect.earth / @philsturgeon).
5. `npm run start` to spin up dev server on `localhost:8000`.
6. Update, commit, push to your fork. And open a pull request!

This directory may well be moving to another home soon, so we're not putting a huge amount of effort into it at the moment. That said, if we get it good, it could be used as the basis for the new home, so reach out if you have ideas!

# Deploying to production

Ensure all the environment variable is set on production server. If service like Netlify, Render is used, the env variable can be in their web app.
