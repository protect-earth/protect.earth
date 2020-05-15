<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <search-main />

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'SearchIndex',

  metaInfo() {
    return {
      title: `Search for the actions`,
    };
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
    SearchMain: () => import('./SearchMain'),
  },

  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>
