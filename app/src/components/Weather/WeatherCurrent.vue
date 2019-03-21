<template>
  <div class="current-weather">
    <div>
      {{weather.currently.summary}}
    </div>
    <div class="temps-today">
      <div>
        <weather-icon :condition=weather.currently.icon width="40" height="40" :color="iconColor"></weather-icon>
        <span class="current-temp">{{Math.floor(weather.currently.temperature)}}°</span>
      </div>
      <div class="hi-lo-today">
        <div>Hi {{Math.floor(weather.daily.data[0].temperatureHigh)}}°</div>
        <div>Lo {{Math.floor(weather.daily.data[0].temperatureLow)}}°</div>
      </div>
    </div>
  </div>
</template>

<script>
  import WeatherIcon from './WeatherIcon'

  export default {
    name: 'WeatherCurrent',
    components: {
      weatherIcon: WeatherIcon
    },
    props: {
      weather: {
        type: Object,
        required: true
      },
      iconColor: {
        type: String,
        default: '#000000'
      }
    },
  }
</script>

<style lang="scss">
  .current-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28px;

    .temps-today {
      display: flex;
      flex-direction: row;
      align-items: center;

      .current-temp {
        font-size: 2em;
      }

      .hi-lo-today {
        margin-left: 22px;
        font-size: 0.75em;
      }
    }
  }
</style>
