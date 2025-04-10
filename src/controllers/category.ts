import { Request } from 'express';
import slugify from "slugify";
import prisma from '../config/prisma-client';
import { HttpResponse } from '../protocols/http';

export const create = async (req: Request): Promise<HttpResponse>=> {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: {
        name,
        slug: slugify(name),
      },
    });
    return {
      status: 201,
      body: category,
    }
  } catch (err) {
    return {
      status: 400,
      body: "Name is taken",
    }
  }
};

export const read = async (req: Request): Promise<HttpResponse>=> {
  try {
    const category = await prisma.category.findUnique({
      where: { slug: req.params.slug },
    });
    return {
      status: 200,
      body: category,
    }
  } catch (err) {
    return {
      status: 500,
      body: "Error fetching category",
    }
  }
};

export const update = async (req: Request): Promise<HttpResponse>=> {
  try {
    const { name } = req.body;
    const category = await prisma.category.update({
      where: { slug: req.params.slug },
      data: {
        name,
        slug: slugify(name),
      },
    });
    return {
      status: 200,
      body: category,
    }
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      body: "Update failed",
    }
  }
};

export const remove = async (req: Request): Promise<HttpResponse>=> {
  try {
    const category = await prisma.category.delete({
      where: { slug: req.params.slug },
    });
    return {
      status: 200,
      body: category,
    }
  } catch (err) {
    return {
      status: 400,
      body: "Delete failed",
    }
  }
};

export const categories = async (_req: Request): Promise<HttpResponse>=> {
  try {
    const categories = await prisma
    .category
    .findMany();
    return {
      status: 200,
      body: categories
    }
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      body: err
    }
  }
}
