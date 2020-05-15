<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <div>
      Category Listing will come here.
    </div>

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',

  metaInfo() {
    return {
      title: `Actions`,
    };
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
  },
};
</script>
