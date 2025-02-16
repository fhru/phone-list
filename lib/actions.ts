/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(11),
});

export const saveContact = async (prevSate: unknown, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.contact.create({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            },
        });
    } catch (error) {
        return { message: "Failed to create contact" };
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

export const updateContact = async (
    id: string,
    prevSate: unknown,
    formData: FormData
) => {
    const validatedFields = ContactSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.contact.update({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            },
            where: { id },
        });
    } catch (error) {
        return { message: "Failed to update contact" };
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

export async function deleteContact(id: string) {
    await prisma.contact.delete({
        where: { id },
    });
    revalidatePath("/contacts");
}
