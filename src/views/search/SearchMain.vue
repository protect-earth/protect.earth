<template>
    <main class="profile-page">
        <section class="relative block" style="height: 500px;">
            <div
                class="absolute top-0 w-full h-full bg-center bg-cover"
                :style="`background-image: url(${publicPath}hero-bg.jpg);`"
            >
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div
                class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style="height: 70px; transform: translateZ(0px);"
            >
                <svg
                    class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
                </svg>
            </div>
        </section>
        <section class="relative py-16 bg-gray-300">
            <search-bar></search-bar>
        </section>
        <section class="relative py-16 bg-gray-100">
            <h2 class="text-lg pb-10 text-center" v-show="hits.length">Search Results</h2>
            <div class="grid grid-cols-3">
                <div v-for="hit in hits" :key="hit.objectID">
                    <div>{{hit.title}}</div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import algoliasearch from 'algoliasearch'

const appId = 'VUP0593VAY',
    key = 'e8be8c8a25143890d82abf2108de8f93',
    indexName = 'actions'

const client = algoliasearch(appId, key)
const index = client.initIndex(indexName)

export default {
    name: 'SearchMain',

    props: ['searchTerm'],

    components: {
        SearchBar: () => import('../../components/search/SearchBar')
    },

    data() {
        return {
            publicPath: process.env.BASE_URL,
            hits: []
        }
    },

    beforeMount() {
        // Perform search if a search term has been passed in
        if (this.searchTerm) {
            this.performSearch()
        }
    },

    watch: {
        searchTerm: function() {
            this.performSearch()
        }
    },

    methods: {
        performSearch() {
            index.search(this.searchTerm).then(result => {
                this.hits = result.hits
            })
        }
    }
}
</script>
