import prisma from '@/lib/prisma'
const ITEMS_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    try {
        const contact = await prisma.contact.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { phone: { contains: query, mode: 'insensitive' } }
                ]
            }
        });
        return contact;
    } catch (error) {
        throw new Error(`Failed to Fetch Contact Data: ${error}`);
    }
}

export const getContactById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: { id }
        });
        return contact;
    } catch (error) {
        throw new Error(`Failed to Fetch Contact Data: ${error}`);
    }
}

export const getContactPages = async (query: string) => {
    try {
        const contact = await prisma.contact.count({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { phone: { contains: query, mode: 'insensitive' } }
                ]
            }
        });
        const totalPages = Math.ceil(Number(contact) / ITEMS_PER_PAGE)
        return totalPages;
    } catch (error) {
        throw new Error(`Failed to Fetch Contact Data: ${error}`);
    }
}
