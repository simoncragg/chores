import ChoresTable from "@/app/ui/chores/chores-table";
import { fetchChoresAsync } from "@/app/lib/data";

export default async function Chores() {
  const chores = await fetchChoresAsync();
  return <ChoresTable chores={chores} />;
}
