import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET({ params: { id } }) {
    const wand = await prisma.wand.findUnique({
        where: {
            id
        }
    })
    return { status: 200, body: { data: wand } };
}