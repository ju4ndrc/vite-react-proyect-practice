import { useEffect, useState } from 'react'



import SearchFormSection from '../SearchFormSection.jsx'
import JobListings from '../JobListings.jsx'
import Pagination from '../Pagination.jsx'
import jobsData from '../../data.json'
import '../../App.css'

const RESULT_PER_PAGE = 3

function SearchPage() {

  const [filters, setFilters] = useState({
      technology:'',
      location: '',
      experienceLevel: ''
  })
  const [textToFilter, setTextToFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const jobsFilterByFilter = jobsData.filter(job=>{
    return (
      ( filters.technology === '' || job.data.technology === filters.technology ) &&
      ( filters.location === ''|| job.data.modalidad === filters.location ) &&
      ( filters.experienceLevel === ''|| job.data.nivel === filters.experienceLevel  )

  )
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
  const handleReset = ()=>{
    setFilters=({
      technology:'',
      location: '',
      experienceLevel: ''
    })
    setTextToFilter('')
    setCurrentPage(1)
  }

  useEffect(()=>{
    document.title = `Pagina${currentPage} `
    return ()=>{
        window.removeEventListener()
    }
  },[jobsWithTextFilter,currentPage])

  return (
    
    

  <main>

    <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} onReset={handleReset}></SearchFormSection>
    <section>
      <JobListings jobs={pagedResults}></JobListings>

      
      <p> Mostrando {(currentPage -1) * RESULT_PER_PAGE + 1} -{' '} {Math.min(currentPage * RESULT_PER_PAGE, jobsData.length)} de {jobsData.length} Resultados</p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    </section>
  </main>


    
  )
}

export default SearchPage
