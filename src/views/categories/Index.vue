<template>
  <div class="text-gray-800 antialiased">

    <navigation/>


    <page-footer/>

  </div>
</template>

<script>
  export default {
    name: 'ActionIndex',

    metaInfo() {
      return {
        title: `Actions`,
      }
    },

    components: {
      Navigation: () => import('./../../components/Navigation'),
      PageFooter: () => import('./../../components/Footer'),
    },

  }
</script>
