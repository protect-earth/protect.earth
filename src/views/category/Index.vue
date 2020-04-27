<template>
    <div class="text-gray-800 antialiased">

        <navigation/>

        <div class="category-intro" v-hidden v-if="cat">
            <div class="wrapper">
                <div class="left">
                    <h1 v-html="cat.title"></h1>
                    <div class="written" v-html="cat.content"></div>
                </div>
                <div class="right">
                    <img :src="cat.image.permalink" alt="">
                </div>
            </div>
        </div>

        <div class="featured-actions" v-hidden v-show="featured">
            <div class="featured-action" v-for="action in featured" :key="action.id">
                a
            </div>
        </div>

        <div class="category-actions" v-hidden v-show="actions">
            <div class="category-action" v-for="action in actions" :key="action.id">
                b
            </div>
        </div>

        <page-footer/>

    </div>
</template>

<script>

import api from './../../services/api.js';

export default {
    name: 'SingleCategoryIndex',

    props: {
        category: {
            type: Object,
            required: true
        }
    },

    components: {
        Navigation: () => import('./../../components/Navigation'),
        //Action: () => import('./../../components/listing/Action'),
        PageFooter: () => import('./../../components/Footer')
    },

    data() {
        return {
            cat: null,
            featured: null,
            actions: null
        };
    },

    mounted() {
        var self = this;

        // Load category information.
        api.showCategoryWithSlug(this.category.slug)
        .then(function(response) {
            self.cat = response;
        });


        // Load all actions for this category.
        api.getActionsWithCategory(this.category.id)
        .then(function(response) {
            // Split actions into featured/regular.
            self.featured = response.data.filter(function(action) {
                return action.featured;
            });
            self.actions = response.data.filter(function(action) {
              return !action.featured;
            });
        });
    },

    methods: {
    }
}
</script>
