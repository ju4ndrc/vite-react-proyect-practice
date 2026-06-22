import { useEffect, useEffectEvent, useReducer, useState } from 'react'



import SearchFormSection from '../SearchFormSection.jsx'
import JobListings from '../JobListings.jsx'
import Pagination from '../Pagination.jsx'
import jobsData from '../../data.json'
import '../../App.css'
import { use } from 'react'

const RESULT_PER_PAGE = 3
const useFilters = ()=>{

     const [filters, setFilters] = useState({
      technology:'',
      location: '',
      experienceLevel: ''
  })
  const [textToFilter, setTextToFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [jobs,setJobs] = useState([])
  const [total,setTotal]= useState(0)
  const [loading,setLoading] =useState(true)
  useEffect(()=>{
    async function fetchJobs() {
      try{
        setLoading(true)
        const response = await fetch('https://jscamp-api.vercel.app/api/jobs')
        const json = await response.json()

        setJobs(json.data)
        setTotal(json.total)
      }catch(error){
        console.error('Error fetching jobs:',error)
      }finally{
        setLoading(false)
      }
    }

    fetchJobs()
    //  ->  Queda adentro para evitar que se llene desde otro lado
  },[])

  const totalPages = Math.ceil(jobs.length / RESULT_PER_PAGE)
  
  const handlePageChange =  (page)  =>{
    console.log('Chanin page',page)
    setCurrentPage(page)
    window.scrollTo({top:0, behavior:'smooth'})    
  }
  

  
  const handleSearch = (filters)=>{
    setFilters(filters)
    setCurrentPage(1)
    
    
  }
  const handleTextFilter = (newTextToFilter)=>{
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }
  



  return{
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter,
   
  }
  
}

function SearchPage() {
  const {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter,
 
  } = useFilters()

    useEffect(()=>{
      document.title = `Pagina${currentPage} `
      return 
    },[jobs,currentPage])
  return (
    
    

  <main>

    <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} ></SearchFormSection>
    <section>
      {/* jobs={jobs.data} -> Tiene los empleos */}
      

      {
        loading ? <p>Cargandp empleos ...</p>:<JobListings jobs={jobs} />
      }
      <p> Mostrando {(currentPage -1) * RESULT_PER_PAGE + 1} -{' '} {Math.min(currentPage * RESULT_PER_PAGE, total)} de {total} Resultados</p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    </section>
  </main>


    
  )
}

export default SearchPage
