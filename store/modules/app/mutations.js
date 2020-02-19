const mutations = {
    SET_STATE: (state, { prop, value }) => {
        state[prop] = value
    },

    TOGGLE_BUTTON: (state, { label, getters }) => {
        let field = getters.getFieldByLabel(label)
        field && (field.changeValue = !field.changeValue)
    },

    ADD_TO_HISTORY: (state, { label, randomNumber, getters }) => {
        let field = getters.getFieldByLabel(label)
        field && field.valueHistory.push(randomNumber)
    }
};

export default mutations