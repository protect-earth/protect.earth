<template>
    <div class="text-gray-800 antialiased">
        <home-navigation />
        <tags-main v-bind:tag-name="tagName" />
        <tags-actions-list v-bind:list="['item1', 'item2', 'item3']" />
        <home-footer />
    </div>
</template>

<script>
export default {
    name: 'TagsIndex',

    metaInfo() {
        return {
            title: `Links tagged with ${this.tagName}`,
        }
    },

    components: {
        HomeNavigation: () => import('../home/Navigation'),
        HomeFooter: () => import('../home/Footer'),
        TagsMain: () => import('./TagsMain'),
        TagsActionsList: () => import('./TagsActionsList'),
    },

    data() {
        return {
            publicPath: process.env.BASE_URL,
            tagName: this.$route.params.tagName,
        }
    },

    created() {},

    methods: {},
}
</script>

<style scoped></style>
