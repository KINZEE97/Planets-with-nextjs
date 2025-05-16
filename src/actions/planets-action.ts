"use server";
import * as Planet from "@/models/Planets";

import { revalidatePath } from "next/cache";

function wait(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

export async function createPlanetAction(previousState: unknown, formData: FormData) {
    await wait(4000)
    const name = formData.get("name");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");

    if (
        typeof name !== "string" ||
        name.length === 0 ||
        typeof description !== "string" ||
        typeof imageUrl !== "string"
    ) {
        return { message: "Todos os campos são obrigatórios" };
    }

    await Planet.createPlanet({ name, description, imageUrl });

    revalidatePath("/");
}

export async function deletePlanetAction(id: number) {

    await Planet.deletePlanet(id)
    revalidatePath("/");
}
