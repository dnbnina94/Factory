<template>
    <div class="line-chart">
        <span v-if="label">
          <b>{{ label }}:</b>
        </span>
        <chartjs-line
        :bordercolor="borderColor"
        :data="data"
        :datasets="datasets"
        :labels="labels"
        :datalabel="label"
      />
    </div>
</template>

<script>

export default {
    name: "line-chart",

    data: () => ({
    }),

    props: [
        "label",
        "data",
        "datasets",
        "labels",
        "borderColor"
    ],

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.line-chart {

}
</style>