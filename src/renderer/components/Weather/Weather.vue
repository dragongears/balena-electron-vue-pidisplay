<template>
  <div class="weather">
    <div class="weather-data" v-if="weather">
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
      <div class="forecast-daily">
        <div class="forecast-day" v-for="(day, index) in weather.daily.data" v-if="index > 0">
          <div>{{ dow[(Math.floor(day.time / 86400) + 4) % 7] }}</div>
          <div><weather-icon :condition=day.icon width="20" height="20" :color="iconColor"></weather-icon></div>
          <div>{{Math.floor(day.temperatureHigh)}}</div>
          <div>{{Math.floor(day.temperatureLow)}}</div>
        </div>
      </div>
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
  import WeatherIcon from './WeatherIcon'

  export default {
    components: {
      weatherIcon: WeatherIcon
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
        ready: true,
        message: 'Waiting for weather data',
        dow: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        iconColor: '#35495e'
      }
    },
    methods: {
      getWeather () {
        if (this.ready) {
          this.ready = false
          this.$http
            .get(`${process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : ''}https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?exclude=minutely,alerts,flags`)
            .then((response) => {
              this.ready = true
              if (response.status === 200) {
                this.weather = response.data
              } else {
                this.weather = null
                this.message = `${response.status}: ${response.statusText}`
                console.dir(response)
              }
              this.$emit('updated', Date.now())
            })
            .catch((e) => {
              this.weather = null
              this.message = e.message
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

<style lang="scss">
  @import "../../assets/css/_variables.scss";

  .weather {
    margin-top:14px;
    color: $primary-text-color;
    font-weight: bold;

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
    .weather-summary {
      margin-top: 12px;
    }
  }
</style>
