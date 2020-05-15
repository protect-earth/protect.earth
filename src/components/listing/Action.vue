<template>
  <fragment>
    <base-photo-card
      v-for="(category, index) in categories"
      :key="index"
      bg-color="pink-600"
      :img-src="category.image.permalink"
      :img-alt="category.title"
      class="leading-loose"
    >
      <template slot="title">
        {{ category.title }}
      </template>

      <template slot="body">
        {{ category.intro | introText }}

        <div class="mt-6">
          <router-link
            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            :to="{
              name: `CategoryShow`,
              params: { categorySlug: category.slug },
            }"
          >
            Act now
          </router-link>
        </div>
      </template>
    </base-photo-card>
  </fragment>
</template>

<script>
import Strings from './../../services/strings';

export default {
  name: 'ListingAction',

  props: ['categories'],

  filters: {
    introText: Strings.introText,
  },
};
</script>

<style scoped></style>
