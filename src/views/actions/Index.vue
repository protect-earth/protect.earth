<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <actions-main></actions-main>

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'ActionIndex',

  metaInfo() {
    return {
      title: `Actions`,
    };
  },

  components: {
    ActionsMain: () => import('./ActionsMain'),
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
  },
};
</script>
