<script>
import { store } from '../store';

export default {
    props: {
        awardElement: {
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

    <div class="awardContainer">
        <div class="iconBox">
            <img :src="store.getImgPathPng(awardElement.img)" :alt="awardElement.img" class=" w-50">
        </div>
        <div class="textSection">
            <p>
                {{ awardElement.title }}
            </p>
            <p>
                {{ awardElement.where }}
            </p>
        </div>


    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.textSection {

    margin-left: 1rem;

    p {
        font-size: 1.2rem;
        color: rgb(62, 62, 62);
    }

}
</style>