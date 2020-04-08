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
        >
          Protect.Earth
        </router-link>

        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onclick="toggleNavbar('example-collapse-navbar')"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
        id="example-collapse-navbar"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <!-- Is used to be links over here -->
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li>
            <t-dropdown
              text="I am a..."
              size="sm"
              :button-props="{
                baseClass: `border block rounded inline-flex items-center justify-center`
              }"
            >
              <template v-slot:button-content>
                <span>I am a...</span>
              </template>

              <ul>
                <li v-for="tag in tags" :key="tag.id">
                  <router-link
                    :to="{
                      name: 'TagShow',
                      params: { tagSlug: tag.id }
                    }"
                    href="#"
                    class="block no-underline px-4 py-2 hover:bg-pink-600 hover:text-white"
                  >
                    {{ tag.tagName }}
                  </router-link>
                </li>
              </ul>
            </t-dropdown>
          </li>
          <li class="flex items-center">
            <router-link
              :to="{ name: 'About' }"
              class=" text-gray-200 border-2 active:bg-gray-800 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow-alt-circle-down"></i>
              About
            </router-link>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/_protectearth"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/protect-earth"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      tags: [
        {
          id: 'commute',
          tagName: 'Commuter'
        },
        {
          id: 'business',
          tagName: 'Business Owner'
        },
        {
          id: 'home-owner',
          tagName: 'Home Owner'
        },
        {
          id: 'land-owner',
          tagName: 'Land Owner'
        },
        {
          id: 'nomad',
          tagName: 'Nomad'
        },
        {
          id: 'developers',
          tagName: 'Programmer'
        }
      ]
    }
  }
}
</script>

<style></style>
