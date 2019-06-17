<template>
  <div class="forecast-daily">
    <template v-for="(day, index) in forecast.data">
      <div v-if="index > 0" class="forecast-day" :key="index">
        <div>{{ dow[(Math.floor(day.time / 86400) + 4) % 7] }}</div>
        <div><weather-icon :condition=day.icon width="20" height="20" :color="iconColor"></weather-icon></div>
        <div>{{Math.floor(day.temperatureHigh)}}</div>
        <div>{{Math.floor(day.temperatureLow)}}</div>
      </div>
    </template>
<!--    <div class="forecast-day" v-for="(day, index) in forecast.data" :key="index">-->
<!--      <template v-if="index > 0">-->
<!--        <div>{{ dow[(Math.floor(day.time / 86400) + 4) % 7] }}</div>-->
<!--        <div><weather-icon :condition=day.icon width="20" height="20" :color="iconColor"></weather-icon></div>-->
<!--        <div>{{Math.floor(day.temperatureHigh)}}</div>-->
<!--        <div>{{Math.floor(day.temperatureLow)}}</div>-->
<!--      </template>-->
<!--    </div>-->
  </div>
</template>

<script>
  import WeatherIcon from './WeatherIcon'

  export default {
    name: 'WeatherForecast',
    components: {
      weatherIcon: WeatherIcon
    },
    props: {
      forecast: {
        type: Object,
        required: true
      },
      iconColor: {
        type: String,
        default: '#000000'
      }
    },
    data () {
      return {
        dow: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      }
    },
  }
</script>

<style lang="scss">
  .forecast-daily {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .forecast-day {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
