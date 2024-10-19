<template>
  <div :style="$i18n.locale === 'en' ? 'direction:ltr;' : 'direction:rtl'">
    <div>
      <Navbar />
      <MainSection />
      <Destinations />
      <Footer />
    </div>
  </div>
</template>

<script setup>
  import Destinations from './components/Destinations.vue';
  import MainSection from './components/MainSection.vue';
  import Footer from './layouts/Footer.vue';
  import Navbar from './layouts/Navbar.vue';

</script>

<style lang="scss" scoped>

</style>