import Sidebar from './sidebar';
// import { useRouter } from 'next/router';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-slate-800 text-slate-200 sticky top-0 h-14 flex justify-center items-center font-semibold'>
        Campus Buy
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
      <Sidebar/>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
