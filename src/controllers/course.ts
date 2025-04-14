import { Request, Response } from 'express';
import slugify from 'slugify';
import prisma from '../config/prisma-client';
import { HttpResponse } from '../protocols/http';

export const uploadImage = async (req: Request, res: Response) => {

}

export const deleteImage = async (req: Request, res: Response) => {

}
export const create = async (req: Request): Promise<HttpResponse> => {
  try {
    const alreadyExist = await prisma
    .course
    .findFirst({ where: { slug: slugify(req.body.name.toLowerCase()) }});

    if (alreadyExist) return {
      status: 400,
      body: "Title is taken",
    } 
    const course = await prisma.course.create({
      data: {
        slug: slugify(req.body.name),
        ...req.body}})
      return  {
        status: 201,
        body: course,
      }
  } catch (error) {
    return {
      status: 500,
      body: `${error} :Error creating course`
    }
  }
}

export const read = async (req: Request): Promise<HttpResponse> => {
  try {
    const course = await prisma.course.findFirst({
      where: { slug: req.params.slug },
      include: {
        modules: true
      }
    });
    return {
      status: 200,
      body: course
    }
  } catch (error) {
    return {
      status: 500,
      body: "Error fetching course"
    }
  }
}
export const courses = async (req: Request): Promise<HttpResponse> => {
  try {
    const courses = await prisma.course.findMany();
    return {
      status: 200,
      body: courses
    }
  } catch (error) {
    return {
      status: 500,
      body: "Error fetching course"
    }
  }
}
