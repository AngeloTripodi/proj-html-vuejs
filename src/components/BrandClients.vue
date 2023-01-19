<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            brandsList: ['abstract', 'cglobal', 'next', 'hemisferio', 'spaces', 'digitalbox'],
        }
    },
    methods: {

    },


}
</script>

<template>

    <section class="clients my_container text-center">
        <div class="sectionInfo">
            <h1> Some Brands We Work With</h1>
            <h4>Quisque aliquet, libero consequat elementum convallis.</h4>
        </div>
        <div class="brands">
            <ul class="d-flex justify-content-center">
                <li v-for="brandImg in brandsList">
                    <img :src="store.getImgPathPng(brandImg)" alt="brandImg">
                </li>
            </ul>

        </div>



    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.clients {
    margin-bottom: 10rem;
}

h1 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    padding: 1rem 0 .5rem 0;

}

h4 {
    line-height: 2.5rem;
    padding-bottom: 2rem;
    font-size: 1.4rem;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

li img {
    width: 80%;
}
</style>