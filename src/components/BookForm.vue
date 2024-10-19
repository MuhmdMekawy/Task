<template>
  <form @submit.prevent="">
    <div class="upper">
      <div class="input">
        <input type="radio" name="trip_type" id="one_way" value="one_way" hidden @change="handleTripType('one_way')">
        <label for="one_way" :class="['circle', { active: trip_type === 'one_way' }]">
          <span></span>
        </label>
        <label for="one_way">{{$t('mainSection.one_way')}}</label>
      </div>
      <div class="input">
        <input type="radio" name="trip_type" id="round_trip" value="round_trip" hidden @change="handleTripType('round_trip')">
        <label for="round_trip" :class="['circle', { active: trip_type === 'round_trip' }]">
          <span></span>
        </label>
        <label for="round_trip">{{$t('mainSection.round')}}</label>
      </div>
    </div>
    <hr>
    <div class="lower">
      <div class="inputs">
        <div class="input-wrap">
          <label for="flight_from">
            <div class="image">
              <img src="../assets/images/trip_from.png" alt="image" loading="lazy">
            </div>
            {{$t('mainSection.from')}}
          </label>
          <div class="input">
            <input 
              type="text"
              id="flight_from"
              :placeholder="$t('mainSection.from_trip')"  
            >
          </div>
        </div>
        <div class="input-wrap">
          <label for="flight_to">
            <div class="image">
              <img src="../assets/images/trip_to.png" alt="image" loading="lazy">
            </div>
            {{$t('mainSection.to')}}
          </label>
          <div class="input">
            <input 
              type="text"
              id="flight_to"
              :placeholder="$t('mainSection.to_trip')"  
            >
          </div>
        </div>
        <div class="input-wrap">
          <label for="depart">
            <div class="image">
              <img src="../assets/images/calender.png" alt="image" loading="lazy">
            </div>
            {{$t('mainSection.depart')}}
          </label>
          <div class="input">
            <input 
              type="date"
              id="depart"
              :min="today" 
            >
          </div>
        </div>
        <div class="input-wrap">
          <label for="return">
            <div class="image">
              <img src="../assets/images/calender.png" alt="image" loading="lazy">
            </div>
            {{$t('mainSection.return')}}
          </label>
          <div class="input">
            <input 
              type="date"
              id="return"
              :min="today"
            >
          </div>
        </div>
        <div class="input-wrap">
          <label for="cabin">
            <div class="image">
              <img src="../assets/images/cabin.png" alt="image" loading="lazy">
            </div>
            {{$t('mainSection.cabin')}}
          </label>
          <div class="input">
            <select name="cabin" id="cabin">
              <option value="1 adult, Economy">1 adult, Economy</option>
              <option value="2 adult, Class">2 adult, Class</option>
              <option value="2 adult, Economy">2 adult, Economy</option>
            </select>
          </div>
        </div>
        <button class="main-btn">
          <i class="pi pi-search"></i>
        </button>
      </div>
    </div>
  </form>
</template>



<script setup>
  import { ref } from 'vue';  

  // to handle trip type
  const trip_type = ref();
  const handleTripType = (newTripType) => {
    trip_type.value = newTripType;
  };

  // Set the minimum date to today
  const today = ref(new Date().toISOString().split('T')[0]);
</script>


<style lang="scss" scoped>
  @import "../assets/scss/mixins"; 
  @import "../assets/scss/variables"; 
  form{
    background: #fff;
    border-radius: 20px;
    border: 1px solid #06162D40;
    padding: 30px 16px 24px;
    .upper{
      @include displayFlex($gap : 10px 56px , $wrap : wrap );
      padding-bottom: 24px;
      @media (max-width : 450px){
        justify-content: flex-start;
      }
      .input{
        @include displayFlex($gap : 15px);
        label{
          text-wrap: nowrap;
          font-size: 16px;
          font-weight: 600;
          color: #333333;
          &.circle{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid $mainColor;
            @include displayFlex();
            &.active{
              span{
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: $mainColor;
                display: block;
              }
            }
          }
        }
      }
      +hr{
        border: 1px solid rgb(234 161 33 / 20%);
        margin-bottom: 20px;
      }
    }
    .lower{
      .inputs{
        @include displayFlex();
        .input-wrap{
          flex-grow: 1;
          label{
            @include displayFlex($justify : flex-start ,$gap : 8px);
            font-size: 16px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 10px;
            .image{
              width:20px;
            }
          }
          input:focus{
            border-bottom: 2px solid $mainColor;
          }
        }
        button.main-btn{
          width: 40px;
          height: 40px;
          border-radius: 8px;
          font-size: 14px;
          @media (max-width : 700px){
            flex-grow: 1;
          }
        }
        @media (max-width : 992px){
          flex-wrap: wrap;
        }
      }
    }
  }
</style>