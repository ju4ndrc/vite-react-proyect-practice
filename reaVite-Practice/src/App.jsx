

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import HomePage from './components/pages/Home.jsx'
import SearchPage from './components/pages/Search.jsx'
import NotFoundPage from './components/pages/404.jsx'

function App() {

  const [currentPath ,setCurrentPath]=  useState(window.location.pathname)

  let page = <NotFoundPage/>
  if(currentPath === '/'){
    page = <HomePage/>
  }else if(currentPath === '/search'){
    page = <SearchPage/>
  }
  useEffect(()=>{

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate',handleLocationChange)

    return ()=>{
      window.removeEventListener('popstate',handleLocationChange)
    }
  },[])


  return (
    <>
    <Header/>

    {page}

    <Footer/>

    </>
  )
}

export default App
