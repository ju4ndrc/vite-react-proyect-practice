import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import JobCard from './components/JobCard.jsx'
import SearchFormSection from './components/SearchFormSection.jsx'
import JobListings from './components/JobListings.jsx'
import Pagination from './components/Pagination.jsx'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePageChange =  (page)  =>{
    console.log('Chanin page',page)
    setCurrentPage(page)    
  }

  return (
    <>
    <Header/>

  <main>

    <SearchFormSection></SearchFormSection>

    <JobListings></JobListings>

    

    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    
  </main>

    <Footer/>

    </>
  )
}

export default App
