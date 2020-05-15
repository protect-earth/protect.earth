<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <about-page></about-page>

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'AboutIndex',

  metaInfo() {
    return {
      title: `About`,
    };
  },

  components: {
    AboutPage: () => import('./Page'),
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
  },
};
</script>
