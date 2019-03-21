<template>
  <section class="items">
    <div class="time">{{ timeStr }}</div>
    <div class="date">{{ dateStr }}</div>
  </section>
</template>

<script>
  export default {
    name: 'date-and-time',
    data () {
      return {
        date: new Date()
      }
    },
    computed: {
      dateStr: function () {
        return this.date.toDateString('en-US', {weekday: 'long'})
      },
      timeStr: function () {
        return this.date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
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

<style lang="scss">
  @import "../assets/css/_variables.scss";

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6px;
    color: $primary-text-color;
    font-weight: bold;

    .time {
      font-size: 52px;
    }

    .date {
      font-size: 28px;
    }
  }
</style>
