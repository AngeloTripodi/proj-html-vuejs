<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    data() {
        return {
            textOnButton: 'Get a Callback'
        };
    },
    methods: {

    },
    components: {
        ButtonComponent,
    }

}
</script>

<template>

    <section class="my_container">
        <div class="contactCard d-flex align-items-center justify-content-between">

            <div class="contactElement d-flex">
                <div class="myImg">
                    <img src="../assets/images/marketing-consultant-expert.jpg" alt="Richard Madsen Photo">
                </div>
                <div class="contactInfo text-start">
                    <h4>Sandy Reiff</h4>
                    <p class="subText">Marketing Consultant Expert</p>
                </div>

            </div>
            <div class="contactTitle">
                <h3>Drive Leads and Sales with Avada</h3>
            </div>
            <div class="contactButton">
                <button> <font-awesome-icon icon="fa-solid fa-phone" class=" me-2" /> (555) 802-1234
                </button>
            </div>
        </div>


    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.contactCard {
    background-color: white;
    color: black;
    border-radius: 10px;
    text-align: center;
    padding: 1rem;
    box-shadow: 0px 20px 40px rgba(121, 121, 121, 0.278);
    margin-bottom: 10rem;

    .subText {
        color: $text-grey;
        font-size: .9rem;
    }

    .contactTitle h3 {
        padding-right: 8rem;
    }

    .myImg img {
        border-radius: 50%;
        width: 40%;
    }

    button {
        background-color: $lite-orange;
        color: $main-orange;
        border: none;
        border-radius: 10px;
        padding: 1rem 2.5rem;
        margin-right: 3rem;
        font-weight: bold;
    }
}
</style>