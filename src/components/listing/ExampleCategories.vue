<template>
  <div class="bg-gray-700 pt-16 pb-16">
    <base-card v-for="category in categories" :key="category.id">
      <template v-slot:title> {{ category.title }} </template>
      <template v-slot:body> {{ category.intro }} </template>
    </base-card>
  </div>
</template>

<script>
  export default {
    name: "ExampleCategories",

    props: ['categories'],

  }
</script>

<style scoped>

</style>
