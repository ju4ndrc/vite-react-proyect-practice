import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import JobCard from './components/JobCard.jsx'
import SearchFormSection from './components/SearchFormSection.jsx'
import JobListings from './components/JobListings.jsx'
import Pagination from './components/Pagination.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <Header/>

  <main>

    <SearchFormSection></SearchFormSection>

    <JobListings></JobListings>

    

    <Pagination currentPage={1} totalPages={10}></Pagination>
    
  </main>

    <Footer/>

    </>
  )
}

export default App
