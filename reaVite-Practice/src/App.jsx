

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import HomePage from './components/pages/Home.jsx'
import SearchPage from './components/pages/Search.jsx'
import NotFoundPage from './components/pages/404.jsx'
import useRouter from './hooks/useRouter.jsx'

function App() {

  const {currentPath} = useRouter()

  let page = <NotFoundPage/>
  if(currentPath === '/'){
    page = <HomePage/>
  }else if(currentPath === '/search'){
    page = <SearchPage/>
  }


  return (
    <>
    <Header/>

    {page}

    <Footer/>

    </>
  )
}

export default App
