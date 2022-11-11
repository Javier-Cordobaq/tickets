import './App.css'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { AuthGuard } from './guards/AuthGuard'
import { PublicRoutes, PrivateRoutes } from './guards'
import Private from './pages/Private/Private'
import { useEffect, Suspense } from 'react'
import { supabase } from './supabase/client'
import Home from './pages/Home/Home'
import GetTickets from './pages/GetTickets/GetTickets'
import Nav from './components/Nav'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions'
import Spinner from './components/Spinner'

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    try {
      dispatch(setUser(user))
    }
    catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUser();
  }, [])


  const rute = window.location.pathname

  return (
    <div className="App">
      {rute !== '/login' ? <Nav /> : null}
      <Suspense fallback={<><h1>Cargando...</h1></>}>
        <Routes>
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path='*' element={<>Not Found 404</>} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
