import { PrismaClient } from '@prisma/client';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
const prisma = new PrismaClient();


export async function get() {
    const wands = await prisma.wand.findMany({});

    return {
        status: 200,
        body: { data: wands }
    };
}

export const post: RequestHandler = async (event: RequestEvent) => {
    const body = await event.request.json();
    await prisma.wand.create({ data: body });
    return {
        status: 200,
        body: { message: "Created successfully" }
    }
}
