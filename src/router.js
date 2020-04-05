import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({y: 0}),
  routes: [
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
      path: '/actions',
      name: 'ActionIndex',
      component: () =>
        import(/* webpackChunkName: "ActionIndex" */ './views/actions/Index'),
    },
    {
      path: '/actions/:actionSlug',
      name: 'ActionShow',
      component: () =>
        import(/* webpackChunkName: "ActionShow" */ './views/actions/Show'),
    },
    {
      path: '/categories',
      name: 'CategoryIndex',
      component: () =>
        import(/* webpackChunkName: "CategoryIndex" */ './views/categories/Index'),
    },
    {
      path: '/categories/:categorySlug',
      name: 'CategoryShow',
      component: () =>
        import(/* webpackChunkName: "CategoryShow" */ './views/categories/Show'),
    },
  ],
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
