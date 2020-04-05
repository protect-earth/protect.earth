<template>
  <section class="bg-gray-300">
    <div class="container mx-auto flex flex-wrap ">
      <base-photo-card v-for="(category, index) in categories"
                       :key="index"
                       icon-parent-class="bg-purple-700 text-purple-700"
                       :img-src="category.image.permalink"
                       :img-alt="category.title"
      >
        <template slot="title">
          {{ category.title }}
        </template>
        <template slot="body">
          {{ category.intro | introText }}
        </template>
      </base-photo-card>
    </div>
  </section>
</template>

<script>
  import Api from './../../services/api'
  import Strings from './../../services/strings'

  export default {
    name: "DisplayCategories",

    data: () => ({
      categories: [],
    }),

    created() {
      this.getCategories()
    },

    methods: {
      getCategories() {
        Api.getCategories().then(({data: categories}) => {
          this.categories = [...categories]
        })
      },
    },

    filters: {
      introText: Strings.introText,
    },
  }
</script>

<style>

</style>
