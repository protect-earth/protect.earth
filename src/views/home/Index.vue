<template>
  <div class="text-gray-800 antialiased">
    <navigation />

    <main>
      <hero-with-cards />

      <display-categories />

      <working-is-a-pleasure />

      <a-growing-company />

      <team />

      <build-something />

      <work-with-us></work-with-us>
    </main>

    <page-footer />
  </div>
</template>

<script>
import HeroWithCards from './HeroWithCards'
import WorkingIsAPleasure from './WorkingIsAPleasure'
import AGrowingCompany from './AGrowingCompany'
import Team from './Team'
import BuildSomething from './BuildSomething'
import WorkWithUs from './WorkWithUs'
import DisplayCategories from './DisplayCategories'

export default {
  name: 'HomeIndex',

  metaInfo: {
    title: 'Welcome'
  },

  components: {
    DisplayCategories,
    WorkWithUs,
    BuildSomething,
    Team,
    AGrowingCompany,
    WorkingIsAPleasure,
    HeroWithCards,
    Navigation: () => import('./../../components/Navigation'),
    PageFooter: () => import('./../../components/Footer')
  }
}
</script>
