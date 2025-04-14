import { Request } from 'express';
import slugify from 'slugify';
import prisma from '../config/prisma-client';

export const addLesson = async (req: Request) => {
  try {
    const { moduleId } = req.params;
    const {title, content, video, lessonTypeId } = req.body;

    const lesson = await prisma.lesson.create({
      data: {
        title,
        content,
        slug: slugify(title),
        moduleId: JSON.parse(moduleId),
        lessonTypeId
      }
    });

    return {
      status: 200,
      body: lesson
    }

  } catch (error) {
      return {
        status: 500,
        body: error
      }
  }
}

export const removeLesson = async (req: Request) => {
  try {
    const { moduleId } = req.params;
    const {title, content, video, lessonTypeId } = req.body;

    const lesson = await prisma.lesson.create({
      data: {
        title,
        content,
        slug: slugify(title),
        moduleId: JSON.parse(moduleId),
        lessonTypeId
      }
    });

    return {
      status: 200,
      body: lesson
    }

  } catch (error) {
      return {
        status: 500,
        body: error
      }
  }
}

export const updateLesson = async (req: Request) => {}

