import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login'
import { UserContextProvider } from './providers/UserProvider'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Admin from './components/Admin'
import Home from './components/Home'
import Scan from './components/Scan'
import Complain from './components/Complain'


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/scan' element={<Scan />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/complain' element={<Complain />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>

    <RouterProvider router={myRouter}/>
    </UserContextProvider>
  </React.StrictMode>
)