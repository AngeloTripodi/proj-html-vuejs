<script>
import BrandClients from './components/BrandClients.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import PopupCall from './components/PopupCall.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import OrganisationsComponent from './components/OrganisationsComponent.vue';

export default {
  data() {
    return {

    };
  },
  methods: {

  },
  components: { HeaderComponent, JumboComponent, ServicesComponent, BrandClients, PopupCall, OrganisationsComponent, }
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
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
