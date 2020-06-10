import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from './AxiosService';
import { BoardsStore } from "./BoardsStore"

Vue.use(Vuex)

//Allows axios to work locally or live


export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard
    },
    setLists(state, lists) {
      state.lists = lists
    }
  },


  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },

  },
  modules: {
    BoardsStore,
  }

})
