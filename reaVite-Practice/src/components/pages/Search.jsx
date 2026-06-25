import { useEffect, useEffectEvent, useReducer, useState } from 'react'

import toast from 'react-hot-toast'
import { ClipLoader } from "react-spinners";

import SearchFormSection from '../SearchFormSection.jsx'
import JobListings from '../JobListings.jsx'
import Pagination from '../Pagination.jsx'
import jobsData from '../../data.json'
import '../../App.css'
import { use } from 'react'

import styles from './Search.module.css'

const RESULT_PER_PAGE = 4
const INITIAL_FILTER = {
      technology:'',
      location: '',
      experienceLevel: ''
}
const useFilters = ()=>{

     const [filters, setFilters] = useState({
      technology:'',
      location: '',
      experienceLevel: ''
  })

  const hasActiveFilters = (filters)=>{
    return(Object.values(filters).some(valor=>valor !==''))
  }
  const activeFilters = hasActiveFilters(filters)
  
  const [textToFilter, setTextToFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [jobs,setJobs] = useState([])
  const [total,setTotal]= useState(0)
  const [loading,setLoading] =useState(true)
  useEffect(()=>{
    async function fetchJobs() {
      try{
        setLoading(true)
        const params = new URLSearchParams()
        if(textToFilter)params.append(textToFilter,textToFilter)
        if(filters.technology)params.append('technology',filters.technology)
        if(filters.location)params.append('type',filters.location)
        if(filters.experienceLevel)params.append('level',filters.experienceLevel)
        
        // await new Promise ((resolve)=>setTimeout(resolve,5000)) //aqi carga por 5 egundo para darle tiempo a la api y no tarde la ui (Esto se debe remover al subir a produccion)
        const offset = (currentPage -1 ) * RESULT_PER_PAGE
        params.append('limit',RESULT_PER_PAGE)
        params.append('offset',offset)
        const queryParams = params.toString()
        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
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
  },[filters,textToFilter,currentPage])

  const totalPages = Math.ceil(total / RESULT_PER_PAGE)
  
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
  
  const handleClearFilters =(activeFilters)=>{
    document.querySelector('#empleos-search-form').reset()  
    setFilters(INITIAL_FILTER)
    toast('Filtros limpios',{
      icon:'🧹',
    })
      
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
    handleClearFilters,
    activeFilters
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
    handleClearFilters,
    activeFilters
 
  } = useFilters()

    useEffect(()=>{
      document.title = `Pagina${currentPage} `
      return 
    },[jobs,currentPage])
  return (
    
    

  <main>

    <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} activeFilters={activeFilters} onClearFilters={handleClearFilters}></SearchFormSection>
    
    <section>
      {/* jobs={jobs.data} -> Tiene los empleos */}
      

      {
        loading ? <ClipLoader 
                color='white'
       
        id={styles.loader}
        aria-label="Loading Spinner"
        data-testid="loader"
          /> :<JobListings jobs={jobs} />
      }
      <p> Mostrando {(currentPage -1) * RESULT_PER_PAGE + 1} -{' '} {Math.min(currentPage * RESULT_PER_PAGE, total)} de {total} Resultados</p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    </section>
  </main>


    
  )
}

export default SearchPage
