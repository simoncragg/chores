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
    <section key={uuidv4()} className="flex flex-col items-start w-full gap-4">
      <Suspense fallback={<ChoresTableSkeleton />}>
        <Await promise={choresPromise}>
          {(chores) => <ChoresTable chores={chores} />}
        </Await>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <PaginationBar totalPages={totalPages} />
      </div>
    </section>
  );
}

export default Page;
