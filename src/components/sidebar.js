import Link from 'next/link'

function Sidebar(){


  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
      emoji: '🏡',
    },
    {
      href: '/about',
      title: 'About',
      emoji: '💬',
    },
    {
      href: '/contact',
      title: 'Contact',
      emoji: '📞',
    },
  ];

    return <aside className='bg-yellow-100 text-white w-full md:w-60'>
    <nav>
      <ul>
        {menuItems.map(({ href, title, emoji }) => (
          <li key={title}>
            <Link href={href}>
              <div className='flex justify-center'>
                <button className='w-4/5 mt-4 bg-slate-800 rounded-md text-white p-2 shadow-md'>
                <div className='mr-2 flex justify-start '>
                    <span className='pr-3'>{emoji}</span>
                    <span>{title}</span>
                    </div>
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
}

export default Sidebar