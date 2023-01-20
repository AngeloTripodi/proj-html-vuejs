<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    data() {
        return {
            textOnButton: "Why Work With Us",
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

    <div class="testimonialCard d-flex align-items-center">
        <div class="textContent">
            <h1>
                We Boost Our Clients' Bottom Line by Optimizing Their Growth Potential.
            </h1>
            <h4>
                Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.
            </h4>
            <ButtonComponent class="button" :buttonText="textOnButton" />
        </div>
        <div class="imgContent">
            <img class="imageCustom" src="../assets/images/we-boost-our-clients.jpg" alt="'Testimonial'">
        </div>
    </div>












</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.imgContent {
    margin-left: 10rem;

    & img {
        width: 600px;
        border-radius: 10px;
        box-shadow: 0px 20px 40px rgba(121, 121, 121, 0.278);

    }

}

.textContent {

    margin-left: 5rem;
    padding-right: 1rem;

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


}
</style>