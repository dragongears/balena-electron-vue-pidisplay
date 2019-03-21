<template>
  <div class="weather">
    <div class="weather-data" v-if="weather">
      <weather-current :weather="weather" :icon-color="iconColor"></weather-current>
      <weather-forecast :forecast="weather.daily" :icon-color="iconColor"></weather-forecast>
      <div class="weather-summary">
        {{weather.hourly.summary}}
      </div>
    </div>
    <div v-else>
      {{message}}
    </div>
  </div>
</template>

<script>
  import WeatherCurrent from './WeatherCurrent'
  import WeatherForecast from './WeatherForecast'

  export default {
    name: 'weather-panel',
    components: {
      weatherCurrent: WeatherCurrent,
      weatherForecast: WeatherForecast
    },
    props: {
      updateInterval: {
        type: Number,
        default: 3600
      },
      apiKey: {
        type: String,
        required: true
      },
      latitude: {
        type: String,
        required: true
      },
      longitude: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        weather: null,
        message: 'Waiting for weather data',
        iconColor: '#35495e'
      }
    },
    methods: {
      getWeather () {
        this.$http
          .get(`${process.env.NODE_ENV === 'production' && this.$env.IS_ELECTRON  ? '' : 'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?exclude=minutely,alerts,flags`)
          .then((response) => {
            if (response.status === 200) {
              this.weather = response.data
            } else {
              this.weather = null
              this.message = `${response.status}: ${response.statusText}`
              console.dir(response)
            }
            this.$emit('updated', Date.now())
            if (this.updateInterval) {
              setTimeout(this.getWeather, this.updateInterval * 1000)
            }
          })
          .catch((e) => {
            this.weather = null
            this.message = `${e.message} - ${new Date().toString()}`
            if (this.updateInterval) {
              setTimeout(this.getWeather, this.updateInterval * 1000)
            }
          })
      },
    },
    mounted () {
      this.getWeather()
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/_variables.scss";

  .weather {
    margin-top:14px;
    color: $primary-text-color;
    font-weight: bold;

    .weather-summary {
      margin-top: 12px;
    }
  }
</style>
