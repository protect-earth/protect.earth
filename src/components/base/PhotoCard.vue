<template>
  <div class="w-full md:w-4/12 px-4 text-center">
    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
        :class="bgClass"
      >

      <img :alt="imgAlt" :src="imgSrc" class="w-full align-middle rounded-t-lg">

      <blockquote class="relative p-8 mb-4">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
             class="absolute left-0 w-full block" style="height: 95px; top: -94px;">
          <polygon points="-30,95 583,95 583,65" :class="svgClass" class="fill-current"></polygon>
        </svg>
        <h4 class="text-xl font-bold text-white">
          <slot name="title"> Title </slot>
        </h4>
        <p class="text-md font-light mt-2 text-white">
          <slot name="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </slot>
        </p>
      </blockquote>

    </div>
  </div>
</template>

<script>
  export default {
    name: "BasePhotoCard",

    inject: ['baseApiUrl'],

    props: {
      bgColor: { default: 'gray-500' },
      imgSrc: { default: `${process.env.BASE_URL}img/river-top.jpeg` },
      imgAlt: { default: `...` },
    },

    computed: {
      svgClass() {
        return `text-${this.bgColor}`
      },
      bgClass() {
        return `bg-${this.bgColor}`
      },
    },

  }
</script>

