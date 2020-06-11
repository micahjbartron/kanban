import _api from "./AxiosService"


export const ListsStore = {

  actions: {
    async getListsByBoardId({ commit, dispatch }, id) {
      try {
        let res = await _api.get('boards/' + id + '/lists')
        commit("setLists", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addList({ commit, dispatch }, listData) {
      try {
        let res = await _api.post('lists/', listData)
        commit("addList", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteList({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('lists/' + id)
        commit('removeList', id)
      } catch (error) {
        console.error(error)
      }
    }
  },
}