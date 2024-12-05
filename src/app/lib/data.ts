import { sql } from "@vercel/postgres";

import type { Chore, ChoreRecord } from "./definitions";
import { mapToChore  } from "./mappers";

export async function fetchChoresAsync(): Promise<Chore[]> {
  try {
    const data = await sql<ChoreRecord>`SELECT * FROM chores`;
    return data.rows.map(row => mapToChore(row));
  } 
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch chores.');
  }
}

