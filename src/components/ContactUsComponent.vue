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
        <div class="my_container d-flex justify-content-between align-items-center">
            <div class="infoSection">
                <h1>
                    Let's Make Things Happen
                </h1>
                <h3>
                    Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer
                    consectetur.
                </h3>
                <hr style="border-top: solid 1.5px; color: lightgrey; width: 22%; " />
                <h5>"The team at Avada Marketing Consultant is fabolous. They helped us unlock our potential online and
                    offline. We have experienced year on year growth due to their progressive approach."</h5>
                <h4>
                    George Anderson
                </h4>
                <p>
                    Digitalbox CEO
                </p>
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
    background-color: black;
    color: white;
    padding: 8rem 0;

    .infoSection {
        padding-right: 11rem;

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

        h5 {
            line-height: 2rem;
            font-style: italic;
            padding-top: 2rem;
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

button {
    background-color: $main-white;
    color: $title-black;
    border: none;
    border-radius: 10px;
    padding: 1rem 2.5rem;
    font-weight: bold;
}
</style>