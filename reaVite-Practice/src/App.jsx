import {lazy,Suspense, useState} from 'react'
import { Routes,Route } from 'react-router'
import {Toaster} from 'react-hot-toast'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'




const HomePage = lazy(()=>import('./components/pages/Home.jsx'))
const SearchPage = lazy(()=>import('./components/pages/Search.jsx'))
const NotFoundPage = lazy(()=>import('./components/pages/404.jsx'))
const Contact = lazy(()=>import('./components/pages/Contact.jsx'))
const JobDetail = lazy(()=>import('./components/pages/Detail.jsx'))



function App() {

  const [isLoggedIn, setIsloggedIn]= useState(false)


  const handleLogin = () => {
    setIsloggedIn(true)
  }

  const handleLogout=()=>{
    setIsloggedIn(false)
  }

  return (
    <>
    <Toaster position='top-center'></Toaster>
    <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

    <Suspense>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/jobs/:jobId' element={<JobDetail isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Footer/>
    </Suspense>
    </>
  )
}

export default App
