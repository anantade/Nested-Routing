import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div>
     <nav>
        <Link to="/home">
         <h1>Home</h1>
        </Link>

        <Link to="/users">
         <h1>Users</h1>
        </Link>
        <Outlet/>
     </nav>
    </div>
  )
}
