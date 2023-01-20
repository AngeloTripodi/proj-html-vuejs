<script>

export default {
    data() {
        return {
            servicesList: [
                {
                    title: 'Services',
                },
                {
                    title: 'Marketing Plan',
                },
                {
                    title: 'Sales Development',
                },
                {
                    title: 'Digital Marketing',
                },
                {
                    title: 'Pricing',
                },
                {
                    title: 'Case Studies',
                },

            ],
            resourcesList: [
                {
                    title: 'Resources',
                },
                {
                    title: 'Learning Center',
                },
                {
                    title: 'Video Tutorials',
                },
                {
                    title: 'Customers',
                },
                {
                    title: 'Blog',
                },

            ],
            companyList: [
                {
                    title: 'Company',
                },
                {
                    title: 'Who We Are',
                },
                {
                    title: 'Contact Us',
                },
                {
                    title: 'Careers',
                },

            ],
        };
    },
    methods: {

    },

}
</script>

<template>
    <footer>
        <div class="my_container">

            <div class="navSection d-flex justify-content-between">

                <div class="social">

                    <div class="taglineContainer">
                        <h3>Grow Your Online Business Strategically, and Improve Customer Retention.</h3>
                    </div>
                    <div class="socialContainer d-flex">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
                        <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
                        <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
                        <font-awesome-icon icon="fa-brands fa-youtube" class="icon" />
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
                        <font-awesome-icon icon="fa-brands fa-tiktok" class="icon" />
                    </div>
                </div>



                <nav class="serviceNav">
                    <ul>
                        <li v-for="service in servicesList"> {{ service.title }}</li>
                    </ul>
                </nav>

                <nav class="resourcesNav">
                    <ul>
                        <li v-for="resource in resourcesList"> {{ resource.title }}</li>
                    </ul>
                </nav>

                <nav class="companyNav">
                    <ul>
                        <li v-for="company in companyList"> {{ company.title }}</li>
                    </ul>
                </nav>

            </div>

            <div class="creditsSection">

                <ul class="d-flex justify-content-between credits">
                    <li>
                        <p> &#169; 2020 &#8226; Avada Consultant &#8226; Powered by Angelo Tripodi</p>
                    </li>
                    <li class="secondLiCredits">
                        <p> Call Us (555)802-1234</p>
                    </li>
                    <li>
                        <p> &nbsp; </p>
                    </li>
                    <li>
                        <p class="customElement"> Info@yourcompany.com</p>
                    </li>
                </ul>

            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.my_container {

    padding: 8rem 8rem 8rem 0rem;

    .social {
        width: 400px;
    }

    .socialContainer {
        font-size: 1.5rem;

        .icon {
            padding: 0 1rem 1rem 1rem;

            &:first-child {
                padding-left: 0;
            }
        }
    }

    h3 {
        line-height: 2.5rem;
        padding-bottom: 2rem;
        font-weight: 600;
    }

    ul {
        list-style-type: none;
        padding-left: 0px !important;

        .chevron {
            font-size: 12px;
        }
    }

    .navSection {

        margin-bottom: 6rem;

        li {
            padding: .5rem .5rem;
            margin: 0 .5rem;
            font-size: 1.2rem;

            &:first-child {
                font-weight: bold
            }

            &:hover {
                color: $main-orange;
            }
        }

    }

    .secondLiCredits {
        margin-left: -3.5rem;
    }
}
</style>




