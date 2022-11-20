import { NavLayout } from '../styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaAngleLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { PrivateRoutes, PublicRoutes } from '../guards';
import { supabase } from '../supabase/client';
import { useState } from 'react';

const Nav = () => {

  const [menuMobile, setMenuMobile] = useState(false)

  const rute = window.location.pathname
  const navigate = useNavigate();

  const logOut = () => {
    supabase.auth.signOut()
  }

  return (
    <NavLayout menu={menuMobile.toString()}>
      {rute !== '/private/home' ? <p onClick={() => navigate(-1)}><FaAngleLeft />Volver</p> : <p></p>}
      <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`}>
        <h1>Ticket.io</h1>
      </Link>
      <div onClick={() => setMenuMobile(!menuMobile)} className='menu'>
        <div className='menu_container'>
          <HiOutlineMenuAlt4 className='menu_icon' />
          <p>Menu</p>
        </div>
        <div className='rutes_container'>
          <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.PROFILE}`}>
            <CgProfile className='icon profile' />
            <div>
              <p>Perfil</p>
              <p className='description'>Salas, Cajas, Tablas</p>
            </div>
          </Link>
          {rute !== '/private/home' ?
            <Link to='/'>
              <FaHome className='icon home' />
              <div>
                <p>Home</p>
                <p className='description'>Tickets, Filas</p>
              </div>
            </Link>
            : <p></p>
          }
          <Link to={`${PublicRoutes.LOGIN}`}>
            <BiLogOut className='icon logout' />
            <div>
              <p onClick={() => logOut()}>LogOut</p>
            </div>
          </Link>
        </div>
      </div>
    </NavLayout>
  )
}

export default Nav