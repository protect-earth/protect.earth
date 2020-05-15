<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <category-show-content-page
      :categorySlug="categorySlug"
      v-if="isDisplayContent"
    />

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'CategoryShow',

  metaInfo() {
    return {
      title: `${this.categorySlug}`,
    };
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
    CategoryShowContentPage: () => import('./ShowContent'),
  },

  computed: {
    categorySlug() {
      return this.$route !== undefined ? this.$route.params.categorySlug : null;
    },
    isDisplayContent() {
      return this.categorySlug !== null;
    },
  },
};
</script>
