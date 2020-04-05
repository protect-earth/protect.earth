<template>
  <main>

    <hero-with-cards />

    <working-is-a-pleasure />

    <a-growing-company />

    <team />

    <build-something />

    <work-with-us></work-with-us>

  </main>
</template>

<script>
import HeroWithCards from "./HeroWithCards"
import WorkingIsAPleasure from "./WorkingIsAPleasure"
import AGrowingCompany from "./AGrowingCompany"
import Team from "./Team"
import BuildSomething from "./BuildSomething"
import WorkWithUs from "./WorkWithUs"

export default {
  name: "HomeMain",

  components: {
    WorkWithUs,
    BuildSomething,
    Team,
    AGrowingCompany,
    WorkingIsAPleasure,
    HeroWithCards
  },

  inject: ['baseUrl'],

  data: () => ({
  })
};
</script>
