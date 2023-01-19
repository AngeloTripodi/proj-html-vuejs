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

    <div class="contactCard">
        <div class="myImg">
            <img src="../assets/images/marketing-consultant-expert.jpg" alt="Richard Madsen Photo">
        </div>
        <div class="contactInfo py-3">
            <h4>Rachard Madsen</h4>
            <p class="subText">Marketing Consultant Expert</p>
            <div class="phoneCta d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-phone" class="customOrange" />
                <p class=" ps-2">(555) 802-1234</p>
            </div>
        </div>
        <div class="formInfo d-flex flex-column">
            <input type="text" placeholder="Your Name*">
            <input type="email" name="mail" id="mail" placeholder="Your Email*">
            <input type="number" name="phone" id="phone" placeholder="Your Phone Number*">
            <ButtonComponent class="button" :buttonText="textOnButton" />
            <p class="infoSubmit"> By submitting my data I agree to be contacted </p>
        </div>




    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.contactCard {
    background-color: white;
    color: black;
    border-radius: 10px;
    text-align: center;
    padding: 2rem;
    width: 475px;
    box-shadow: 0px 20px 40px rgba(121, 121, 121, 0.278);
    margin-right: 8rem;

    .subText {
        padding: .6rem 0 1.3rem 0;
        color: $text-grey;
    }

    .phoneCta {
        color: $main-orange;
        font-weight: bold;
        font-size: 1.1rem;
        padding-bottom: .75rem;
    }
}

.formInfo input {

    border-radius: 5px;
    border: 1px solid $text-grey;
    padding: .75rem;
    margin: .5rem 0;
    color: $title-black ;

}

.infoSubmit {
    padding-top: .75rem;
    color: $text-grey;
    font-size: .9rem;
}

.button {
    margin-top: .5rem;
}

.myImg img {
    border-radius: 50%;
    width: 20%;
    height: 20%;
}
</style>