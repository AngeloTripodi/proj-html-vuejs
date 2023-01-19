import { reactive } from 'vue';

export const store = reactive({
    getImgPath: function (path) {
        return new URL(`./assets/images/${path}.jpg`, import.meta.url).href;
    },
    getImgPathPng: function (path) {
        return new URL(`./assets/images/${path}.png`, import.meta.url).href;
    },
    caseStudiesList: [
        {
            img: 'case-studies-1',
            title: 'How Spaces attracted five million visitors by improving the content',
            focus: '200%',
            focusInfo: 'Higher revenue from digital',
        },
        {
            img: 'case-studies-4',
            title: 'Creativity helped Hemisferio to increase their brand reach vertically',
            focus: '10x',
            focusInfo: 'Sales increase with the same ad spend',
        },
        {
            img: 'case-studies-5',
            title: 'How DigitalBox used AI-powered data insight to boost sales',
            focus: '3-year',
            focusInfo: 'Partnership with Avada Consultant',
        },
    ]
});
