<template>
    <div>
        <v-menu></v-menu>
        <router-view></router-view>
    </div>
</template>
<script>
    import menu from "./views/menu.vue";
    export default {
        components: {
            'v-menu': menu
        },
        data() {
            return {
                
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>