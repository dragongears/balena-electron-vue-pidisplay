<template>
  <div class="weather">
    <div v-if="!weather.currently">
      {{message}}
    </div>
    <div class="current-weather" v-if="weather.currently">
      <div>
        {{weather.currently.summary}}
      </div>
      <div>
        <skycon :condition=weather.currently.icon width="40" height="40" color="#35495e"></skycon>
        <span class="current-temp">{{Math.floor(weather.currently.temperature)}}°</span>
      </div>
    </div>
    <div class="forecast" v-if="weather.currently">
      <div class="forecast-day" v-for="(day, index) in weather.daily.data" v-if="index > 0">
        <div>{{ dow[(Math.floor(day.time / 86400) + 4) % 7] }}</div>
        <div><skycon :condition=day.icon width="20" height="20" color="#35495e"></skycon></div>
        <div>{{Math.floor(day.temperatureHigh)}}</div>
        <div>{{Math.floor(day.temperatureLow)}}</div>
      </div>
    </div>
    <div class="weather-summary" v-if="weather.hourly">
      {{weather.hourly.summary}}
    </div>
  </div>
</template>

<script>
  import VueSkycons from './Skycon'

  export default {
    components: {
      skycon: VueSkycons
    },
    props: {
      updateInterval: {
        type: Number,
        default: 3
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
        weather: {},
        ready: true,
        message: 'Waiting for weather data',
        dow: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      }
    },
    computed: {
    },
    methods: {
      getWeather () {
        if (this.ready) {
          this.ready = false
          this.$http
            .get(`${process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : ''}https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?exclude=minutely,alerts,flags`)
            .then((response) => {
              this.ready = true
              this.weather = response.data
            })
            .catch((e) => {
              // this.message = e.message
            })
        }
      },
      intervalFunc () {
        this.getWeather()
        if (this.updateInterval) {
          setTimeout(this.intervalFunc, this.updateInterval * 1000)
        }
      }
    },
    created () {
    },
    mounted () {
      this.intervalFunc()
    }
  }
</script>

<style scoped>
  .weather {
    margin-top:14px;
    color: #35495e;
    font-weight: bold;
  }

  .current-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28px;
  }

  .current-temp {
    font-size: 2em;
  }

  .forecast {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

  }

  .forecast-day {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weather-summary {
    margin-top: 8px;
  }
</style>
