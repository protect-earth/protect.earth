<template>
  <section class="pt-20 pb-48">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">Here are our heroes</h2>
          <p class="text-lg leading-relaxed m-4 text-gray-600">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              :src="require('./../../assets/Avatar01.png')"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px;"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Ryan Tompson</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Web Developer
              </p>
              <div class="mt-6">
                <button
                  class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button
                  class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              :src="require('./../../assets/Avatar02.png')"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px;"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Romina Hadid</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Marketing Specialist
              </p>
              <div class="mt-6">
                <button
                  class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-google"></i>
                </button>
                <button
                  class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              :src="require('./../../assets/Avatar03.png')"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px;"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Alexa Smith</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                UI/UX Designer
              </p>
              <div class="mt-6">
                <button
                  class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-google"></i>
                </button>
                <button
                  class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              :src="require('./../../assets/Avatar04.png')"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px;"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Jenna Kardi</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Founder and CEO
              </p>
              <div class="mt-6">
                <button
                  class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-google"></i>
                </button>
                <button
                  class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i class="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
};
</script>
