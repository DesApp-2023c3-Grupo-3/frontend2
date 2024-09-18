import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPayload, setTokens } from '../../services/validationMiddleware';
import { userDiv } from './utils/userDiv';
import {
  NavbarMenuToggle,
  NavbarContent,
  Navbar as NavbarUI,
} from '@nextui-org/react';
function Navbar() {
  const [navDeployed, setNavDeployed] = useState(
    /Mobi|Android/i.test(navigator.userAgent),
  );
  const roleId = getPayload().tokenRoleId;
  const user = getPayload().payload;
  const switchNavbar = () => {
    if (!/Mobi|Android/i.test(navigator.userAgent)) return;
    setNavDeployed(!navDeployed);
  };
  const imagen = userDiv(user.role.name.charAt(0));

  const clearTokens = () => {
    setTokens('', '');
  };

  return (
    <nav
      className={
        'fixed md:relative z-50 h-screen px-12 py-8 flex flex-col gap-2 w-screen md:w-auto ' +
        (navDeployed ? 'translate-x-[-100%]' : 'translate-x-[0%] z-[10]')
      }
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
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flex items-center gap-4 bg-white border-white rounded-[10rem] pr-12 mb-16 min-w-[15rem] justify-center">
        {imagen}
        <div className="font-semibold  flex flex-col items-center text-gray-500">
          <h3 className="itim">{user.name.split(' ')[0]}</h3>
          <span className="text-sm truncate">{user.role.name}</span>
        </div>
      </div>
      <div
        onClick={switchNavbar}
        onKeyDown={switchNavbar}
        className="relative flex flex-col gap-1"
        role="presentation"
      >
        {roleId === 1 || roleId === 2 ? (
          <NavLink to="/admin/advertising">Avisos</NavLink>
        ) : null}
        {roleId === 1 || roleId === 3 ? (
          <NavLink to="/admin/comission">Comisiones</NavLink>
        ) : null}
        {roleId === 1 ? <NavLink to="/admin/screen">Pantallas</NavLink> : null}
        {roleId === 1 ? (
          <NavLink to="/admin/user">Administrar usuarios</NavLink>
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
