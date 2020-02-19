<template>
    <div class="chart-component">
        <span> {{ field.label }} </span>
        <chartjs-line
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="data"
        :labels="labels"
      />
    </div>
</template>

<script>

export default {
    name: "chart-component",

    data: () => ({
      bgColor: "#000000",
      beginZero: true,
      borderColor: "#81894e",
      data: [],
      labels: []
    }),

    props: [
        "field"
    ],

    created() {
      this.data = this.field.valueHistory
      this.labels = _.map(this.data, d => '')
    }, 

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.chart-component {

}
</style>