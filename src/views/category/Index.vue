<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <section class="flex items-center relative pt-32 pb-20" v-hidden v-if="cat">
      <div class="absolute top-0 left-0 w-1/2 h-full bg-blue-900"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gray-100"></div>

      <div class="relative w-full max-w-screen-lg px-5 mx-auto">
        <div class="relative">
          <div class="relative z-10 w-full py-20 md:w-3/4 lg:w-3/5">
            <h1
              class="leading-tight text-white text-4xl font-bold mb-4 md:text-5xl lg:text-6xl"
              v-text="cat.title"
            ></h1>
            <p
              class="text-white text-lg font-light mb-6"
              v-html="cat.intro"
            ></p>
          </div>

          <div
            class="image-left-side absolute top-0 right-0 w-3/4 h-full bg-cover bg-center background-gray-300 rounded-md shadow-lg"
            :style="{
              backgroundImage:
                'url(\'' + (cat.image ? cat.image.permalink : '') + '\')',
            }"
            role="img"
            aria-label=""
          ></div>
        </div>
      </div>
    </section>

    <div class="bg-white py-20" v-hidden v-if="cat">
      <div class="container relative w-full max-w-screen-md px-5 mx-auto">
        <div class="written" v-html="cat.content"></div>
      </div>
    </div>

    <!-- <div class="featured-actions" v-hidden v-show="featured">
            <div class="featured-action" v-for="action in featured" :key="action.id">
            </div>
        </div> -->

    <div class="bg-gray-100 py-20" v-hidden v-show="actions">
      <div class="container relative w-full max-w-screen-md px-5 mx-auto">
        <div class="mb-6" v-for="action in actions" :key="action.id">
          <a :href="action.action_url" class="text-gray-800">
            <h3
              v-text="action.title"
              class="text-xl mb-2 hover:text-pink-600"
            ></h3>
            <p v-html="action.description" class="mb-4"></p>
          </a>
          <div
            class="sm:flex items-center justify-between flex-row-reverse pb-4 border-b-2 border-gray-200"
          >
            <a
              :href="action.action_url"
              class="inline-block text-pink-600 px-4 py-2 mb-4 sm:mb-0 border-2 border-pink-600 rounded-full hover:bg-pink-600 hover:text-white"
              >Take Action</a
            >

            <div class="flex items-center">
              <p class="mr-3">Share</p>
              <a
                :href="
                  'https://www.facebook.com/sharer/sharer.php?t=' +
                    encodeURIComponent(
                      action.description.replace(/(<([^>]+)>)/gi, '')
                    ) +
                    '&u=' +
                    action.action_url
                "
                class="block text-pink-600 mr-4 hover:text-pink-800"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                :href="
                  'https://twitter.com/intent/tweet?text=' +
                    encodeURIComponent(
                      action.description.replace(/(<([^>]+)>)/gi, '') +
                        ' via @_ProtectEarth'
                    ) +
                    '&url=' +
                    action.action_url
                "
                class="block text-pink-600 mr-4 hover:text-pink-800"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                :href="
                  'mailto:?subject=' +
                    encodeURIComponent(
                      action.description.replace(/(<([^>]+)>)/gi, '')
                    ) +
                    '&body=' +
                    action.action_url
                "
                class="block text-pink-600 mr-6 hover:text-pink-800"
                ><i class="fas fa-envelope"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-20" v-hidden v-if="cat">
      <div class="container relative w-full max-w-screen-md px-5 mx-auto">
        <div class="written text-center">
          Green "Want to help? Great!" section here
        </div>
      </div>
    </div>

    <page-footer />
  </div>
</template>

<script>
import api from './../../services/api.js';

export default {
  name: 'SingleCategoryIndex',

  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  components: {
    Navigation: () => import('./../../components/Navigation'),
    //Action: () => import('./../../components/listing/Action'),
    PageFooter: () => import('./../../components/Footer'),
  },

  data() {
    return {
      cat: null,
      featured: null,
      actions: null,
    };
  },

  mounted() {
    var self = this;

    // Load category information.
    api.showCategoryWithSlug(this.category.slug).then(function(response) {
      self.cat = response;
    });

    // Load all actions for this category.
    api.getActionsWithCategory(this.category.id).then(function(response) {
      // Split actions into featured/regular.
      self.featured = response.data.filter(function(action) {
        return action.featured;
      });
      self.actions = response.data.filter(function(action) {
        return !action.featured;
      });
    });
  },

  methods: {},
};
</script>
