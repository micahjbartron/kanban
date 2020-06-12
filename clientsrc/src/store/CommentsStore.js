import _api from "./AxiosService"


export const CommentsStore = {
  actions: {
    async getCommentsByTaskId({ commit, dispatch }, taskId) {
      try {
        let res = await _api.get('tasks/' + taskId + '/comments')
        commit("setComments", { taskId, comments: res.data })
      } catch (error) {
        console.error(error)
      }
    },
    async addComment({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('comments/', payload)
        commit("addComment", res.data)
        // TODO lets chat when here
      } catch (error) {
        console.error(error)
      }
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

