import { use, useState } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import JobCard from './components/JobCard.jsx'
import SearchFormSection from './components/SearchFormSection.jsx'
import JobListings from './components/JobListings.jsx'
import Pagination from './components/Pagination.jsx'
import jobsData from './data.json'
import './App.css'

const RESULT_PER_PAGE = 3

function App() {

  const [textToFilter, setTextToFilter] = useState({
      technology:'',
      location: '',
      experienceLevel: ''
  })
  const [filters, setFilters] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const jobsFilterByFilter = jobsData.filter(job=>{
    return ((filters.technology === '' || job.data.technology === filters.technology))
  })
  
  const jobsWithTextFilter = textToFilter === ''
  ?jobsFilterByFilter 
   : jobsFilterByFilter.filter(job=>{
    return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
  })
  
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULT_PER_PAGE)
  const handlePageChange =  (page)  =>{
    console.log('Chanin page',page)
    setCurrentPage(page)
    window.scrollTo({top:0, behavior:'smooth'})    
  }
  
  const pagedResults = jobsWithTextFilter.slice(
    (currentPage-1)* RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  )
  
  const handleSearch = (filters)=>{
    setFilters(filters)
    setCurrentPage(1)
    
    
  }
  const handleTextFilter = (newTextToFilter)=>{
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }
  return (
    <>
    <Header/>

  <main>

    <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}></SearchFormSection>
    <section>
      <JobListings jobs={pagedResults}></JobListings>

      
      <p> Mostrando {(currentPage -1) * RESULT_PER_PAGE + 1} -{' '} {Math.min(currentPage * RESULT_PER_PAGE, jobsData.length)} de {jobsData.length} Resultados</p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    </section>
  </main>

    <Footer/>

    </>
  )
}

export default App
