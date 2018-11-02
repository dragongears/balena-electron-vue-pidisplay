<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <system-information></system-information>
        <weather
            :update-interval="300"
            api-key="1a3804ecac0cc9e49f0f47e5ea7cdf61"
            title="Weather"
            latitude="26.194221"
            longitude="-80.1447177"
            language="en"
            units="us">
        </weather>
      </div>

      <div class="right-side">
        <img id="cooper" src="~@/assets/cooper.jpg" alt="cooper">
      </div>
    </main>
  </div>
</template>

<script>
  import VueWeatherWidget from 'vue-weather-widget'
  import 'vue-weather-widget/dist/css/vue-weather-widget.css'
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: {
      SystemInformation,
      'weather': VueWeatherWidget
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 16px 16px;
    width: 100vw;
  }

  #cooper {
    height: auto;
    width: 260px;
    margin-left: 30px;
  }

  .fe_alert {
    display: none !important
  }

  .fe_container {
    width: 480px;
    font-weight: 300;
    min-width: auto !important;
    max-width: initial !important;
    color: #333;
    margin: 20px auto;
    height: auto !important;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
