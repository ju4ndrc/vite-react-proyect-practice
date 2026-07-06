

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/pages/Contact.jsx'
import { Routes,Route } from 'react-router'
import HomePage from './components/pages/Home.jsx'
import SearchPage from './components/pages/Search.jsx'
import NotFoundPage from './components/pages/404.jsx'

import {Toaster} from 'react-hot-toast'

function App() {





  return (
    <>
    <Toaster position='top-center'></Toaster>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='*' element={<NotFoundPage/>} />
      <Route path='/contact' element={<Contact/> }/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
