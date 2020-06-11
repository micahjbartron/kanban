import _api from "./AxiosService"

export const TasksStore = {

  actions: {
    async getTasksByListId({ commit, dispatch }, listId) {
      try {
        let res = await _api.get('lists/' + listId + '/tasks')
        commit("setTasks", { listId, tasks: res.data })
      } catch (error) {
        console.error(error)
      }
    },
    async addTask({ commit, dispatch }, taskData) {
      try {
        let res = await _api.post('tasks/', taskData)
        commit("addTask", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editTask({ commit, dispatch }, editTask) {
      try {
        let res = await _api.put('tasks/' + editTask.taskId, editTask)
        // dispatch('getTasksByListId')
        // TODO Chat with this when it comes to moving the list
      } catch (error) {
        console.error(error)
      }
    },
    async deleteTask({ commit, dispatch }, id) {
      //update this to be the full task
      try {
        let res = await _api.delete('tasks/' + id)
        commit("removeTask", id)
      } catch (error) {
        console.error(error)
      }
    }
  }

}