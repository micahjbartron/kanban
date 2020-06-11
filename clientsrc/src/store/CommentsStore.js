import _api from "./AxiosService"


export const CommentsStore = {
  actions: {
    async getCommentsByTaskId({ commit, dispatch }, id) {
      try {
        let res = await _api.get('tasks/' + id + '/comments')
        commit("setComments", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    addComment({ commit, dispatch }, listData) {
      _api.post('comments', listData)
        .then(serverList => {
          dispatch('getCommentByTaskId')
        })
    },
    async editComment({ commit, dispatch }, editComment) {
      try {
        let res = await _api.put('comments/' + editComment.commentId, editComment);
        //what would we need to dispatch here?
        dispatch('getCommentsByTaskId', editComment.commentId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteList({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('comments/' + id)
        dispatch('getCommentsByTaskId')
      } catch (error) {
        console.error(error)
      }
    }
  },

}

