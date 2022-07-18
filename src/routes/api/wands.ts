import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function GET() {
    const wands = await prisma.wand.findMany({});

    return {
        status: 200,
        body: { data: wands }
    };
}

export const POST: RequestHandler = async (event: RequestEvent) => {
    const { id, wood, core, length, maker, flexibility } = await event.request.json();
    const newWand = await prisma.wand.create({
        data: { id, wood, core, length, maker, flexibility }
    });
    return {
        status: 200,
        body: { message: 'Created successfully', data: newWand }
    };
};
