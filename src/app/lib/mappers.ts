import { Chore, ChoreRecord } from "./definitions";
import { formatDateToLocal } from "./utils";

export function mapToChore(row: ChoreRecord): Chore {
  return { 
    id: row.id,
    name: row.name,
    isComplete: row.is_complete,
    createdDate: formatDateToLocal(row.created_date),
  };
}
