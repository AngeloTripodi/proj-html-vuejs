<script>

export default {
    props: [
        'mainImage',
    ],
    data() {
        return {

        }
    },
    methods: {

    },

}
</script>

<template>

    <div>
        <div class="imgContent">
            <div class="d-flex align-items-center">
                <img :src="mainImage" :alt="mainImage">
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>