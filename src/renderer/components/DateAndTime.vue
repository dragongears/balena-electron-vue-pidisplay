<template>
  <section class="items">
    <div class="time">{{ timeStr }}</div>
    <div class="date">{{ dateStr }}</div>
  </section>
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
      font-size: 64px;
    }

    .date {
      font-size: 28px;
    }
  }
</style>
