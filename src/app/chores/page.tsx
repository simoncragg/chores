import { Suspense } from "react";

import Await from "@/app/ui/await";
import ChoresTable from "@/app/ui/chores/table";
import { ChoresTableSkeleton } from "@/app/ui/chores/skeletons";
import { fetchChoresAsync } from "@/app/lib/data";

async function Page() {

  const choresPromise = fetchChoresAsync();

  return (
    <div className="flex items-center p-8 pb-20 gap-16 text-xl max-w-screen-lg mx-auto overflow-x-auto">
      <main className="flex flex-col gap-8 items-center min-w-full">
        <h1>CHORES</h1>
        <Suspense fallback={<ChoresTableSkeleton />}>
          <Await promise={choresPromise}>
            {(chores) => <ChoresTable chores={chores} />}
          </Await>
        </Suspense>

      </main>
    </div>
  );
}

export default Page;
