import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp"
// import * as mutations from "./mutations"
// import * as getters from "./getters"

Vue.use(Vuex)

// export const store = new Vuex.Store({
//     state: {
//         headerText: "Hello World!",
//         todoItems: storage.fetch()
//     },
//     getters,
//     mutations
// }) 

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
}) 