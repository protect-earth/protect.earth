<template>
  <div class="text-gray-800 antialiased">

    <navigation />

    <page category="category"/>

    <page-footer />

  </div>
</template>

<script>
  export default {
    name: 'CategoryShow',

    metaInfo() {
      return {
        title: `${this.categorySlug}`,
      }
    },

    components: {
      Navigation: () => import('./../../components/Navigation'),
      PageFooter: () => import('./../../components/Footer'),
      Page: () => import('./Page'),
    },

    computed: {
      categorySlug: () => '' //this.$route.params.categorySlug,
    },
  }
</script>
