<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';

export default {
  data() {
    return {

    };
  },
  methods: {

  },
  components: { HeaderComponent, JumboComponent, ServicesComponent }
}



</script>

<template>
  <HeaderComponent />
  <main>
    <JumboComponent />
    <ServicesComponent />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
