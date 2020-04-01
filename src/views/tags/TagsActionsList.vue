<template>
    <section class="relative pb-20 bg-gray-300 -mt-24">
        Actions list
        <ul id="example-1">
            <li v-for="item in list" :key="item.message">
                {{ item }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'TagsActionsList',

    props: ['list'],

    data() {},
}
</script>

<style scoped></style>
