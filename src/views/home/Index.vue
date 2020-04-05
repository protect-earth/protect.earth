<template>
  <div class="text-gray-800 antialiased">

    <navigation />

    <home-main />

    <page-footer />

  </div>
</template>

<script>
  import Api from './../../services/api'

  export default {

    name: "HomeIndex",

    metaInfo: {
      title: 'Welcome',
    },

    components: {
      HomeMain: () => import('./Main'),
      Navigation: () => import('./../../components/Navigation'),
      PageFooter: () => import('./../../components/Footer'),
    },

    inject: ['baseApiUrl'],

    data: () => ({
      categories: [],
    }),

    created() {
      this.getCategories()
    },

    methods: {
      getCategories() {
        Api.getCategories().then(({data: categories}) => {
          this.categories = [...categories]
        })
      },
    },
  }
</script>
