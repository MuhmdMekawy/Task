<template>
  <div class="destination">
    <div class="container">
      <div class="head">
        <h3>{{$t('destination.title')}}</h3>
        <p class="text">
          {{$t('destination.text')}}
        </p>
      </div>

      <div v-if="$i18n.locale === 'en'" class="destination_items">
        <div class="item" v-for="destination in en_destinations" :key="destination.id">
          <div class=image>
            <img :src="destination.image" alt="img" loading="lazy">
          </div>
          <div class="location">
            <i class="pi pi-map-marker"></i>
            <h5>{{ destination.location }}</h5>
          </div>
          <h4>{{ destination.title }}</h4>
          <h6>{{ destination.duration }}</h6>
          <p class="price">{{ destination.price }}</p>
        </div>
      </div>
      <div v-else class="destination_items">
        <div class="item" v-for="destination in ar_destinations" :key="destination.id">
          <div class=image>
            <img :src="destination.image" alt="img" loading="lazy">
            
          </div>
          <div class="location">
            <i class="pi pi-map-marker"></i>
            <h5>{{ destination.location }}</h5>
          </div>
          <h4>{{ destination.title }}</h4>
          <h6>{{ destination.duration }}</h6>
          <p class="price">{{ destination.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const en_destinations = ref([
    {
      id: 1,
      image: '../src/assets/images/1.jfif',
      location: 'Manggarai Barat',
      title: 'Flores Road Trip 3D2N',
      duration: '3 Days',
      price: '$375'
    },
    {
      id: 2,
      image: '../src/assets/images/2.jfif',
      location: 'Manggarai Barat',
      title: 'Flores Road Trip 3D2N',
      duration: '3 Days',
      price: '$375'
    },
    {
      id: 3,
      image: '../src/assets/images/3.jfif',
      location: 'Manggarai Barat',
      title: 'Flores Road Trip 3D2N',
      duration: '3 Days',
      price: '$375'
    },
    {
      id: 4,
      image: '../src/assets/images/4.jfif',
      location: 'Manggarai Barat',
      title: 'Flores Road Trip 3D2N',
      duration: '3 Days',
      price: '$375'
    }
  ]);

  const ar_destinations = ref([
      {
        id: 1,
        image: "../src/assets/images/1.jfif",
        location: "مانغراي بارات",
        title: "رحلة طريق فلوريس 3 أيام و2 ليلة",
        duration: "3 أيام",
        price: "$375"
      },
      {
        id: 2,
        image: "../src/assets/images/2.jfif",
        location: "مانغراي بارات",
        title: "رحلة طريق فلوريس 3 أيام و2 ليلة",
        duration: "3 أيام",
        price: "$375"
      },
      {
        id: 3,
        image: "../src/assets/images/3.jfif",
        location: "مانغراي بارات",
        title: "رحلة طريق فلوريس 3 أيام و2 ليلة",
        duration: "3 أيام",
        price: "$375"
      },
      {
        id: 4,
        image: "../src/assets/images/4.jfif",
        location: "مانغراي بارات",
        title: "رحلة طريق فلوريس 3 أيام و2 ليلة",
        duration: "3 أيام",
        price: "$375"
      }
    ])
</script>


<style lang="scss" scoped>
  @import "../assets/scss/mixins";
  @import "../assets/scss/variables";
  .destination{
    padding-bottom: 50px;
    .head{
      margin-bottom: 40px;
      h3{
        font-size: clamp(20px , 4vw , 36px);
        font-weight: 700;
        color: #183867;
      }
      p.text{
        font-size: clamp(14px , 4vw , 18px);
        font-weight: 400;
        color: #183867;
      }
    }
    .destination_items{
      @include displayGrid();
      .item{
        border: 1px solid #FFFFFF;
        border-radius: 16px;
        padding: 16px;
        transition: 0.6s;
        cursor: pointer;
        &:hover{
          background: #EAA12112;
        }
        .image{
          box-shadow: 0px 6px 16px 0px #00000005;
          border-radius: 8px 0 8px 0;
          overflow: hidden;
          margin-bottom: 16px;
          height: 180px;
        }
        .location{
          @include displayFlex($justify : flex-start , $gap : 3px);
          margin-bottom: 8px;
          i.pi{
            color: $mainColor;
          }
          h5{
            font-size: clamp(10px , 4vw , 14px);
            font-weight: 400;
            color: #8F8F8F;
          }
        }
        h4{
          font-size: 16px;
          font-weight: 700;
          color: #183867;
        }
        h6{
          font-size: 14px;
          font-weight: 400;
          color: #636363;
          margin-bottom: 16px;
        }
        p.price{
          font-size: 14px;
          font-weight: 700;
          color: $mainColor;
        }
      }
    }
  }
</style>
