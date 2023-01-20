<script>

import { store } from '../store';
export default {
    props: {
        resourceData: {
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

    <section class="my_container text-center">
        <div class="caseCard">
            <img :src="store.getImgPath(resourceData.img)" :alt="resourceData.img" class="img-fluid w-90">
            <div class="resourceText">
                <h2> {{ resourceData.title }}</h2>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.resourceText {
    padding: 1rem;
    text-align: start;
}

h2 {
    line-height: 2.5rem;
    padding-top: .75rem;

}

.w-90 {
    width: 90%;
}
</style>