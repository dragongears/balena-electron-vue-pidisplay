<template>
  <main>
    <section class="left-side">
      <date-and-time class="dat"></date-and-time>
      <weather
          :update-interval="3600"
          :api-key="darkSkyApiKey"
          latitude="26.194221"
          longitude="-80.1447177"
          @updated="showUpdateDateTime"
      >
      </weather>
      <div class="last-updated">
        <div v-if="lastUpdated">
          Last updated: {{lastUpdated}}
        </div>
      </div>
    </section>
    <section class="right-side">
      <img class="cooper" src="~@/assets/cooper.jpg" alt="cooper">
    </section>
  </main>
</template>

<script>
  import DateAndTime from './DateAndTime'
  import Weather from './Weather/Weather'

  export default {
    name: 'landing-page',
    components: {
      Weather,
      DateAndTime
    },
    data () {
      return {
        darkSkyApiKey: process.env.DARKSKY,
        lastUpdated: null
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      showUpdateDateTime (now) {
        this.lastUpdated = new Date(now).toString()
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import "../assets/css/_variables.scss";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;

    > section {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    > .left-side {
      margin-left: 16px;
      width: 316px;

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

      .cooper {
        margin-top: 20px;
        height: auto;
        width: 440px;
      }
    }
  }
</style>
