import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router"
import styles from './Detail.module.css'
import snarkdown from 'snarkdown';
import { ClipLoader } from "react-spinners";

import { useAuthStore } from "../../store/authStore.js";


function JobSection({title,content}){
    const html = snarkdown(content)

    return(
        
        <section className={styles.section}>
        
        <h2 className={styles.sectionTitle}>
            {title}
        </h2>

        <div
            className={`${styles.sectionContent} prose`}
            dangerouslySetInnerHTML={{
            __html: html
            }}
        />

        </section>
    
    )

}

function DetailPageBreadCrumb({job}){
    return(
    <nav className={styles.breadcrumb}>
      <a href="/search" className={styles.breadcrumbLink}>
        Empleos
      </a>
      <span className={styles.breadcrumbSeparator}>/</span>
      <span className={styles.breadcrumbTitle}> {job.titulo} </span>
    </nav>
    )
}

function DetailPageHeader({job}){
    return(
        <header className={styles.header}>
      <h1 className={styles.title}>{job.titulo}</h1>
      <div className={styles.meta}>
        <p className={styles.company}>{job.company}</p>
        <p className={styles.location}>{job.location}</p>
      </div>
        <DetailApplyButton/>
      
    </header>
    )
}
function DetailApplyButton(){
    const {isLoggedIn}= useAuthStore()
    return(
    <button className={styles.applyButton} disabled={isLoggedIn === true} >  {isLoggedIn === false ? 'Aplicar ahora': 'Iniciar Sesion'} </button>
    )
}



export default function JobDetail(){
    const {jobId} = useParams()
    const navigate = useNavigate()
    const [job,setJob]= useState(null)
    const [loading,setLoading] = useState(true)
    const [error , setError] = useState(null)
    useEffect(()=>{
        
        if(!jobId){
            return
        }
        const controller = new AbortController()
        

        
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`,{
            signal: controller.signal,
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Job not found')
            }
                return response.json()
        })
        .then(json=>{
            
            if(json) {
                setJob(json)
            }
        })
        .catch(err=>{
            setError(err.message)
            setJob(null)
        })
        .finally(()=>{
            setLoading(false)
        })
        return()=>{
            controller.abort()
        }
        
    },[jobId])
    if (loading){
        return (
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                <div className={styles.loading}>
                    <ClipLoader 
                                color='white'
                    
                        id={styles.loader}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        />
                    <p className={styles.loadingText}>Cargando...</p>
                </div>
            </div>
        )
    }
    if(error || !job){
        return(
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <div className={styles.error}>
            <h2 className={styles.errorTitle}>
                Oferta no encontrada
            </h2>
            <button
                onClick={() => navigate('/jobs')}
                className={styles.errorButton}
            >
                Volver al inicio
            </button>
            </div>
        </div>
    )
    }

    return(
        <>     
  <div className={styles.container}>
    {/* Breadcrumb */}
        <DetailPageBreadCrumb job={job}/>

    {/* Header principal */}
        <DetailPageHeader job={job}  />

        <JobSection title='Descripcion del puesto' content={job.content.description} />
        <JobSection title='Responsabilidades' content={job.content.responsibilities} />
        <JobSection title='Requisitos' content={job.content.requirements} />
        <JobSection title='Acerca de la empresa' content={job.content.about} />

        

    {/* Aquí irán las secciones de contenido */}
  </div>
        </>

    )
}