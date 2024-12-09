import { CHORES_PER_PAGE } from "@/app/lib/data";

export function ChoresTableSkeleton() {
  return (
    <table className="table min-w-full text-gray-900 animate-pulse">
      <thead className="bg-gray-200 text-gray-700 rounded-lg text-sm">
        <tr>
          <th scope="col" className="px-3 py-3 text-start rounded-tl-lg w-1/2">Chore</th>
          <th scope="col" className="px-3 py-3 text-center w-1/4">Done</th>
          <th scope="col" className="px-3 py-3 text-start rounded-tr-lg w-1/4"><div className="sr-only">Edit</div></th>
        </tr>
      </thead>
      <tbody className="bg-white/50">
        {Array.from({ length: CHORES_PER_PAGE }).map((_, i) => (
          <tr
            key={i}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:last-child>td:first-child]:rounded-b-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap px-3 py-3">
              <div className="h-4 bg-gray-300 rounded"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3 text-center">
              <div className="inline-block w-5 h-5 bg-gray-300 rounded-full"></div>
            </td>
            <td className="whitespace-nowrap py-3 pr-3 text-right">
              <div className="inline-block w-5 h-5 bg-gray-300 rounded"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
