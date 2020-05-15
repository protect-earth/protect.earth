<template>
  <router-link
    :to="to"
    type="link"
    class="pl-4 pr-0 text-gray-400 hover:text-pink-700"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: ['label', 'to'],
};
</script>
