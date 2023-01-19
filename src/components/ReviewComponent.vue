<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    },

}
</script>

<template>

    <section class="my_container">
        <div class="testimonialCard d-flex align-items-center">
            <div class="imgContent">
                <img class="imageCustom" src="../assets/images/large-testimonial.jpg" alt="'Testimonial'">
            </div>
            <div class="textContent">
                <h2>
                    "The team at Avada Marketing Consultant is fabolous. They helped us unlock our potential online and
                    offline. We have experienced year on year growth due to their progessive approach."
                </h2>
                <h4>
                    Kate Schadler
                </h4>
                <p>
                    Marketing Consultant - Abstract
                </p>
            </div>
        </div>

    </section>











</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.my_container {
    margin-bottom: 7rem;
    padding: 0 5rem;

    .imgContent {
        margin-right: 10rem;

        & img {
            width: 600px;
            border-radius: 10px;
            box-shadow: 0px 20px 40px rgba(121, 121, 121, 0.278);

        }

    }

    .textContent {



        h1 {
            font-size: 50px;
            font-weight: bold;
            letter-spacing: -1px;
            padding: 1rem 0;

        }

        h4 {
            font-size: 1.3rem;
            font-weight: bold;
            padding: 2rem 0 0 0;
        }

        p {
            font-size: .9rem;
            color: $text-grey;
        }

    }
}
</style>