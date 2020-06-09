import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { commentService } from '../services/CommentService';

export class CommentsController extends BaseController {

  constructor() {
    super("api/comments")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await commentService.getAll(req.userInfo.email)
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await commentService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
  async edit(req, res, next) {
    try {
      let data = await commentService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      await commentService.delete(req.params.id, req.userInfo.email)
      return res.send("Successufully deleted")
    } catch (error) { next(error) }
  }


}