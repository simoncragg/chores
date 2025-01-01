import Link from "next/link";
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

      <div className="flex justify-between items-center w-full">
        <h2>Your Chores</h2>
        <Link 
          href="/chores/create" 
          className="px-3 py-1.5 text-sm font-medium text-white bg-deepTeal border border-deepTeal border-b-4 border-b-teal-900 rounded-md hover:bg-deepTeal/95 active:border-b-[1px] active:mt-0.5"
        >
          Add Chore
        </Link>
      </div>

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
