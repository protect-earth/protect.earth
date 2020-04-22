<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <tags-main v-bind:tag-name="tagName" />

    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'TagShow',

  metaInfo() {
    return {
      title: `Links tagged with ${this.tagSlug}`
    }
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer'),
    TagsMain: () => import('./TagsMain')
  },

  data: () => ({
    tagName: '',
    publicPath: process.env.BASE_URL
  }),

  computed: {
    tagSlug: function() {
      return this.$route.params.tagSlug
    }
  }
}
</script>
