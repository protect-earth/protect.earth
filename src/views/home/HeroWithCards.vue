<template>
  <fragment>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover bg-hero-image"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-50 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-start mt-20 mb-10">
          <div class="w-full lg:w-8/12 px-4">
            <div class="flex flex-col pr-12">
              <h1
                class="text-white font-semibold text-4xl text-bold leading-tight"
              >
                We must cut global emissions in half by 2030, or face
                <em>sea level rises</em>
              </h1>
              <p class="mt-4 text-lg lg:w-10/12 text-gray-300">
                Protect.Earth is a list of strategies, products, services, and
                companies focused on sustainability and environmental
                protection. We are faced with a global existential crisis -
                every little bit you can do helps.
              </p>
            </div>
          </div>
        </div>
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
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>

    <section class="pb-20 bg-gray-300 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap" v-if="recentActions.length > 0">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  <i class="fas fa-car"></i>
                </div>
                <h6 class="text-xl font-semibold">
                  {{ recentActions[0].title }}
                </h6>
                <p
                  class="mt-2 mb-4 text-gray-600"
                  v-html="recentActions[0].description"
                />
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                >
                  <i class="fas fa-retweet"></i>
                </div>
                <h6 class="text-xl font-semibold">
                  {{ recentActions[1].title }}
                </h6>
                <p
                  class="mt-2 mb-4 text-gray-600"
                  v-html="recentActions[1].description"
                />
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                >
                  <i class="fas fa-home"></i>
                </div>
                <h6 class="text-xl font-semibold">
                  {{ recentActions[2].title }}
                </h6>
                <p
                  class="mt-2 mb-4 text-gray-600"
                  v-html="recentActions[2].description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import Api from './../../services/api';

export default {
  name: 'HeroWithCards',

  data: () => ({
    recentActions: [],
  }),

  created() {
    this.getRecentActions();
  },

  methods: {
    getRecentActions() {
      Api.getRecentActions().then(({ data: recentActions }) => {
        this.recentActions = [...recentActions];
      });
    },
  },
};
</script>
