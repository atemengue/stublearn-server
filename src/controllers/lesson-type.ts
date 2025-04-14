import { Request } from 'express';
import prisma from '../config/prisma-client';

export const addType = async (req: Request) => {
  try {
    const { name } = req.body;
    const type = await prisma.lessonType.create({
      data: {
        name: name
      }
    });
    return {
      status: 200,
      body: type
    }
  } catch (error) {
    return {
      status: 500,
      body: 200
    }
  }
}