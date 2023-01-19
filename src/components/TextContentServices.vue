<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    props: [
        'preTitle',
        'iconImg',
        'title',
        'content',
    ],
    data() {
        return {
            textOnButton: "Get a Consultation",
        }
    },
    methods: {

    },
    components: {
        ButtonComponent,
    }

}
</script>

<template>

    <div>
        <div class="textContent">
            <div class="d-flex align-items-center">
                <img :src="iconImg" alt="iconImg">
                <p class=" ps-3"> {{ preTitle }} </p>
            </div>
            <h1>
                {{ title }}
            </h1>
            <h4>
                {{ content }}
            </h4>
            <div>
                <ButtonComponent class="button" :buttonText="textOnButton" />
            </div>
        </div>
    </div>




</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.textContent {


    h1 {
        font-size: 50px;
        font-weight: bold;
        letter-spacing: -1px;
        padding: 1rem 0;

    }

    h4 {
        line-height: 2.5rem;
        padding-bottom: 2rem;
    }

    p {
        font-weight: bold;
        font-size: 1.2rem;
    }

}
</style>