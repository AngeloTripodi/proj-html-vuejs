<script>
import { store } from '../store';

export default {
    props: {
        skillElement: {
            type: Object,
        }
    },

    data() {
        return {
            store,
        }
    },
    methods: {

    },

}
</script>

<template>

    <div class="skillContainer d-flex align-items-center">
        <div class="iconBox">
            <img :src="store.getImgPathPng(skillElement.img)" :alt="skillElement.img">
        </div>
        <div class="textSection">
            <h5>
                {{ skillElement.title }}
            </h5>
            <p>
                {{ skillElement.subtitle }}
            </p>
        </div>


    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.skillContainer {
    padding-bottom: 3rem;

    .textSection {

        margin-left: 1rem;

        h5 {
            font-weight: bold;
            font-size: 1.4rem;
            padding-bottom: .5rem;
        }

        p {
            font-size: 1.2rem;
            color: rgb(62, 62, 62);
        }

    }

}
</style>