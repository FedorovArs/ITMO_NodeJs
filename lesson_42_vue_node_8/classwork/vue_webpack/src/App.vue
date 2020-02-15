<template>
    <div>
        <p>{{ greeting }} World!</p>
        <img src="./assets/car.jpg">
        <search></search>
    </div>
</template>


<script>
    import SearchForm from './components/SearchForm.vue'

    export default {
        data: function () {
            return {
                greeting: 'Hello'
            }
        },
        components:{
            'search': SearchForm
        }
    }
</script>


<style>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>