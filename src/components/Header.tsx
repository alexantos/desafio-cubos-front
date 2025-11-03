
'use client';

import { Button } from '@radix-ui/themes';

export function Header() {
  return (
    <div className='flex flex-row px-2 bg-black h-12 justify-between items-center '>
      <div className='flex flex-row items-center gap-2'>
        <canvas className='w-8 h-8 border-2 text-white rounded-lg' />
        <div className='text-white text-2xl font-light'>
          CUBOS
        </div>
        <div className='text-white text-md font-semibold pl-1'>
          Movies
        </div>
      </div>
      <Button color='plum'>Logout</Button>
    </div>
  );
}