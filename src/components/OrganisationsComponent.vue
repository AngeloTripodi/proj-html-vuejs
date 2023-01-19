<script>
import ButtonComponent from './ButtonComponent.vue'
import CaseStudies from './CaseStudies.vue'
import { store } from '../store';
export default {
    data() {
        return {
            store,
            textOnButton: "Read More Case Studies",
            caseStudiesList: [
                {
                    img: 'case-studies-1',
                    title: 'How Spaces attracted five million visitors by improving the content',
                    focus: '200%',
                    focusInfo: 'Higher revenue from digital',
                },
                {
                    img: 'case-studies-4',
                    title: 'Creativity helped Hemisferio to increase their brand reach vertically',
                    focus: '10x',
                    focusInfo: 'Sales increase with the same ad spend',
                },
                {
                    img: 'case-studies-6',
                    title: 'How DigitalBox used AI-powered data insight to boost sales',
                    focus: '3-year',
                    focusInfo: 'Partnership with Avada Consultant',
                },
            ]
        }
    },
    methods: {
        log(element) {
            console.log(element)
        }
    },
    components: {
        ButtonComponent,
        CaseStudies,
    }


}
</script>

<template>

    <section class="clients my_container text-center">
        <div class="sectionInfo">
            <h1>Trusted by Leading Organisations</h1>
        </div>


        <div class="d-flex">
            <CaseStudies v-for="singleCase in caseStudiesList" :send="singleCase" />
        </div>






        <ButtonComponent class="button" :buttonText="textOnButton" />

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


h1 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    padding: 1rem 0 5rem 0;

}

.button {
    margin: 3rem 0 8rem 0;
}
</style>