<template>
  <div class="w-full md:w-4/12 px-4 text-center">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-5 flex-auto">
        <div
          class="text-white p-3 text-center inline-flex items-center
          justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
          :class="iconParentClass"
        >
          <slot name="icon">
            <i class="fas fa-award"></i>
          </slot>
        </div>

        <h6 class="text-xl font-semibold">
          <slot name="title"> Title </slot>
        </h6>

        <p class="mt-2 mb-4 text-gray-600">
          <slot name="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    iconParentClass: {
      default: 'bg-blue-500',
    },
  },
};
</script>
