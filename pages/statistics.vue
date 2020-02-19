<template>
  <div class="container">
    <div class="row">
      <chart-component class="col-md-4" v-for="(field, index) in fields" :field="field" :key="index">
      </chart-component>
    </div>
  </div>
</template>

<script>

import ChartComponent from '~/components/ChartComponent';

export default {

  created() {
  },

  mounted() {
  },

  computed: {
    fields() {
      return this.$store.getters["app/getState"]("fields")
    }
  },

  components: {
    ChartComponent
  }

}
</script>

<style>
</style>
