<script>
import WorkWithUsComponent from './WorkWithUsComponent.vue';



export default {
    data() {
        return {
        }
    },
    methods: {
    },

    components: {
        WorkWithUsComponent
    }


}
</script>

<template>
    <section class="whyUsSection">

        <div class="my_container">
            <WorkWithUsComponent />
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.whyUsSection {
    background: rgb(249, 249, 250);
    background: linear-gradient(45deg, rgba(249, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(244, 244, 246, 1) 100%);
    padding: 6rem 0;
}
</style>