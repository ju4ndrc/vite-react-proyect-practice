import {lazy,Suspense} from 'react'
import { Routes,Route } from 'react-router'
import {Toaster} from 'react-hot-toast'
import {Header} from './components/Header.jsx'
import Footer from './components/Footer.jsx'




const HomePage = lazy(()=>import('./components/pages/Home.jsx'))
const SearchPage = lazy(()=>import('./components/pages/Search.jsx'))
const NotFoundPage = lazy(()=>import('./components/pages/404.jsx'))
const Contact = lazy(()=>import('./components/pages/Contact.jsx'))
const JobDetail = lazy(()=>import('./components/pages/Detail.jsx'))
const ProfilePage = lazy(()=>import('./components/pages/ProfilePage.jsx'))
const ProtectedRoute = lazy(()=>import('./components/ProtectedRoute.jsx'))
const Login = lazy (()=>import('./components/pages/Login.jsx'))
const Register = lazy (()=>import('./components/pages/Register.jsx'))


function App() {



  return (
    <>
    <Toaster position='top-center'></Toaster>
    <Header  />

    <Suspense>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/' element={<HomePage/>} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/jobs/:jobId' element={<JobDetail />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
          } />

      </Routes>
      <Footer/>
    </Suspense>
    </>
  )
}

export default App
