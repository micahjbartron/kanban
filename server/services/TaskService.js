import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



class TaskService {
  async getAll(userEmail) {
    return await dbContext.Tasks.find({ creatorEmail: userEmail }).populate("creator", "name Picture")
  }
  async getById(id, userEmail) {
    let data = await dbContext.Tasks.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("invalid ID or you don not own this board")
    }
    return data
  }
  async create(rawData) {
    let data = await dbContext.Tasks.create(rawData)
    return data
  }
  async edit(update) {
    let data = await dbContext.Tasks.findOneAndUpdate({ _id: update.id, creatorEmail: update.userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not won this list")
    }
    return data
  }
  async delete(id, userEmail) {
    let data = await dbContext.Tasks.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data)
      throw new BadRequest("Invalid ID or you do not own this list")
  }
  async findByListId(Id) {
    let task = await dbContext.Tasks.find({ listId: Id })
    return task
  }


}

export const taskService = new TaskService()
