<script>
import BrandClients from './components/BrandClients.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import PopupCall from './components/PopupCall.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import OrganisationsComponent from './components/OrganisationsComponent.vue';
import ReviewComponent from './components/ReviewComponent.vue';

export default {
  data() {
    return {

    };
  },
  methods: {

  },
  components: { HeaderComponent, JumboComponent, ServicesComponent, BrandClients, PopupCall, OrganisationsComponent, ReviewComponent }
}



</script>

<template>
  <HeaderComponent />
  <main>
    <JumboComponent />
    <ServicesComponent />
    <BrandClients />
    <PopupCall />
    <OrganisationsComponent />
    <ReviewComponent />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
