<template>
  <div class="container">
    <div class="row">
      <line-chart class="col-md-12 mb-4 mb-md-5"
                  :datasets="allFieldsDataset()"
                  :labels="numOfIterations">
      </line-chart>
      <line-chart class="col-md-4" v-for="(field, index) in fields" 
                  :key="index"
                  :label="field.label"
                  :data="field.valueHistory"
                  :labels="numOfIterations"
                  borderColor="#4095BF">
      </line-chart>
    </div>
  </div>
</template>

<script>

import LineChart from '~/components/LineChart';

export default {

  created() {
  },

  mounted() {
  },

  methods: {
    allFieldsDataset() {
      return _.map(this.fields, (f,i) => {
        return {
            label: f.label,
            data: f.valueHistory,
            backgroundColor: this.chartColors[i],
            borderColor: this.chartColors[i],
            fill: false,
            labels: this.numOfIterations
        }
      })
    }
  },

  computed: {
    fields() {
      return this.$store.getters["app/getState"]("fields")
    },

    numOfIterations() {
      return [...Array(this.$store.getters["app/getState"]("numOfIterations")).keys()]
    },

    chartColors() {
      return this.$store.getters["app/getState"]("chartColors")
    }
  },

  components: {
    LineChart
  }

}
</script>

<style>
</style>
