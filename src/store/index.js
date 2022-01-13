import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            ing_value:'cocoa'
        },
        mutations: {
            SET_ING_VALUE(state,value){
                state.ing_value = value
            }
        },
        actions: {
            updateIngValue(context,value){
                context.commit('SET_ING_VALUE',value)
            }
        },
        getters: {
            getIngValue(state){
                return state.ing_value
            }
        }
    }
)
