<template>
  <div>
    <div class="items">
      <div class="item">
        <div class="value">{{ dateStr }}</div>
      </div>
      <div class="item">
        <div class="value">{{ timeStr }}</div>
      </div>
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
  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .value {
    color: #35495e;
    font-size: 48px;
    font-weight: bold;
  }
</style>
