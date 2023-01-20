<script>

import { store } from '../store';
export default {
    props: {
        send: {
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
            <img :src="store.getImgPath(send.img)" :alt="send.img" class="img-fluid w-90">
            <div class="caseText">
                <h2> {{ send.title }}</h2>
                <hr style="border-top: dashed 1.5px; color: lightgray;" />
                <h1>{{ send.focus }}</h1>
                <h5>{{ send.focusInfo }}</h5>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.caseText {
    padding: 1rem;
    text-align: start;
}

h1 {
    font-size: 55px;
    font-weight: bold;
    padding: 1rem 0 0rem 0;

}

.w-90 {
    width: 90%;
}
</style>