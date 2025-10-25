

import { PrismaClient } from "../generated/prisma";


export const prisma = new PrismaClient();

export * from "../generated/prisma"

console.log("Prisma Client cargado para la libreria de Matox")

