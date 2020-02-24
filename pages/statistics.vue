<template>
  <div class="container">
    <div class="row">
      <line-chart class="col-md-12 mb-4 mb-md-5"
                  :datasets="fieldDatasets"
                  label="All fields:"
                  :bigChart="true"
                  :labels="labels">
      </line-chart>
      <line-chart class="col-md-4" v-for="(fieldDataset, index) in fieldDatasets" 
                  :key="index"
                  :datasets="[fieldDataset]"
                  :label="fieldDataset.label | formatLabel"
                  :labels="labels">
      </line-chart>
    </div>
  </div>
</template>

<script>

import LineChart from '~/components/LineChart';
import BasePage from '~/mixins/BasePage';

export default {

  created() {
  },

  mounted() {
  },

  filters: {
    formatLabel(label) {
      return 'Field ' + label + ":"
    }
  },

  methods: {
  },

  mixins: [
    BasePage
  ],

  computed: {
    fields() {
      return this.$store.getters["app/getState"]("fields")
    },

    numOfIterations() {
      return this.$store.getters["app/getState"]("numOfIterations")
    },

    fieldDatasets() {
      return _.map(this.fields, (f, i) => {
        return {
          label: f.label,
          data: f.valueHistory,
          backgroundColor: this.chartColors[i % this.chartColors.length],
          borderColor: this.chartColors[i % this.chartColors.length],
          fill: false,
          lineTension: 0
        }
      })
    },

    labels() {
      return [...Array(this.numOfIterations).keys()]
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
