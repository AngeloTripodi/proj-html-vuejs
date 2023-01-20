<script>
import ButtonComponent from './ButtonComponent.vue'
import SingleResource from './SingleResource.vue'

export default {
    data() {
        return {

            textOnButton: "Explore All Resources",
            resourcesList: [
                {
                    img: 'blog-posts-6',
                    title: 'Marketing Tips And Tricks For Your Website',
                },
                {
                    img: 'blog-posts-5',
                    title: 'How to Write Stunning Blog Post Titles',
                },
                {
                    img: 'blog-posts-4',
                    title: 'Techniques to Reduce Facebook Ads Spend',
                },
            ]
        }
    },
    methods: {
    },

    components: {
        ButtonComponent,
        SingleResource,

    }


}
</script>

<template>
    <section class="resources">

        <div class="my_container text-center">
            <div class="resourcesWrapper d-flex align-items-end">
                <div class="sectionInfo">
                    <h1>Marketing Resources: Insider Advice on How to Increase Online Sales</h1>
                </div>
                <div class="buttonSection">
                    <ButtonComponent class="button" :buttonText="textOnButton" />
                </div>
            </div>

            <div class="d-flex">
                <SingleResource v-for="resource in resourcesList" :resourceData="resource" />
            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.resources {
    background: rgb(249, 249, 250);
    background: linear-gradient(45deg, rgba(249, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(244, 244, 246, 1) 100%);
    padding: 10rem 0;
}

.resourcesWrapper {
    margin-bottom: 6rem;



}

.sectionInfo {

    margin-left: 1rem;
}

h1 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    text-align: start;


}

.buttonSection {
    width: 160%;
    text-align: end;
}

.button {
    margin: 3rem 2rem 0 0;
}
</style>