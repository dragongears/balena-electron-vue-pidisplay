<template>
  <main>
    <div class="left-side">
      <date-and-time class="dat"></date-and-time>
      <weather
          :update-interval="300"
          api-key="1a3804ecac0cc9e49f0f47e5ea7cdf61"
          latitude="26.194221"
          longitude="-80.1447177"
      >
      </weather>
    </div>
    <div class="right-side">
      <img class="cooper" src="~@/assets/cooper.jpg" alt="cooper">
    </div>
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

  .dat {
    margin-top: 2px;
  }

  .cooper {
    height: auto;
    width: 440px;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
  }

  .left-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left:16px;
    margin-right:8px;
  }

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:8px;
    margin-right:16px;
  }
</style>
