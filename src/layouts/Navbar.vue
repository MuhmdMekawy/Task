<template>
  <div class="navbar">
    <div class="container">
      <div class="image">
        <img src="../assets/images/logo.png" alt="image" loading="lazy">
      </div>
      <ul :class="['nav_links' , {'active' : mobileMenu}]">
        <button class="main-btn close_icon" @click="handleMobileMenu">
          <i class="pi pi-times"></i>
        </button>
        <div class="image mobile_logo">
          <img src="../assets/images/logo.png" alt="image" loading="lazy">
        </div>
        <li class="active">
          <a href="#">{{ $t('navbar.home') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('navbar.promo') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('navbar.my_booking') }}</a>
        </li>
      </ul>
      <div class="nav_btns">
        <LanguageSelect />
        <button class="main-btn">
          {{ $t('navbar.sign_in') }}
        </button>
        <button class="main-btn menu-btn" @click="handleMobileMenu">
          <i class="pi pi-align-justify"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import LanguageSelect from '../components/LanguageSelect.vue'


  const mobileMenu = ref(false)
  const handleMobileMenu = () =>{
    mobileMenu.value = !mobileMenu.value
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/mixins";
  @import "../assets/scss/variables";
  $mobileSize : 767px;
  .navbar{
    padding-block: 30px 15px;
    .container{
      @include displayFlex($justify : space-between , $gap : 10px);
      .image{
        max-width: clamp(120px , 2.5vw , 204px);
        &.mobile_logo{
          max-width: 150px;
          display: none;
          @media (max-width : $mobileSize){
            display: block;
          }
          img{
            object-fit: contain;
          }
        }
      }
      ul.nav_links{
        @include displayFlex($gap : clamp(15px , 2.5vw , 48px));
        button.close_icon{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: absolute;
          inset-inline-end: 10px;
          top: 20px;
          display: none;
          @media (max-width : $mobileSize){
            display: flex;
          }
        }
        @media (max-width : $mobileSize) {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 20px;
          position: fixed;
          top: 0;
          height: 100%;
          width: 280px;
          background: #fff;
          transition: 1s;
          inset-inline-start: -280px;
          box-shadow: 0 0 10px #e4e4e4;
          +.main-btn{
            margin-inline-start: auto;
          }
          &.active{
            inset-inline-start: 0;
          }
          .image{
            margin-block-end: 60px;
          }
        }
        li{
          a{
            display: block;
            width: 100%;
            height: 100%;
            font-size: 16px;
            font-weight: 600;
          }
          &.active,
          &:hover{
            color: $mainColor;
          }
        }
      }
      .nav_btns{
        @include displayFlex($gap : 8px);
      }
      .main-btn{
        // max-width: clamp(100px , 2.5vw , 200px);
        width: fit-content;
        border-radius: 5px;
        padding-inline: 8px;
        text-wrap: nowrap;
        &.menu-btn{
          width: fit-content;
          padding: 5px 15px;
          display: none;
          @media (max-width : $mobileSize){
            display: flex;
            align-items: center;
            height: clamp(35px , 2.5vw ,42px);
          }
        }
      }
    }
  }
</style>