<template>
  <div class="text-gray-800 antialiased">

    <navigation />

    <tags-main />

    <page-footer />

  </div>
</template>

<script>
  export default {
    name: 'TagIndex',

    metaInfo() {
      return {
        title: `Tags for the actions`,
      }
    },

    components: {
      Navigation: () => import('./../../components/Navigation'),
      PageFooter: () => import('./../../components/Footer'),
      TagsMain: () => import('./TagsMain'),
    },

    data: () => ({
      publicPath: process.env.BASE_URL,
    }),

  }
</script>
