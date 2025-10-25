

import { PrismaClient } from "../generated/prisma/index.js";

export const prisma = new PrismaClient();

export * from "../generated/prisma/index.js"

console.log("Prisma Client cargado para la libreria de Matox")

