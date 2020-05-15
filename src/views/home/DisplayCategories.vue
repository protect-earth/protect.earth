<template>
  <section class="bg-gray-300">
    <div class="container mx-auto flex flex-wrap">
      <listing-category :categories="categories"></listing-category>
    </div>
  </section>
</template>

<script>
import Api from './../../services/api';
import ListingCategory from '../../components/listing/Category';

export default {
  name: 'DisplayCategories',

  components: {
    ListingCategory,
  },

  data: () => ({
    categories: [],
  }),

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      Api.getCategories().then(({ data: categories }) => {
        this.categories = [...categories];
      });
    },
  },
};
</script>
