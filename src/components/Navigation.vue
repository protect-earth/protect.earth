<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          :to="{ name: 'Home' }"
          >Protect.Earth</router-link
        >

        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onclick="toggleNavbar('example-collapse-navbar')"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none hidden"
        id="example-collapse-navbar"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
          <li>
            <search-bar
              v-show="this.$route.path.toLowerCase().indexOf('search') === -1"
            ></search-bar>
          </li>
          <li>
            <NavigationLink label="About" :to="{ name: 'About' }" />
          </li>
          <!-- <li>
            <NavigationLink label="Guides" :to="{ name: 'Guides' }" />
          </li>
          <li>
            <NavigationLink label="Forum" :to="{ name: 'Forum' }" />
          </li>
          <li>
            <NavigationLink label="Contribute" :to="{ name: 'Contribute' }" />
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavigationLink from './NavigationLink';

export default {
  name: 'Navigation',
  components: {
    NavigationLink,
    SearchBar: () => import('./search/SearchBar'),
  },
};
</script>

<style></style>
