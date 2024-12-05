import { fetchChoresAsync } from "./lib/data";
import ChoresTable from "./ui/chores-table";

export default async function Home() {

  const chores = await fetchChoresAsync();

  return (
    <div className="flex items-center p-8 pb-20 gap-16 text-xl max-w-screen-lg mx-auto overflow-x-auto">
      <main className="flex flex-col gap-8 items-center min-w-full">
        <h1>CHORES</h1>

        <ChoresTable chores={chores} />

      </main>
    </div>
  );
}
