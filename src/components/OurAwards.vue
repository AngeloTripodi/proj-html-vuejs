<script>
import SingleAward from './SingleAward.vue';


export default {
    props: {
        singleStrenght: {
            type: Object,
        }
    },
    data() {
        return {
            awardsList: [
                {
                    img: "award-a",
                    title: "Winner Seo Master MAGT",
                    where: "Smart Start Award 2017"
                },
                {
                    img: "award-b",
                    title: "Top Social Media Agencies",
                    where: "Next Partner 2018"
                },
                {
                    img: "award-c",
                    title: "10 Fstest Growing Abstract",
                    where: "Solution Providers 2019"
                },
                {
                    img: "award-d",
                    title: "National Excellence Agencie",
                    where: "Award Winner 2020"
                },
            ]
        };
    },
    methods: {},
    components: { SingleAward }
}
</script>

<template>

    <section class="awardsSection text-center">
        <div>
            <h2>
                Awards
            </h2>
        </div>
        <div class="d-flex justify-content-between">
            <SingleAward v-for="award in awardsList" :awardElement="award" />
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h2 {
    margin-bottom: 3rem;
    font-weight: 600;
}
</style>