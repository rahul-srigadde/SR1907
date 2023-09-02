import { getRepository } from "typeorm";
import { NextFunction, RequestHandler, Request, Response } from "express";
import { Users } from "../entity/index";

export const fetchAllUsers: RequestHandler = async (req: Request, res: Response) => {
  const userRepository = getRepository(Users);
  const data = await userRepository.find()
  res.status(200).send(handleSuccess(data))
}

export const fetchUser: RequestHandler = async (req: Request, res: Response) => {
  const userRepository = getRepository(Users);
  const data = await userRepository.findOne(req.params.id);
  res.status(200).send(handleSuccess(data))
}

export const saveUser: RequestHandler = async (req: Request, res: Response) => {
  const userRepository = getRepository(Users);
  console.log(req.body)
  const data = await userRepository.save(req.body);
  res.status(200).send(handleSuccess(data))
}

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
  const userRepository = getRepository(Users);
  let userToRemove = await userRepository.findOne(req.params.id);
  if (!userToRemove) {
    return res.status(400).send('User Already deleted');
  }
  await userRepository.remove(userToRemove);
  const data = await userRepository.save(req.body);
  res.status(200).send(handleSuccess(data))
}

const handleSuccess = (payload: any) => {
  return {
    data: payload,
    failureCount: 0,
    status: 'success'
  }
}