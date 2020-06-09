import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



class TaskService {
  async getAll(userEmail) {
    return await dbContext.Tasks.find({})
  }
  getById(id) {
    throw new Error("Method not implemented.")
  }
  create(body) {
    throw new Error("Method not implemented.")
  }
  edit(id, email, body) {
    throw new Error("Method not implemented.")
  }
  delete(id, email) {
    throw new Error("Method not implemented.")
  }
  find(arg0) {
    throw new Error("Method not implemented.")
  }


}

export const taskService = new TaskService()
