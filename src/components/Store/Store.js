import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { searchStore } from './SearchStore';
import { recipeStore } from './RecipeStore';

//since we want to use the counter out of this file so we need to export this as a constant named store.
export const store = new Vuex.Store({

    modules: {
        searchStore,
        recipeStore,
    }
    //note these is a predefined keword called state , getters
    //state: {
    //    displayGrid: false
    //}
    //},
    //getters: {
    //    //doubleCounter is a fn where we get the state as an argument which is automatically passed by vuex.
    //    doubleCounter: state => {
    //        //in the body of this function we can do whatever we want to do with this state.
    //        return state.counter * 2;
    //    },
    //    stringCounter: state => {
    //        return state.counter + ' Clicks';
    //    }
    //}

});