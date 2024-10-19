<template>
  <div class="input">
    <ul class="languages-select">
      <i class="pi pi-angle-down"></i>
      <!-- Show only the selected language -->
      <li @click="toggleDropdown">
        <div class="image">
          <img :src="selectedLanguage.image" alt="image" loading="lazy">
        </div>
        <!-- <span>{{ selectedLanguage.name }}</span> -->
      </li>

      <!-- Show other languages when the dropdown is open -->
      <ul v-if="isDropdownOpen" class="dropdown">
        <li v-for="language in languages" :key="language.name" @click="selectLanguage(language)">
          <div class="image">
            <img :src="language.image" alt="image" loading="lazy">
            {{ language.image }}
          </div>
          <span>{{ language.name }}</span>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import useHandleLang from '../utils/handleLang';

  // import handle language from its specified function 
  const {
    handleLang
  } = useHandleLang()
  // Array of languages with their corresponding images and names
  const languages = [
    { name: 'العربية', value : 'ar' ,image: '../src/assets/images/ar.png' },
    { name: 'الإنجليزية', value : 'en' , image: '../src/assets/images/en.png' },
  ];

  // Set the default selected language
  const selectedLanguage = ref((languages.filter(item => item.value === window.sessionStorage.getItem('app_lang')))[0] || languages[0]);
  // console.log(selectedLanguage.value)
  // Toggle dropdown visibility
  const isDropdownOpen = ref(false);
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  // Set selected language and close dropdown
  const selectLanguage = (language) => {
    handleLang(language.value)
    selectedLanguage.value = language;
    isDropdownOpen.value = false;
  };
</script>

<style lang="scss" scoped>
  @import '/src/assets/scss/mixins';

  .input{
    width: fit-content;
    padding-inline-end:5px;
    margin-inline-start: auto;
    .languages-select {
      position: relative;
      width: fit-content;
      i.pi{
        position: absolute;
        inset-inline-end: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
      }
      li {
        @include displayFlex($gap: 5px, $direction: row, $justify: flex-start);
        padding: 3px 5px;
        height: 30px;
        overflow: hidden;
        cursor: pointer;
        padding-inline-end: 20px;
        .image {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          overflow: hidden;
        }
        span {
          font-size: clamp(14px, 2.5vw, 16px);
        }
      }
  
      .dropdown {
        position: absolute;
        top: 110%;
        left: 0;
        background-color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: fit-content;
        z-index: 10;
        padding: 5px;
        li {
          padding: 3px 5px;
          height: 30px;
          overflow: hidden;
          &:not(:last-of-type){
            margin-bottom: 5px;
          }
          &:hover {
            background-color: #f0f0f0;
          }
        }
      }
    }
  }
</style>