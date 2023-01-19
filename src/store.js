import { reactive } from 'vue';

export const store = reactive({
    getImgPath: function (path) {
        return new URL(`./assets/images/${path}.jpg`, import.meta.url).href;
    },
    getImgPathPng: function (path) {
        return new URL(`./assets/images/${path}.png`, import.meta.url).href;
    },
});
