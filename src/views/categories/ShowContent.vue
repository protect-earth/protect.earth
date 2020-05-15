<template>
  <main class="profile-page">
    <section class="relative block" style="height: 500px;">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover bg-hero-image"
        :style="[category && category.image && category.image.permalink? { backgroundImage: `url('${category.image.permalink}')` }: '']"
      >
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-gray-300">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="mt-10 py-10 border-b border-gray-300 text-justify">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <h2 class="text-4xl font-bold">{{category && category.title}}</h2>
                  <p
                    class="mb-4 leading-relaxed text-gray-800 category-page-category-content"
                    v-html="category && category.content"
                  />
                </div>
              </div>
            </div>

            <div class="mb-10 py-10 text-justify">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <ul>
                    <li v-for="(action, index) in actions" :key="index" class="mt-6">
                      <a
                        :href="action.action_url"
                        class="mb-2 text-2xl text-bold text-blue-600"
                      >{{ action.title }}</a>

                      <p v-html="action.description"></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Api from '../../services/api'

export default {
  name: 'CategoryShowContentPage',

  props: ['categorySlug'],

  data: () => ({
    actions: [],
    category: null
  }),

  mounted() {
    this.showCategory().then(() => this.getActions())
  },

  methods: {
    showCategory() {
      return Api.showCategoryWithSlug(this.categorySlug).then(category => {
        this.category = category
      })
    },

    getActions() {
      Api.getActionsWithCategory(this.category.id).then(({ data }) => {
        this.actions = [...data]
      })
    }
  }
}
</script>

<style>
.category-page-category-content p {
  margin-top: 1em;
  margin-bottom: 1em;
}
.category-page-category-content ul {
  list-style: disc;
  padding-inline-start: 2em;
}
</style>
