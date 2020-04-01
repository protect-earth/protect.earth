<template>
  <div>
    <contents />
  </div>
</template>

<script>

  export default {
    name: "HomeIndex",

    metaInfo: {
      title: 'Welcome',
    },

    components: {
      Contents: () => import('./Contents')
    },
  }
</script>

<style scoped>

</style>
