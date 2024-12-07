import { Suspense } from "react";
import Chores from "./chores";
import { ChoresTableSkeleton } from "./ui/skeletons";

export default async function Home() {

  return (
    <div className="flex items-center p-8 pb-20 gap-16 text-xl max-w-screen-lg mx-auto overflow-x-auto">
      <main className="flex flex-col gap-8 items-center min-w-full">
        <h1>CHORES</h1>
        <Suspense fallback={<ChoresTableSkeleton />}>
          <Chores />
        </Suspense>

      </main>
    </div>
  );
}
