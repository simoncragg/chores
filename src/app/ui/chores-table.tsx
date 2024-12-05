'use client';

import { FaEdit } from "react-icons/fa";
import type { Chore } from "@/app/lib/definitions";

function ChoresTable({ chores }: { chores: Chore[] }) {

  const toggleCompleted = (chore: Chore) => {
    console.log(chore);
  };

  return (
    <table className="table min-w-full text-gray-900">
      <thead className="bg-gray-200 text-gray-700 rounded-lg text-sm">
        <tr>
          <th scope="col" className="px-3 py-3 text-start rounded-tl-lg">Chore</th>
          <th scope="col" className="px-3 py-3 text-center">Done</th>
          <th scope="col" className="px-3 py-3 text-start rounded-tr-lg"><div className="sr-only">Edit</div></th>
        </tr>
      </thead>
      <tbody className="bg-white/50">
        {chores?.map(chore => (
          <tr
            key={chore.id}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:last-child>td:first-child]:rounded-b-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap px-3 py-3">
              {chore.name}
            </td>
            <td className="whitespace-nowrap px-3 py-3 text-center">
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={chore.isComplete}
              onChange={() => toggleCompleted(chore)}
            />
            </td>
            <td className="whitespace-nowrap py-3 pr-3 text-right">
              <button type="button"><FaEdit className="w-5 h-5 text-gray-700" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ChoresTable;
