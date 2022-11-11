import { NavLayout } from '../styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaAngleLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PrivateRoutes, PublicRoutes } from '../guards';
import { supabase } from '../supabase/client';

const Nav = () => {

  const rute = window.location.pathname
  const navigate = useNavigate();

  const logOut = () => {
    supabase.auth.signOut()
    navigate(`${PublicRoutes.LOGIN}`)
  }
  

  return (
    <NavLayout>
      {rute !== '/private/home' ? <p onClick={() => navigate(-1)}><FaAngleLeft />Volver</p> : <p></p>}
      <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`}>
        <h1>Tk.io</h1>
      </Link>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.PROFILE}`}>
          <p>Perfil<CgProfile /></p>
        </Link>
        <p onClick={() => logOut()}>Log Out</p>
        {rute !== '/private/home' ?
          <Link to='/'>
            <p>Home<FaHome /></p>
          </Link> : <p></p>
        }
      </div>


    </NavLayout>
  )
}

export default Nav