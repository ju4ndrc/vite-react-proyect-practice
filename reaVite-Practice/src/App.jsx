

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import HomePage from './components/pages/Home.jsx'
import SearchPage from './components/pages/Seacrh.jsx'
import NotFoundPage from './components/pages/404.jsx'

function App() {

  const currentPath =  window.location.pathname

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
