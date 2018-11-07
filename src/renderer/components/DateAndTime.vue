<template>
  <div class="items">
    <div class="item">
      <div class="value">{{ timeStr }}</div>
    </div>
    <div class="item">
      <div class="small-value">{{ dateStr }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: new Date()
      }
    },
    computed: {
      dateStr: function () {
        return this.date.toDateString()
      },
      timeStr: function () {
        return this.date.toLocaleTimeString()
      }
    },
    methods: {
      intervalFunc () {
        this.date = new Date()

        setTimeout(this.intervalFunc, 1000)
      }
    },
    mounted () {
      this.intervalFunc()
    }
  }
</script>

<style scoped>
  .items {}

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .value {
    color: #35495e;
    font-size: 64px;
    font-weight: bold;
  }
  .item .small-value {
    color: #35495e;
    font-size: 28px;
    font-weight: bold;
  }
</style>
