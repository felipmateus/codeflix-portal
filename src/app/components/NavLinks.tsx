const links = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

export function NavLinks() {
  return (
    <nav>
      <ul className='hidden md:flex md:space-x-4'>
        {links.map((link, index) => (
          <li
            key={link}
            className={`cursor-pointer text-sm transition hover:text-gray-300 ${
              index === 0 ? 'font-semibold text-white' : 'text-gray-200'
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
