<script>
export default {

    props: {
        buttonText: {
            type: String,
            required: true,
        },
        buttonLink: {
            type: String,
            required: false,
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
    <button> {{ buttonText }} </button>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

button {
    background-color: $main-orange;
    border: none;
    border-radius: 10px;
    color: $main-white;
    padding: 1rem 2.5rem;
    font-weight: bold;

    &:hover {
        background-color: #f76210;
    }
}
</style>