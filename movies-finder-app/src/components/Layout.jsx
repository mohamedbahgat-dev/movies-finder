import { Outlet } from 'react-router-dom'
import HomeNavBar from './Header/NavBar'

function Layout() {
  return (
    <>   
      <Outlet />
    </>
  )
}

export default Layout