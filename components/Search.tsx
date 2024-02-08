"use client";

import { RotateCwIcon, SearchIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

type Props = {
  query?: string;
  
}

export default function Search({ query  }: Props) {
  const router = useRouter()
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleThatSearch(value: string) {
    const params = new URLSearchParams(window.location.search); 

    if(value) {
      params.set('q', value.toString());
      console.log(value);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return <div className='relative mt-5 max-w-md'>
    <label htmlFor='search' className='sr-only'>
      Serach
    </label>
    <div className='rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3' aria-hidden='true'>
        <SearchIcon className='mr-4 h-4 w-4 text-gray-500' aria-hidden="true"/>
      </div>
      <input 
        type='text'
        name='search'
        autoComplete='off'
        id='search'
        className='h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' 
        placeholder='Search by name'
        onChange={event => handleThatSearch(event.target.value)}
        defaultValue={query}
        
      />
    </div>
    {isPending && (
      <div className='absolute right-0 top-0 bottom-0 flex items-center justify-center'>
        <RotateCwIcon className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700'/>
      </div>
    )}
  </div>;
}
