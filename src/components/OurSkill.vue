<script>
import SingleStrenght from './SingleStrenght.vue'
import SingleSkill from './SingleSkill.vue'


export default {
    data() {
        return {
            strengthsList: [
                {
                    title: 'We Build Relationships',
                    subtitle: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.'
                },
                {
                    title: 'Proprietary Processes',
                    subtitle: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.'
                },
            ],
            skillsList: [
                {
                    img: 'img-col1',
                    title: 'Accountability',
                    subtitle: 'Curabitur ac leo nunc vestibulum'
                },
                {
                    img: 'img-col2',
                    title: 'Transparency',
                    subtitle: 'Curabitur ac leo nunc vestibulum'
                },
                {
                    img: 'img-col3',
                    title: 'Investment',
                    subtitle: 'Curabitur ac leo nunc vestibulum'
                },

            ]
        }
    },
    methods: {
    },
    components: {
        SingleStrenght,
        SingleSkill,
    }

}
</script>

<template>
    <section class="ourSkill d-flex">
        <div class=" strenghtCol flex-column">
            <SingleStrenght v-for="strenght in strengthsList" :singleStrenght="strenght" />
        </div>
        <div class=" flex-column">
            <SingleSkill v-for="skill in skillsList" :skillElement="skill" />
        </div>


    </section>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.ourSkill {

    margin-top: 6rem;
    margin-bottom: 5rem;

    .strenghtCol {
        flex-basis: 60%;
    }
}
</style>