import { NavLink } from "react-router"
import {Link} from "./Link.jsx"

import { useAuthStore } from "../store/authStore.js"

import { useFavoritesStore } from "../store/favoritesStore.js"

export function Header(){

  const {isLoggedIn} = useAuthStore()

  const favorites = useFavoritesStore(state => state.favorites)


  return(
      <header>
              <Link to='/' >
                  <h1>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    DevJobs
              </h1>
          </Link>
          
      <nav>

          <NavLink  to="/contact" className={({isActive})=>isActive?'nav-link-active':''}>
            Contacto
          </NavLink> 
          
          <NavLink to="/search"  className={({isActive})=>isActive?'nav-link-active':''}>
          Empleos
          </NavLink>

            {
              isLoggedIn  &&(
                <NavLink to="/profile"  className={({isActive})=>isActive?'nav-link-active':''}> Profile ❤️{favorites.length} </NavLink>           
                )
            }


      </nav>

        <HeaderUserButton/>

        
    </header>
  )
}


const HeaderUserButton=()=>{
  
  const {isLoggedIn,login, logout} = useAuthStore()
  const handleLogout = ()=>{
    logout()
    
    window.location.reload()
    
  }
  return(  isLoggedIn ? <button onClick={handleLogout} > Cerrar sesion </button> :
    <button onClick={login} > Iniciar Sesion </button>
  )

      
}
