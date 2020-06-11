import _api from "./AxiosService"

export const TasksStore = {

  actions: {
    async getTasksByListId({ commit, dispatch }, id) {
      try {
        let res = await _api.get('lists/' + id + '/tasks')
        commit("setTasks", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    addTask({ commit, dispatch }, taskData) {
      _api.post('tasks', taskData)
        .then(serverTask => {
          dispatch('getTaskByListId')
        })
    },
    async editTask({ commit, dispatch }, editTask) {
      try {
        let res = await _api.put('tasks/' + editTask.taskId, editTask)
        dispatch('getTasksByListId')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteTask({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('tasks/' + id)
        dispatch('getTasksByListId')
      } catch (error) {
        console.error(error)
      }
    }
  }

}