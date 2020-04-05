<template>
  <section class="bg-gray-300 min-h-screen">

    <div class="container mx-auto pt-12 flex flex-col">
      <p class="text-2xl">🔥 Storybook Alike </p>
      <p class="mt-4 text-sm"> Quick and dirty way to showcase components 🥳  </p>


      <p class="text-lg mt-12">Base cards</p>

    </div>

    <div class="container mx-auto flex flex-col">

      <p class="mt-12 mb-6"> Here we can see how to use a base card.</p>

      <base-card icon-parent-class="bg-pink-700">
        <template slot="icon">
          <i class="fas fa-retweet"></i>
        </template>
        <template slot="title">
          Retweet
        </template>
        <template slot="body">
          Go the this twitter and check me out!
        </template>
      </base-card>
    </div>

    <div class="container mx-auto">
      <p class="mt-12 mb-6">
        Here on a list. Data needs to be provided, in order to be dynamic, not always the same icon, and color.
      </p>
    </div>

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
    name: "CategoriesWithBaseCards",

    data: () => ({
      categories: [],
    }),

    created() {
      this.getCategories()
    },

    methods: {
      getCategories() {
        Api.getCategories().then(({data: categories}) => {
          this.categories = [...categories.splice(0, 6)]
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
