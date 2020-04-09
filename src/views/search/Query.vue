<template>
    <div class="text-gray-800 antialiased">
        <navigation />

        <search-main v-bind:searchTerm="searchTerm" />

        <page-footer />
    </div>
</template>

<script>
export default {
    name: 'SearchQuery',

    metaInfo() {
        return {
            title: `Search results for ${this.searchTerm}`
        }
    },

    components: {
        Navigation: () => import('./../../components/Navigation'),
        PageFooter: () => import('./../../components/Footer'),
        SearchMain: () => import('./SearchMain')
    },

    data: () => ({
        publicPath: process.env.BASE_URL
    }),

    computed: {
        searchTerm: function() { return this.$route.params.searchTerm;}
    }
}
</script>
