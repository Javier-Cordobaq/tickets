import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/client'
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../guards';
import { Button, Input } from '../../styled-components'
import { LoginLayout } from './styled-components/login-layout';
import { FaMagic, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from 'react-hot-toast'
import { PaleteColors } from '../../palete-colors/palete-colors';
import { motion } from 'framer-motion';

const variants = {
  open: {
    scale: 1.5,
    y: 0,
  },
  closed: {
    scale: 0,
    y: 0,
  }
}

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [send, setSend] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    setSend(true)
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
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate(`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`)
      }
    })
  }, [])

  return (
    <LoginLayout send={send.toString()}>
      <h1 className='ticket_io'>Ticket.io</h1>
      <form className='form_container' onSubmit={handleSumbit}>
        <Toaster
          position='bottom-center'
        />
        <h2>Login.</h2>
        <p>Ingresa tu correo y enviaremos un link para que puedas ingresar.</p>
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
        <div className='email_container'>
          <MdEmail className='email' />
          <motion.span
            animate={send === true ? 'open' : 'closed'}
            variants={variants}
            className='span_email'
          >
            1
          </motion.span>
        </div>
        <FaLink className='link' />
      </form>
    </LoginLayout >
  )
}

export default Login