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
            <div class="text-center mt-12">
              <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                About
              </h3>
            </div>
            <div class="mt-10 py-10 border-gray-300">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4" v-html="content">
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
  export default {
    name: "BasePage",

    props: {
      title: { required: true },
      content: { required: true },
    },
  }
</script>

