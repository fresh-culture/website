import { PrismaClient } from '@prisma/client';
import { global } from '../../app';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

export { prisma };
