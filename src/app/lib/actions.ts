"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  isComplete: z.coerce.number(),
  createdDate: z.string(),
});

const CreateChore = FormSchema.omit({ id: true, isComplete: true, createdDate: true });

export interface State {
  message: string | null;
  errors?: {
    name?: string;
  };
}

export async function createChore(prevState: State, payload: FormData) {

  const validatedFields = CreateChore.safeParse({
    name: payload.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: {
        name: validatedFields.error.flatten().fieldErrors.name?.[0],
      },
      message: 'Missing Fields. Failed to create chore.',
    };
  }

  const { name } = validatedFields.data;
  const createdDate = new Date().toISOString().split("T")[0];

  try {
    await sql`
      INSERT INTO chores (name, is_complete, created_date)
      VALUES (${name}, false, ${createdDate})
    `;
  } catch {
    return {
      message: "Database Error: Failed to create chore.",
    };
  }

  revalidatePath("/chores");
  redirect("/chores");
}
