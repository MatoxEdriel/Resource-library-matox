/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/prisma.ts
import { PrismaClient } from '@prisma/client';

// exporta una instancia global de Prisma
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const prisma = new PrismaClient();


