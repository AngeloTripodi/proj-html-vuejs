<script>
import MainImageServices from './MainImageServices.vue';
import TextContentServices from './TextContentServices.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,

            preTitleOne: 'Business Growth',
            iconImgOne: 'blueLogo',
            titleOne: 'Increase Brand Awareness',
            contentOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convellis gravida et at massa.',
            mainImageOne: 'image-one',

            preTitleTwo: 'Investors In People',
            iconImgTwo: 'yellowLogo',
            titleTwo: 'In-House Sales Training',
            contentTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convellis gravida et at massa.',
            mainImageTwo: 'image-two',

            preTitleThree: 'Social Media Analysis',
            iconImgThree: 'greenLogo',
            titleThree: 'Harness Your Social Proof',
            contentThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convellis gravida et at massa.',
            mainImageThree: 'image-three',
        };
    },
    methods: {
    },
    components: {
        TextContentServices,
        MainImageServices
    }

}
</script>

<template>
    <section class="servicesSection my_container">
        <div class="service d-flex align-items-center">
            <MainImageServices :mainImage="store.getImgPath(mainImageOne)" class="imgOne" />
            <TextContentServices :iconImg="store.getImgPath(iconImgOne)" :preTitle="preTitleOne" :title="titleOne"
                :content="contentOne" class="contentOne" />
        </div>
        <div class="service d-flex align-items-center">
            <TextContentServices :iconImg="store.getImgPath(iconImgTwo)" :preTitle="preTitleTwo" :title="titleTwo"
                :content="contentTwo" class="contentTwo" />
            <MainImageServices :mainImage="store.getImgPath(mainImageTwo)" class="imgTwo" />
        </div>
        <div class="service d-flex align-items-center">
            <MainImageServices :mainImage="store.getImgPath(mainImageThree)" class="imgThree" />
            <TextContentServices :iconImg="store.getImgPath(iconImgThree)" :preTitle="preTitleThree" :title="titleThree"
                :content="contentThree" class="contentThree" />
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.service {
    margin: 10rem 0;

    .contentTwo {
        padding-right: 15rem;
        margin-left: 3rem;
    }

    .imgOne,
    .imgThree {
        padding-right: 11rem;
    }

    .contentOne,
    .contentThree {
        padding-right: 9rem;
    }
}
</style>