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
  }

}