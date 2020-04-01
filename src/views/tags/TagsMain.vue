<template>
    <main>
        <div
            class="relative pt-16 pb-32 flex content-center items-center justify-center"
            style="min-height: 75vh;"
        >
            <div
                class="absolute top-0 w-full h-full bg-center bg-cover"
                :style="`background-image: url(${publicPath}hero-bg.jpg);`"
            >
                <span
                    id="blackOverlay"
                    class="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div
                        class="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center"
                    >
                        <div class="flex flex-col pr-12">
                            <h1 class="text-white font-semibold text-5xl">
                                Awesome actions tagged with {{ tagName }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'TagsMain',

    props: ['tagName'],

    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
}
</script>

<style scoped></style>
