import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/client'
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../guards';
import { Button, Input } from '../../styled-components'
import { LoginLayout } from './styled-components/login-layout';
import { FaMagic, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSelector } from 'react-redux'
import { toast, Toaster } from 'react-hot-toast'
import { PaleteColors } from '../../palete-colors/palete-colors';

const Login = () => {

  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const [email, setEmail] = useState('');

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
    }
    catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    localStorage.getItem('sb-ddwsjkfihgurenvpkdur-auth-token') ? navigate(`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`) : null
  }, [])

  return (
    <LoginLayout>
      <form className='form_container' onSubmit={handleSumbit}>
      <Toaster
        position='bottom-center'
      />
        <h2>Login.</h2>
        <p>Ingresa tu correo y enviaremos un link para que puedas entrar a la página</p>
        <Input
          type='email'
          name='email'
          placeholder='youremail@gmail.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={() => toast('Link enviado',
          {
            icon: '👏',
            style: {
              borderRadius: '2rem',
              background: `${PaleteColors.PRIMARY_BLUE}`,
              boxShadow: `0 0 10px ${PaleteColors.PRIMARY_BLUE}`,
              color: '#fff',
            },
          })}>Enviar</Button>
        <FaMagic className='magic' />
        <MdEmail className='email' />
        <FaLink className='link' />
      </form>
    </LoginLayout >
  )
}

export default Login