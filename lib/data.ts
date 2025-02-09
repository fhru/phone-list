import prisma from '@/lib/prisma'

export const getContacts = async () => {
    try {
        const contact = await prisma.contact.findMany();
        return contact;
    } catch (error) {
        throw new Error(`Failed to Fetch Contact Data: ${error}`);
    }
}
