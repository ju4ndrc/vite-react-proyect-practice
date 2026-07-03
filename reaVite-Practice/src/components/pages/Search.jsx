import { useEffect,useState } from 'react'

import toast from 'react-hot-toast'
import { ClipLoader } from "react-spinners";

import SearchFormSection from '../SearchFormSection.jsx'
import JobListings from '../JobListings.jsx'
import Pagination from '../Pagination.jsx'

import '../../App.css'


import styles from './Search.module.css'
import useRouter from '../../hooks/useRouter.jsx';

const RESULT_PER_PAGE = 4
const INITIAL_FILTER = {
      technology:'',
      location: '',
      experienceLevel: ''
}
const useFilters = ()=>{

     const [filters, setFilters] = useState(()=>{
      const params = new URLSearchParams(window.location.pathname)
      return{
      technology:params.get('technology')||'',
      location: params.get('location')||'',
      experienceLevel: params.get('experienceLevel')||''
    }
  })

  const hasActiveFilters = (filters)=>{
    return(Object.values(filters).some(valor=>valor !==''))
  }
  const activeFilters = hasActiveFilters(filters)
  
  const [textToFilter, setTextToFilter] = useState(()=>{
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })
  const [currentPage, setCurrentPage] = useState(()=>{
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get('page'))
    return Number.isNaN(page)?page:1
    }
  )
  const [jobs,setJobs] = useState([])
  const [total,setTotal]= useState(0)
  const [loading,setLoading] =useState(true)
  const [errors ,setErrors] = useState(null)
  const {navigateTo} = useRouter()
  useEffect(()=>{
    async function fetchJobs() {
      try{
        setLoading(true)
        setErrors(null)
        const params = new URLSearchParams()
        if(textToFilter)params.append('text',textToFilter)
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
        if(!response.ok) throw new Error("Ocurrio un error") //verifico que la repuesta
        setJobs(json.data)
        setTotal(json.total)
      }catch(error){
        setErrors(error.message)
        console.error('Error fetching jobs:',error)
      }finally{
        setLoading(false)
      }
    }

    fetchJobs()
    //  ->  Queda adentro para evitar que se llene desde otro lado
  },[filters,textToFilter,currentPage])

  useEffect(()=>{
    const params = new URLSearchParams()
        if(textToFilter)params.append('text',textToFilter)
        if(filters.technology)params.append('technology',filters.technology)
        if(filters.location)params.append('type',filters.location)
        if(filters.experienceLevel)params.append('level',filters.experienceLevel)
        
          if(currentPage > 1 )params.append('page',currentPage)

            const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}`:window.location.pathname;
            navigateTo(newUrl)
  },[filters,textToFilter,currentPage,navigateTo])

  const totalPages = Math.ceil(total / RESULT_PER_PAGE)
  
  const handlePageChange =  (page)  =>{
   
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
 

  const handleClearFilters =()=>{
    setTextToFilter('')
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
    activeFilters,
    errors,
    textToFilter
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
    activeFilters,
    errors,
    textToFilter
  } = useFilters()



    const renderContent=() =>{
      if(errors){
        return (
          <>
          <p>{errors}</p>
          <button onClick={()=>{window.location.reload()}}>Reintentar</button>

          </>
        )
      }
      else if(loading){
        return(
          <ClipLoader 
                color='white'
       
        id={styles.loader}
        aria-label="Loading Spinner"
        data-testid="loader"
          />
        )
      }else if(!loading){
          return (
            <JobListings jobs={jobs} />
          )
        }
    }


  
   const title = ()=>{
    if(loading) return 'Cargando empleos'
    if(errors) return 'Hubo un problema cargando los empleos'
    if(jobs.length !== 0) return `Resultados ${total} | Pagina  ${currentPage}`

  }
  return (
    
    

  <main>
    <title>{title()}</title>
    <SearchFormSection initialText={textToFilter} onSearch={handleSearch} onTextFilter={handleTextFilter} activeFilters={activeFilters} onClearFilters={handleClearFilters}></SearchFormSection>
    
    <section>
      {/* jobs={jobs.data} -> Tiene los empleos */}
      

      {
        renderContent()
      }
      <p> Mostrando {(currentPage -1) * RESULT_PER_PAGE + 1} -{' '} {Math.min(currentPage * RESULT_PER_PAGE, total)} de {total} Resultados</p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
    </section>
  </main>


    
  )
}

export default SearchPage
