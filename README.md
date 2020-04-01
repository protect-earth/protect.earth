# Protect.Earth

This website is currently being rewritten, to make it more awesome, and powered by an API so that other sites can pull data from it for their own uses.

The frontend is [Vue.JS](https://vuejs.org/) and the backend is [Statamic v3](https://statamic.dev/rest-api).

## Frontend Setup

```
npm install
```

### Run Server

```
npm run serve
```

### Build for Production

```
npm run build
```

## Backend Setup

The API host is pulled from `.env.local` and by default points to `https://api.protect.earth`.

To run the API locally instead, use the following:

```
cd api
composer install
php artisan serve
```

Then update `.env.local` to point to `http://127.0.0.1:8000`.
