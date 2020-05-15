<template>
  <fragment>
    <base-page :title="title" :content="content"></base-page>
  </fragment>
</template>

<script>
import content from './../../content/about';

export default {
  name: 'AboutPage',

  data: () => ({
    content,
    title: 'Foo baaar',
  }),
};
</script>
