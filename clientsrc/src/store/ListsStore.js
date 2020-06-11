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
    addList({ commit, dispatch }, listData) {
      _api.post('lists', listData)
        .then(serverList => {
          dispatch('getListByBoardId')
        })
    },
    async editList({ commit, dispatch }, editList) {
      try {
        let res = await _api.put('lists/' + editList.listId, editList);
        //what would we need to dispatch here?
        dispatch('getListsByBoardId', editList.listId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteList({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('lists/' + id)
        dispatch('getListsByBoardId')
      } catch (error) {
        console.error(error)
      }
    }
  },
}