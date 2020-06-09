import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class CommentService {
  async getAll(userEmail) {
    return await dbContext.Comments.find({ creatorEmail: userEmail }).populate("creator", "name Picture")
  }
  async edit(id, userEmail, update) {
    let data = await dbContext.Comments.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this Comment")
    }
  }
  async delete(id, userEmail) {
    let data = await dbContext.Comments.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this Comment")
    }
  }

  async create(rawData) {
    let data = await dbContext.Comments.create(rawData)
    return data
  }
  async find(query = {}) {
    let comment = await dbContext.Comments.find(query).populate("tasks")
    return comment
  }

}


export const commentService = new CommentService()