import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
      import(/* webpackChunkName: "StorybookAlike" */ './views/storybookalike/Index'),
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
      import(/* webpackChunkName: "CategoryIndex" */ './views/categories/Index'),
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
        slug: 'carbon-reduction'
    },
    {
        id: 'f92ca585-ad4d-43bc-9430-43c2fad14aa1',
        slug: 'clothing'
    }
];

// Create router objects for each category.
categories = categories.map(function(category) {
    return {
        path: '/' + category.slug,
        name: 'SingleCategoryIndex',
        component: () => import(/* webpackChunkName: "SingleCategoryIndex" */ './views/category/Index'),
        props: { category: category }
    };
});


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  // Merge base routes and category routes.
  routes: routes.concat(categories)
})


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
  })
}

export default router
