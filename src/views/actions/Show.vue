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
      title: `Awesome links tagged with ${this.tagSlug}`,
    };
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
    ActionsMain: () => import('./ActionsMain'),
  },

  computed: {
    tagSlug: () => this.$route.params.tagSlug,
  },
};
</script>
