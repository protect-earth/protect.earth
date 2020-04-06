<template>
  <main class="profile-page">
    <section class="relative block" style="height: 500px;">
      <div class="absolute top-0 w-full h-full bg-center bg-cover bg-hero-image">
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span></div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
           style="height: 70px; transform: translateZ(0px);">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
             version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-gray-300">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">

              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img alt="..."
                       :src="category && category.image && category.image.permalink"
                       class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                       style="max-width: 150px;">
                </div>
              </div>

            </div>
            <div class="text-center mt-12">
              <p class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                {{ category && category.title }}
              </p>
              <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"><i
                class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Los Angeles, California
              </div>
              <div class="mb-2 text-gray-700 mt-10"><i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>Solution
                Manager - Creative Tim Officer
              </div>
              <div class="mb-2 text-gray-700"><i class="fas fa-university mr-2 text-lg text-gray-500"></i>University of
                Computer Science
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-gray-300 text-justify">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-gray-800" v-html="category && category.body"/>
                  <a href="#" class="font-normal text-pink-500">Do something about it</a></div>
              </div>
            </div>

            <div class="mt-10 py-10  text-justify">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <ul>
                    <li v-for="(action, index) in actions"
                        :key="index"
                        class="mt-6"
                    >
                      <p class="mb-2 text-lg text-bold text-blue-600">
                        {{ action.title }}
                      </p>

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
  import Api from "../../services/api"

  export default {
    name: 'CategoryShowContentPage',

    props: ['categorySlug'],

    data: () => ({
      actions: [],
      category: null,
    }),

    mounted() {
      this.showCategory()
        .then(() => this.getActions())
    },

    methods: {
      showCategory() {
        return Api.showCategoryWithSlug(this.categorySlug).then(category => {
          this.category = category
        })
      },

      getActions() {
        Api.getActionsWithCategory(this.category.id).then(({data}) => {
          this.actions = [...data]
        })
      },
    },
  }
</script>
