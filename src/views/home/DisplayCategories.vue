<template>
  <section class="bg-gray-300">
    <div class="container mx-auto flex flex-wrap ">
      <base-card v-for="(category, index) in categories" :key="index" icon-parent-class="bg-blue-700">
        <template slot="icon">
          <i class="fas fa-award"></i>
        </template>
        <template slot="title">
          {{ category.title }}
        </template>
        <template slot="body">
          {{ category.intro | introText }}
        </template>
      </base-card>
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
