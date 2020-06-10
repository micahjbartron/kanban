import _api from "./AxiosService"
import router from "../router"




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
        commit("setActiveBoard", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBoard({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('boards/' + id)
        router.push({ name: "home" })
      } catch (error) {
        console.error(error)
      }
    },
    async editBoard({ commit, dispatch }, editBoard) {
      try {
        let res = await _api.put('boards/' + editBoard.boardId, editBoard);
        dispatch('getActiveBoard', editBoard.boardId)
      } catch (error) {
        console.error(error)
      }
    }

  }
} 