<template>
  <div class="text-gray-800 antialiased">

    <navigation />

    <actions-main tag-slug="tagSlug" />

    <page-footer />

  </div>
</template>

<script>
  export default {
    name: 'TagShow',

    metaInfo() {
      return {
        title: `Links tagged with ${this.tagSlug}`,
      }
    },

    components: {
      Navigation: () => import('./../../components/Navigation'),
      PageFooter: () => import('./../../components/Footer'),
      ActionsMain: () => import('./ActionsMain'),
    },

    data: () => ({
      publicPath: process.env.BASE_URL,
    }),

    computed: {
      tagSlug: () => this.$route.params.tagSlug,
    },
  }
</script>
