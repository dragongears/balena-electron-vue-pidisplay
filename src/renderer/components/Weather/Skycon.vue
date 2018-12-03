<template>
  <img :src=skycon alt="" :width=width :height=height>
</template>

<script>
import wiDaySunny from '@/assets/weather/wi-day-sunny.svg'
import wiNightClear from '@/assets/weather/wi-night-clear.svg'
import wiPartlyCloudyDay from '@/assets/weather/wi-day-cloudy.svg'
import wiPartlyCloudyNight from '@/assets/weather/wi-night-cloudy.svg'
import wiCloudy from '@/assets/weather/wi-cloudy.svg'
import wiRain from '@/assets/weather/wi-rain.svg'
import wiSnow from '@/assets/weather/wi-snow.svg'
import wiSleet from '@/assets/weather/wi-sleet.svg'
import wiWindy from '@/assets/weather/wi-windy.svg'
import wiFog from '@/assets/weather/wi-fog.svg'
import wiHail from '@/assets/weather/wi-hail.svg'
import wiThunderstorm from '@/assets/weather/wi-thunderstorm.svg'
import wiTornado from '@/assets/weather/wi-tornado.svg'
import wiNA from '@/assets/weather/wi-na.svg'

const conditions = {
  'clear-day': wiDaySunny,
  'clear-night': wiNightClear,
  'partly-cloudy-day': wiPartlyCloudyDay,
  'partly-cloudy-night': wiPartlyCloudyNight,
  'cloudy': wiCloudy,
  'rain': wiRain,
  'snow': wiSnow,
  'sleet': wiSleet,
  'wind': wiWindy,
  'fog': wiFog,
  'hail': wiHail,
  'thunderstorm': wiThunderstorm,
  'tornado': wiTornado,
  'na': wiNA
}

export default {
  props: {
    width: {
      type: [String, Number],
      default: 64
    },
    height: {
      type: [String, Number],
      default: 64
    },
    condition: {
      type: String,
      default: wiDaySunny
    }
  },
  data: function () {
    return {
      skycon: null
    }
  },
  methods: {
    create () {
    },
    destroy () {
    },
    setCondition (value) {
      this.skycon = conditions[value]
      if (this.skycon === undefined) {
        this.skycon = wiNA
      }
    }
  },
  watch: {
    condition (value) {
      this.setCondition(value)
    }
  },
  created () {
    // this.create()
  },
  mounted () {
    this.$nextTick(function () {
      this.create()
      this.setCondition(this.condition)
    })
  },
  beforeDestroy () {
    this.destroy()
  }
}
</script>
