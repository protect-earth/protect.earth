<template>
  <div class="text-gray-800 antialiased">

    <home-navigation/>

    <home-main/>

    <home-footer/>

  </div>
</template>

<script>

  export default {
    name: "HomeIndex",

    metaInfo: {
      title: 'Welcome',
    },

    components: {
      HomeMain: () => import('./Main'),
      HomeNavigation: () => import('./Navigation'),
      HomeFooter: () => import('./Footer'),
    },

    data: () => ({
      baseApiUrl: process.env.VUE_APP_API_BASE_URL,
      categories: [],
    }),

    created() {
      this.getCategories()
    },

    methods: {
      getCategories() {
        // file export for the endpoints?
        fetch(`${this.baseApiUrl}/api/collections/categories/entries`)
          .then(r => r.json())
          .then((data) => {
            this.$set(this, 'categories', data)
          })
      },
    },
  }
</script>

<style scoped>

</style>
