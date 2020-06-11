import _api from "./AxiosService"

export const TasksStore = {

  actions: {
    async getTasksByListId({ commit, dispatch }, id) {
      try {
        let res = await _api.get('lists/' + id + '/tasks')
        commit("setTasks", res.data)
        // TODO chat about this when it breaks
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
    async deleteTask({ commit, dispatch }, task) {
      //update this to be the full task
      try {
        let res = await _api.delete('tasks/' + task.id)
        commit("deleteTask", task)
      } catch (error) {
        console.error(error)
      }
    }
  }

}