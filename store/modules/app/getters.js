const getters = {
    getState: state => prop => {
        return state[prop]
    },

    getFieldByLabel: state => label => {
        return _.find(state.fields, f => f.label == label)
    }
}       

export default getters