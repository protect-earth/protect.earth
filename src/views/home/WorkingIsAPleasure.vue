<template>
  <section class="pb-20 bg-gray-300 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center pt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
          >
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/framework/tailwind-starter-kit"
            class="font-bold text-gray-800 pt-16"
          >
            Check Tailwind Starter Kit!
          </a>

        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-700"
          >
            <img
              alt="..."
              :src="require('./../../assets/river-top.jpeg')"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block"
                style="height: 95px; top: -94px;"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-teal-700 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white"> Some text here please </h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue
                whatever happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "WorkingIsAPleasure",
  }
</script>
