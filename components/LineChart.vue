<template>
    <div class="line-chart">
        <span v-if="label">
          <b>{{ label }}</b>
        </span>
        <chartjs-line ref="chartline"
        :datasets="datasets"
        :labels="labels"
        :option="options"
      />
    </div>
</template>

<script>

export default {
    name: "line-chart",

    data: () => ({
      options: {
        responsive: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Iterations'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Values'
                }
            }],
        }
      }
    }),

    props: [
        "datasets",
        "labels",
        "label",
        "bigChart"
    ],

    watch: {
        windowState() {
            this.calculateAspectRatio()
        }
    },

    mounted() {
        this.calculateAspectRatio()
    },

    methods: {
        calculateAspectRatio() {
            this.options.aspectRatio = this.chartSizes[this.windowState]
            this.$refs.chartline.renderChart()
        }
    },

    computed: {
        windowState() {
            return this.$store.getters["app/getState"]("windowState")
        },

        chartSizes() {
            return this.$store.getters["app/getState"](this.bigChart ? 
                   "bigChartSizes" : "smallChartSizes")
        }
    }
}
</script>

<style lang="scss" scoped>
.line-chart {
}
</style>