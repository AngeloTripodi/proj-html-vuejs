<script>

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

            ]
        };
    },
    methods: {

    },

}
</script>

<template>
    <header>
        <div class="my_container">
            <div class="logoSection">
                <img src="../assets/images/avada-marketing-logo-2x.png" alt="Avada Marketing Logo">
            </div>
            <nav class="navSection">
                <ul>
                    <li v-for="navElement in navList" :class="(navElement.isActive) ? 'active' : ''">
                        {{ navElement.title }}
                    </li>
                </ul>
            </nav>
            <div class="phoneCta">

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
    padding-top: 1rem;
    padding-bottom: 1rem;


    .logoSection img {
        width: 240px;
    }

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    li {
        padding: 0 .5rem;
        margin: 0 .5rem;
        padding-bottom: .5rem;
    }

    li:hover {
        color: $main-orange;
    }
}
</style>




