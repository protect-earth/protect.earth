import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Base routes.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ './views/home/Index'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ './views/about/Index'),
  },
  {
    path: '/storybook-alike',
    name: 'StorybookAlike',
    component: () =>
      import(
        /* webpackChunkName: "StorybookAlike" */ './views/storybookalike/Index'
      ),
  },
  {
    path: '/tags',
    name: 'TagIndex',
    component: () =>
      import(/* webpackChunkName: "TagIndex" */ './views/tags/Index'),
  },
  {
    path: '/tags/:tagSlug',
    name: 'TagShow',
    component: () =>
      import(/* webpackChunkName: "TagShow" */ './views/tags/Show'),
  },
  {
    path: '/categories',
    name: 'CategoryIndex',
    component: () =>
      import(
        /* webpackChunkName: "CategoryIndex" */ './views/categories/Index'
      ),
  },
  {
    path: '/category/:categorySlug',
    name: 'CategoryShow',
    component: () =>
      import(/* webpackChunkName: "CategoryShow" */ './views/categories/Show'),
  },
  {
    path: '/search',
    name: 'SearchIndex',
    component: () =>
      import(/* webpackChunkName: "SearchIndex" */ './views/search/Index'),
  },
  {
    path: '/search/:searchTerm',
    name: 'SearchQuery',
    component: () =>
      import(/* webpackChunkName: "SearchQuery" */ './views/search/Query'),
  },
];

// Array of information for all categories in the API.
let categories = [
  {
    id: '207559a4-fe66-4c3d-bc6c-4f721f9562a4',
    slug: 'carbon-reduction',
  },
  {
    id: 'f92ca585-ad4d-43bc-9430-43c2fad14aa1',
    slug: 'clothing',
  },
  {
    id: 'a68b7a57-c0a5-4b27-81d2-93a19f2787a1',
    slug: 'consumer-products',
  },
  {
    id: 'e71796f8-4b3d-4f40-a1a8-527fb0fdf854',
    slug: 'cooking',
  },
  {
    id: '49f0ae64-b03a-4d50-bbdc-edd765ef4500',
    slug: 'documentaries',
  },
  {
    id: '1e06ea25-373d-440c-9abd-408710b475d0',
    slug: 'food',
  },
  {
    id: '681bffaf-a44c-4449-ae96-bf780506c862',
    slug: 'footprint-calculators',
  },
  {
    id: '6ad9cfc5-eac0-455e-9ad0-f537896373ba',
    slug: 'home-improvements',
  },
  {
    id: '7adab10c-985b-42e2-ab8c-eee35b5a8817',
    slug: 'hygiene',
  },
  {
    id: '1fcc2840-32ba-44fb-9b99-efe4d1397ff4',
    slug: 'jobs',
  },
  {
    id: '411e32f8-59bc-4fbb-ac7f-3d2a908b039e',
    slug: 'land-management',
  },
  {
    id: '0ec6e5b5-0a80-4c8d-b45f-b78c99492d8d',
    slug: 'news',
  },
  {
    id: '3d78ba9a-4f85-464b-a330-1cfb5c137328',
    slug: 'politics',
  },
  {
    id: '63a7cfb3-7cd5-4282-af9d-e5ed41572d1b',
    slug: 'reforestation',
  },
  {
    id: 'f9b2c5ee-8da3-446b-b865-0d716debed30',
    slug: 'renewable-energy',
  },
  {
    id: '0a32cb28-6330-4881-8671-824476ed5859',
    slug: 'transportation',
  },
  {
    id: '97826809-ed97-424c-9c46-cedba824add8',
    slug: 'travel',
  },
  {
    id: 'ee42a632-ac6a-4f89-802a-8111cf674d4c',
    slug: 'volunteering',
  },
  {
    id: 'a1a4ac88-627d-4bc7-a5b5-d3dcdc10cc43',
    slug: 'waste',
  },
];

// Create router objects for each category.
categories = categories.map(function(category) {
  return {
    path: '/' + category.slug,
    name: `${category.slug}-CategoryIndex`,
    component: () =>
      import(
        /* webpackChunkName: "SingleCategoryIndex" */ './views/category/Index'
      ),
    props: { category: category },
  };
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  // Merge base routes and category routes.
  routes: routes.concat(categories),
});

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development',
    },
  });
}

export default router;
