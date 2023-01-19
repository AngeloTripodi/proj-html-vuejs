<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    data() {
        return {
            navList: [
                {
                    title: 'Home',
                    isActive: true,
                    chevron: true,
                },
                {
                    title: 'Services',
                    isActive: false,
                    chevron: true,
                },
                {
                    title: 'Why Us',
                    isActive: false,
                    chevron: false,
                },
                {
                    title: 'Case Studies',
                    isActive: false,
                    chevron: false,
                },
                {
                    title: 'About',
                    isActive: false,
                    chevron: false,
                },
                {
                    title: 'Blog',
                    isActive: false,
                    chevron: false,
                },

            ],

            textOnButton: "Free Quote",
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
    <header>
        <div class="my_container">
            <div class="logoSection">
                <img src="../assets/images/avada-marketing-logo-2x.png" alt="Avada Marketing Logo">
            </div>
            <nav class="navSection">
                <ul class=" d-flex align-items-center">
                    <li v-for="navElement in navList" :class="(navElement.isActive) ? 'active' : ''">
                        {{ navElement.title }} <font-awesome-icon class=" ps-2 chevron"
                            :class="(navElement.chevron != true) ? 'd-none' : ''" icon="fa-solid fa-chevron-down" />
                    </li>
                </ul>
            </nav>
            <div class="phoneCta d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-phone" class="customOrange" />
                <p class=" ps-3">(555) 802-1234</p>
            </div>
            <div>
                <ButtonComponent class="button" :buttonText="textOnButton" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.active {
    color: $main-orange;
    border-bottom: 2px solid $main-orange;
}



.my_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;


    .logoSection img {
        width: 240px;
    }

    ul {
        list-style-type: none;
        padding-left: 0px !important;

        .chevron {
            font-size: 12px;
        }

        li {
            padding: .5rem .5rem;
            margin: 0 .5rem;

            &:hover {
                color: $main-orange;
            }
        }


    }

    .phoneCta {
        font-weight: bold;

        .customOrange {
            color: $main-orange;

        }
    }



    .button {
        background-color: $lite-orange;
        color: $main-orange;
    }
}
</style>




