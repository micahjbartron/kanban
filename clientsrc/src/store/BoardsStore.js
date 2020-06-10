import _api from "./AxiosService"
import router from "../router"
import api from "./AxiosService"



export const BoardsStore = {


  actions: {


    getBoards({ commit, dispatch }) {
      _api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },

    addBoard({ commit, dispatch }, boardData) {
      _api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    async getActiveBoard({ commit, dispatch }, id) {
      try {
        let res = await _api.get('boards/' + id)
        commit("setAcitveBoard", res.data)
      } catch (error) {
        console.error(error)
      }
    }

  }
} 