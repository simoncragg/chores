import { Suspense } from "react";
import { v4 as uuidv4 } from "uuid";

import Await from "@/app/ui/await";
import ChoresTable from "@/app/ui/chores/table";
import PaginationBar from "@/app/ui/pagination-bar";
import { ChoresTableSkeleton } from "@/app/ui/chores/skeletons";
import { fetchChoresAsync, fetchChoresPagesAsync } from "@/app/lib/data";

async function Page(props: { 
    searchParams?: Promise<{ page?: string; }>
}) {

  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchChoresPagesAsync();
  const choresPromise = fetchChoresAsync(currentPage);

  return (
    <div 
      key={uuidv4()} 
      className="flex items-center p-8 pb-20 gap-16 text-xl max-w-screen-lg mx-auto overflow-x-auto"
    >
      <main className="flex flex-col gap-8 items-center min-w-full">
        <h1>CHORES</h1>
        <Suspense fallback={<ChoresTableSkeleton />}>
          <Await promise={choresPromise}>
            {(chores) => <ChoresTable chores={chores} />}
          </Await>
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <PaginationBar totalPages={totalPages} />
        </div>
      </main>
    </div>
  );
}

export default Page;
