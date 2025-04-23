import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex w-full max-w-7xl mx-auto items-center justify-between py-4 px-6 border-b shrink-0">
      <div className="hidden sm:block text-sm">
        <img src="/logo.png" alt="Logo do site Movie" width={120} height={40} />
      </div>
      
      <nav className='w-full' aria-label="Navegação principal">
        <ul className="flex items-center justify-center sm:justify-end gap-10 font-base text-base/6 text-secondary-foreground tracking-tighter">
          <li>
            <NavLink
              className={({ isActive }) => 
                `cursor-pointer hover:text-primary transition-all duration-150 ease-in-out focus:outline-none border-none px-3 py-2 ${isActive ? 'text-primary underline' : 'hover:underline'}`
              }
              to="/"
              end
            >
              Início
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => 
                `cursor-pointer hover:text-primary transition-all duration-150 ease-in-out focus:outline-none  px-2 py-1 ${isActive ? 'text-primary underline' : 'hover:underline'}`
              }
              to="/favorite"
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};