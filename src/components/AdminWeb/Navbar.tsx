import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userDiv } from './utils/userDiv';
import { Switch } from '@nextui-org/react';
import keycloak from '../../services/keycloak/keycloack';
import { useUser } from './hooks/useUser';
function Navbar() {
  const [navDeployed, setNavDeployed] = useState(
    /Mobi|Android/i.test(navigator.userAgent),
  );
  const { username, rol, roleId } = useUser();

  const switchNavbar = () => {
    if (!/Mobi|Android/i.test(navigator.userAgent)) return;
    setNavDeployed(!navDeployed);
  };
  const imagen = userDiv(rol.charAt(0));

  const clearTokens = () => {
    keycloak.logout();
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const root = document.documentElement;

  useEffect(() => {
    const sectionWeb = document.getElementById('SectionWeb');
    if (sectionWeb) {
      if (isDarkMode) {
        sectionWeb.classList.add('dark');
        root.classList.add('dark');
      } else {
        sectionWeb.classList.remove('dark');
        root.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  const handleSwitchChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={
        'fixed md:relative z-[50] h-screen px-12 py-8 flex flex-col gap-2 w-screen md:w-auto bg-[#E0F7D9] dark:bg-[#050e06] ' +
        (navDeployed ? 'translate-x-[-100%]' : 'translate-x-[0%] z-[10]')
      }
      id="navbar"
    >
      <button
        className={
          'md:hidden absolute cursor-pointer ' +
          (!navDeployed ? 'right-[1rem]' : 'right-[-2rem]')
        }
        onClick={switchNavbar}
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H20M2 8H20M2 14H20"
            stroke={!isDarkMode ? 'black' : 'white'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-full mb-4 flex justify-center">
        <Switch
          onChange={handleSwitchChange}
          defaultSelected={!isDarkMode}
          size="lg"
          color="primary"
          thumbIcon={({ isSelected }) =>
            isSelected ? <SunIcon /> : <MoonIcon />
          }
        />
      </div>
      <div className="flex items-center gap-4 bg-white border-white rounded-[10rem] pr-12 mb-16 min-w-[15rem] justify-center">
        {imagen}
        <div className="font-semibold  flex flex-col items-center text-gray-500">
          <h3 className="itim">{username.split(' ')[0]}</h3>
          <span className="text-sm truncate">{rol}</span>
        </div>
      </div>
      <div
        onClick={switchNavbar}
        onKeyDown={switchNavbar}
        className="relative flex flex-col gap-1"
        role="presentation"
      >
        {roleId === 1 || roleId === 2 ? (
          <NavLink to="/BulletinBoardClient/admin/advertising">Avisos</NavLink>
        ) : null}
        {roleId === 1 || roleId === 3 ? (
          <NavLink to="/BulletinBoardClient/admin/comission">
            Comisiones
          </NavLink>
        ) : null}
        {roleId === 1 ? (
          <NavLink to="/BulletinBoardClient/admin/screen">Pantallas</NavLink>
        ) : null}
        <NavLink to="/BulletinBoardClient/admin/map">Mapas</NavLink>
        {roleId === 1 ? (
          <NavLink to="/BulletinBoardClient/admin/user">
            Administrar usuarios
          </NavLink>
        ) : null}
      </div>
      <NavLink to="/" onClick={clearTokens} className="sign-out mt-auto">
        Cerrar sesion
      </NavLink>
      <img
        className="mx-auto aspect-square h-20 mt-6"
        src="https://unahur.edu.ar/wp-content/uploads/2021/03/UNAHUR-1.png"
        alt=""
      />
    </nav>
  );
}

export default Navbar;

export const SunIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
  >
    <g fill="black">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const MoonIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="black"
    />
  </svg>
);
