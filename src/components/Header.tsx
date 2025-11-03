
'use client';

import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  return (
    // <header style={{ padding: '10px', background: '#333', color: 'white' }}>
    //   <nav>
    //     <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
    //       <li>
    //         <Link href="/" className="text-amber-500 ">
    //           Tarefas
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <div className='flex flex-row px-2 bg-black h-12 justify-between items-center '>
      <div className='flex flex-row items-center gap-2'>
        <canvas className='w-8 h-8 border-2 text-white rounded-lg'/>
        <div className='text-white text-2xl font-light'>
          CUBOS
        </div>
        <div className='text-white text-md font-semibold pl-1'>
          Movies
        </div>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <Button descricao="Logout"></Button>
      </div>
    </div>
  );
}