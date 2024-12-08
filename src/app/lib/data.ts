import { sql } from "@vercel/postgres";

import type { Chore, ChoreRecord } from "./definitions";
import { mapToChore  } from "./mappers";

const ITEMS_PER_PAGE = 2;

export async function fetchChoresPagesAsync(): Promise<number> {
  try {
    const data = await sql<{ count: number }>`SELECT count(*) FROM chores`;
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } 
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of chores.');
  }
}

export async function fetchChoresAsync(currentPage: number): Promise<Chore[]> {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = await sql<ChoreRecord>`
      SELECT * 
        FROM chores
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `;
    return data.rows.map(row => mapToChore(row));
  } 
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch chores.');
  }
}

