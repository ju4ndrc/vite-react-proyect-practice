

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/pages/Contact.jsx'
import { useEffect, useState } from 'react'
import HomePage from './components/pages/Home.jsx'
import SearchPage from './components/pages/Search.jsx'
import NotFoundPage from './components/pages/404.jsx'
import useRouter from './hooks/useRouter.jsx'
import Route from './components/Route.jsx'

function App() {





  return (
    <>
    <Header/>

    <Route path='/' component={HomePage}/>
    <Route path='/search' component={SearchPage}/>
    <Route path='/contact' component={Contact} />

    <Footer/>

    </>
  )
}

export default App
