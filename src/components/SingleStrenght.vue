<script>

export default {
    props: {
        singleStrenght: {
            type: Object,
        }
    },

    data() {
        return {

        }
    },
    methods: {

    },

}
</script>

<template>

    <div class="strenghtContainer">
        <h2>
            {{ singleStrenght.title }}
        </h2>
        <p>
            {{ singleStrenght.subtitle }}
        </p>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.strenghtContainer {
    margin-left: 5rem;
    padding-bottom: 5rem;
    width: 55%;

    h2 {
        padding-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        color: rgb(62, 62, 62);
    }

}
</style>