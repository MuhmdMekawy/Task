<template>
  <div class="footer">
    <div class="container">
      <div class="image">
        <img src="../assets/images/logo.png" alt="image" loading="lazy">
      </div>
      <div class="footer_column">
        <h3 class="title">{{$t('footer.about')}}</h3>
        <ul>
          <li><a href="#">{{$t('footer.about_gooseflight')}}</a></li>
          <li><a href="#">{{$t('footer.how_it_works')}}</a></li>
          <li><a href="#">{{$t('footer.blog')}}</a></li>
          <li><a href="#">{{$t('footer.forum')}}</a></li>
        </ul>
      </div>
      <div class="footer_column">
        <h3 class="title">{{$t('footer.support')}}</h3>
        <ul>
          <li><a href="#">{{$t('footer.help_center')}}</a></li>
          <li><a href="#">{{$t('footer.contact_us')}}</a></li>
          <li><a href="#">{{$t('footer.privacy_policy')}}</a></li>
          <li><a href="#">{{$t('footer.terms_of_service')}}</a></li>
          <li><a href="#">{{$t('footer.trust_and_safety')}}</a></li>
          <li><a href="#">{{$t('footer.accessibility')}}</a></li>
        </ul>
      </div>
      <div class="footer_column">
        <h3 class="title">{{$t('footer.get_app')}}</h3>
        <ul>
          <li><a href="#">{{$t('footer.tripma_android')}}</a></li>
          <li><a href="#">{{$t('footer.tripma_ios')}}</a></li>
          <li><a href="#">{{$t('footer.mobile_site')}}</a></li>
          <li class="store">
            <a href="#">
              <div class="image">
                <img src="../assets/images/app_store.png" alt="App Store" loading="lazy">
              </div>
            </a>
          </li>
          <li class="store">
            <a href="#">
              <div class="image">
                <img src="../assets/images/play_store.png" alt="Play Store" loading="lazy">
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import "../assets/scss/mixins";
  @import "../assets/scss/variables";
  .footer{
    background: #fff;
    padding-block: 60px;
    .container{
      @include displayGrid();
      align-items: flex-start;
      .image{
        max-width: 180px;
        img{
          object-fit: contain;
        }
      }
      .footer_column{
        h3.title{
          color: #6E7491;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        ul{
          @include displayFlex($direction : column , $align : flex-start , $gap : 20px);
          li{
            position: relative;
            transition: 1s;
            &.store{
              &::after,
              &::before{
                display: none;
              }
            }
            a{
              display: block;
              .image{
                width: 150px;
                &:first-of-type{
                  margin-bottom: -16px;
                }
              }
            }
            &::after{
              content: '';
              position: absolute;
              inset-inline-start: 0;
              bottom: 0;
              width: 0;
              height: 1px ;
              background: $mainColor;
              transition: 1s;
            }
            &::before{
              content: '';
              position: absolute;
              inset-inline-end: 0;
              top: 0;
              width: 0;
              height: 1px ;
              background: $mainColor;
              transition: 1s;
            }
            &:hover{
              color: $mainColor;
              &::after,
              &::before{
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>