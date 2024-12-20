import { Outlet } from 'react-router-dom'
import NavBar from './Header/NavBar'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout