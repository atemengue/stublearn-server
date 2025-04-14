import { Request } from 'express';
import slugify from 'slugify';
import prisma from '../config/prisma-client';

export const addModule = async (req: Request) => {
  try {
    const { courseId } = req.params;
    const { title,  } = req.body;
    const mod = await prisma.module.create({
      data: {
        title,
        slug: slugify(title),
        courseId: JSON.parse(courseId)
      }
    });
    return {
      status: 200,
      body: mod
    }
  } catch (error) {
    return {
      status: 500,
      body: error
    }
  }
}

export const removeModule = async (req: Request) => {
  try {
  const { moduleId } = req.params;

  const transaction = await prisma.$transaction([
    prisma.lesson.deleteMany({
      where: {
        moduleId: JSON.parse(moduleId)
      }
    }),
    prisma.module.delete({
      where: {
        id: JSON.parse(moduleId)
      }
    })
  ]);
    
  return {
    status: 200,
    body: 'module deleted'
  }

  } catch (error) {
    return {
      status: 500,
      body: error
    }
  }
}

export const updateModule = async (req: Request) => {
  try {
    const { moduleId } = req.params;
    const { title } = req.body;
    const updateModule = await prisma.module.update({
      where: {
        id: JSON.parse(moduleId)
      },
      data: {
        title: title
      } 
    });

    return {
      status: 200,
      body: updateModule
    }

  } catch (error) {
    return {
      status: 500,
      body: error
    }
  }
}

export const listModule = async (req: Request) => {
  try {
    const { courseId } = req.params;
    const modules = await  prisma.module.findMany({
      where: {
        courseId: JSON.parse(courseId)
      }
    });
    return {
      status: 200,
      body: modules
    }
  } catch (error) {
    return {
      status: 500,
      body: error
    }
  }

}



// export const read = (req: Request){}

// export const update = (req: Request){}

// export const delete = (req: Request){}