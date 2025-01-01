"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { createChore, State } from '@/app/lib/actions';

function Page() {

  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createChore, initialState);

  return (
    <div className="flex flex-col gap-4">
      <h3>Add Chore</h3>
      <form action={formAction}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
            <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              What needs to be done?
            </label>
            <div className="relative">
              <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your chore"
                  className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                  required
                  autoFocus
                />             
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/chores"
            className="text-sm px-3 py-1.5 self-end text-teal-900 font-normal bg-transparent border border-deepTeal border-b-4 hover:bg-deepTeal/10 active:border-b-[1px] active:mt-0.5 rounded-md"
          >
            Cancel
          </Link>
          <button 
            type="submit"
            className="text-sm px-3 py-1.5 self-end text-white font-medium bg-deepTeal border border-deepTeal border-b-4 border-b-teal-900 hover:bg-deepTeal/95 active:border-b-[1px] active:mt-0.5 rounded-md"
          >
              Add Chore
          </button>
        </div>
      </form>

      {state.errors && <p className="text-red-500 pt-4">{state.message}</p> }
    </div>
  );
}

export default Page;

