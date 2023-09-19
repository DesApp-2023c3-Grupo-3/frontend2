import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [navDeployed, setNavDeployed] = useState(false)

  const switchNavbar = () => {
    setNavDeployed(!navDeployed)
  }

  return (
    <nav className={"fixed md:relative h-screen px-12 py-8 flex flex-col gap-2 " + (navDeployed?'translate-x-[-100%]':'translate-x-[0%]')}>
      <button className={'md:hidden absolute cursor-pointer right-[-2rem]'} onClick={switchNavbar}>X</button>
      <div className="flex items-center gap-4 bg-white border-white rounded-[10rem] pr-12 mb-16">
        <span className="aspect-square h-16 overflow-hidden rounded-[10rem]"><img src="https://avatars.githubusercontent.com/u/84170516?v=4" alt="User avatar" /></span>
        <h3 className="font-semibold itim">Administrador</h3>
      </div>
      <NavLink to='/admin/avisos'>Avisos</NavLink>
      <NavLink to='/admin/comisiones'>Comisiones</NavLink>
      <NavLink to='/admin/usuarios'>Administrar usuarios</NavLink>
      <a className='sign-out mt-auto' href='/'>Cerrar sesion</a>
      <img className='mx-auto aspect-square h-20 mt-6' src="https://unahur.edu.ar/wp-content/uploads/2021/03/UNAHUR-1.png" alt="" />
    </nav>
  )
}

export default Navbar;
