const state = () => ({
    numOfFields: 10,
    initialValue: 3,
    numOfIterations: 0,
    fields: [],
    chartColors: [
        "#4095BF",
        "#1C3765",
        "#8938CC",
        "#CC257E",
        "#E93500",
        "#FE7B00",
        "#FCC100",
        "#F9F940",
        "#2B9725",
        "#00552B"
    ],
    windowState: '',
    smallChartSizes: {
        mobile: 1.5,
        tablet: 1.1,
        desktop: 1.5
    },
    bigChartSizes: {
        mobile: 1.2,
        tablet: 2,
        desktop: 2
    }
})

export default state;