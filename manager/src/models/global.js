export default {
    namespace:"global",

    state:{
        locale:'zh'
    },

    reducers:{
        changeLocale(state,{payload}){
            return { ...state, locale:payload.e }
        }
    }
}
