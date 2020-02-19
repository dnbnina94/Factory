const actions = {
    SET_STATE({ commit }, obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                commit('SET_STATE', { prop: key, value: obj[key] })
            }
        }
    },

    TOGGLE_BUTTON({ commit, getters }, label) {
        commit('TOGGLE_BUTTON', { label, getters })
    },

    ADD_TO_HISTORY({ commit, getters }, {label, randomNumber}) {
        commit('ADD_TO_HISTORY', { label, randomNumber, getters })
    }
}

export default actions