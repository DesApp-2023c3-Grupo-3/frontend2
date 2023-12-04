import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import adminPicture from './assets/admin.png';
import { getPayload, setTokens } from '../../services/validationMiddleware';

function Navbar() {
  const [navDeployed, setNavDeployed] = useState(
    /Mobi|Android/i.test(navigator.userAgent),
  );
  const roleId = getPayload().tokenRoleId;
  const switchNavbar = () => {
    if (!/Mobi|Android/i.test(navigator.userAgent)) return;
    setNavDeployed(!navDeployed);
  };

  const clearTokens = () => {
    setTokens('', '');
  };

  return (
    <nav
      className={
        'fixed md:relative h-screen px-12 py-8 flex flex-col gap-2 w-screen md:w-auto ' +
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
      <div className="flex items-center gap-4 bg-white border-white rounded-[10rem] pr-12 mb-16">
        <span className="aspect-square h-16 overflow-hidden rounded-[10rem] p-[0.25rem]">
          <img src={adminPicture} alt="User avatar" />
        </span>
        <h3 className="font-semibold itim">Administrador</h3>
      </div>
      <div
        onClick={switchNavbar}
        onKeyDown={switchNavbar}
        className="relative flex flex-col"
        role="presentation"
      >
        {roleId === 1 || roleId == 2 ? (
          <NavLink to="/admin/advertising">Avisos</NavLink>
        ) : null}
        {roleId === 1 || roleId == 3 ? (
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
