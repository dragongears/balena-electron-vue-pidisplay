<template>
  <main id="app">
    <section class="left-side">
      <date-and-time class="dat">
      </date-and-time>
      <weather-panel
        :update-interval="3600"
        :api-key="darkSkyApiKey"
        latitude="26.194221"
        longitude="-80.1447177"
        @updated="showUpdateDateTime"
      >
      </weather-panel>
      <div class="last-updated">
        <div v-if="lastUpdated">
          Last updated: {{lastUpdated.toDateString('en-US', {weekday: 'long'})}} {{lastUpdated.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})}}
        </div>
      </div>
    </section>
    <section class="right-side">
      <vue-instagram :token="instagramToken" :count="1" ref="igimage">
        <template slot="feeds" slot-scope="props">
          <img :src=props.feed.images.standard_resolution.url>
        </template>
        <template slot="error" slot-scope="props">
          <div> {{ props.error.error_message }} </div>
        </template>
      </vue-instagram>
    </section>
  </main>
</template>

<script>
  import DateAndTime from './components/DateAndTime'
  import WeatherPanel from './components/Weather/WeatherPanel'
  import VueInstagram from 'vue-instagram'

  export default {
    name: 'balena-electron-vue-pidisplay',
    components: {
      VueInstagram,
      WeatherPanel,
      DateAndTime
    },
    data () {
      return {
        instagramToken: this.$env.INSTAGRAM,
        darkSkyApiKey: this.$env.DARKSKY,
        lastUpdated: null
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      showUpdateDateTime () {
        this.$refs.igimage.getUserFeed()
        this.lastUpdated = new Date()
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import "/assets/css/_variables.scss";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    max-width: 800px;
    max-height: 480px;
    margin: auto;

    > section {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    > .left-side {
      margin-left: 16px;
      margin-right: 8px;
      width: 312px;

      .dat {
        margin-top: 2px;
      }

      .last-updated {
        flex-grow: 1;
        margin-bottom: 3px;
        display: flex;
        flex-direction: column-reverse;
        font-size: .75em;
        color: $primary-text-color;
      }
    }

    > .right-side {
      margin-left: 8px;
      margin-right: 16px;

      img {
        margin-top: 20px;
        max-width: 440px;
        height: auto;
        max-height: 440px;
      }
    }
  }
</style>
