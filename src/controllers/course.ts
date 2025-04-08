import { Request, Response } from 'express';
import slugify from 'slugify';
import prisma from '../config/prisma-client';

export const uploadImage = async (req: Request, res: Response) => {

}

export const deleteImage = async (req: Request, res: Response) => {

}

export const create = async (req: Request, res: Response) => {
  try {
    // const alreadyExist = await prisma.course.findUnique({
    //   where: { slug: slugify(req.body.name.toLowerCase())}});

    // if (alreadyExist) return res.status(400).send("Title is taken");
    
    const course = await prisma.course.create({
      data: {
        slug: slugify(req.body.name),
        ...req.body}})

    res.status(201).send(course);
  } catch (error) {
    res.status(500).send({ error: 'Error creating course' });
  }
}