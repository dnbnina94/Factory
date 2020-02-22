import app from './modules/app'

export const actions = {
    nuxtServerInit({state, dispatch, commit}) {

        let fields = []

        _.times(state.app.numOfFields, i => {
            let newField = {}

            newField.label = String.fromCharCode('A'.charCodeAt() + i)
            newField.valueHistory = [state.app.initialValue]
            newField.changeValue = true

            fields.push(newField)
        })

        dispatch("app/SET_STATE", {
            fields,
            numOfIterations: 1
        })

    }
}

export const modules = {
    app
}