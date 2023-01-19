<script>
import ButtonComponent from './ButtonComponent.vue'
import ContactCard from './ContactCard.vue';
export default {
    data() {
        return {
            textOnButton: "Our Services",
        };
    },
    methods: {

    },
    components: {
        ButtonComponent,
        ContactCard
    }

}
</script>

<template>
    <section class="myJumbo">
        <div class="my_container d-flex justify-content-between">
            <div class="infoSection">
                <h1>
                    Unlock Your Online Growth Potential
                </h1>
                <h3>
                    Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
                </h3>
                <div>
                    <button> Our Services <font-awesome-icon class="arrowIcon ms-2" icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
            <div>
                <ContactCard />
            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.myJumbo {
    background-image: url(../assets/images/marketing-intro.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 66vh;
    color: white;
    padding-top: 8rem;

    .infoSection {
        padding-right: 5rem;

        h1 {
            font-size: 75px;
            font-weight: bold;
            letter-spacing: -3px;
            padding-bottom: 1rem;

        }

        h3 {
            line-height: 2.5rem;
            padding-bottom: 2rem;
        }

    }

}

button {
    background-color: $main-white;
    color: $title-black;
    border: none;
    border-radius: 10px;
    padding: 1rem 2.5rem;
    font-weight: bold;
}

.arrowIcon {

    font-size: 1.1rem;
}
</style>