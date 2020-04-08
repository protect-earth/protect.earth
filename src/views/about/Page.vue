<template>
  <fragment>
    <base-page :content="content"></base-page>
  </fragment>
</template>

<script>
  import content from './../../content/about'

  export default {
    name: 'AboutPage',

    data: () => ({
      content,
    }),
  }
</script>
