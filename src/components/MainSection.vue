<template>
  <div class="main_section">
    <div class="container">
      <h1>{{$t('mainSection.header1')}}<br>
        {{$t('mainSection.header2')}}
      </h1>
      <BookForm/>
    </div>
  </div>
</template>

<script setup>
import BookForm from './BookForm.vue';


</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';
  .main_section{
    background-image: url(../assets/images/map.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-block: 100px 40px;
    margin-bottom: 30px;
    h1{
      margin-bottom: clamp(20px , 4vw , 60px);
      text-align: center;
      font-size: clamp(28px , 4vw , 56px);
      font-weight: 700;
      line-height: 1.6;
      font-family: $secFontFamily;
      background: linear-gradient(93.37deg, #183867 28.05%, #EAA121 44.33%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>