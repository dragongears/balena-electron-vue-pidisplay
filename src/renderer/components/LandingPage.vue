<template>
  <main>
    <section class="left-side">
      <date-and-time class="dat"></date-and-time>
      <weather
          :update-interval="300"
          :api-key="darkSkyApiKey"
          latitude="26.194221"
          longitude="-80.1447177"
      >
      </weather>
    </section>
    <section class="right-side">
      <div style="font-size: 32px;">>>{{test}}</div>
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
        darkSkyApiKey: process.env.DARKSKY
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

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
      margin-left:16px;
      margin-right:8px;

      .dat {
        margin-top: 2px;
      }
    }

    > .right-side {
      margin-left:8px;
      margin-right:16px;

      .cooper {
        height: auto;
        width: 440px;
      }
    }
  }
</style>
