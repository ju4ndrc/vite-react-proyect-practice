import { useState } from "react"
import toast from "react-hot-toast"
import {Link} from "./Link"
import styles from './JobCard.module.css'
import { useFavoritesStore } from "../store/favoritesStore.js"
import { useAuthStore } from "../store/authStore.js"

function JobCardFavoriteButton({jobId}){
  const {toggleFavorite, isFavorite} = useFavoritesStore()
  const {isLoggedIn} = useAuthStore()
  return(
    <button disabled={!isLoggedIn} onClick={()=> toggleFavorite(jobId)}>  {isFavorite(jobId)?'❤️':'🤍'}  </button>
  )
}

function JobCardApplyButton({jobId}){

  const [isApplied, setIsApplied] = useState(false)
  const {isLoggedIn} = useAuthStore()

  const buttonClasses = isApplied ? 'button-apply-job is-applied': 'button-apply-job'
  const buttonText = isApplied ? 'Aplicado': 'Aplicar'

  const handleApplyClick = ( ) =>{
    setIsApplied(true)
    toast.success('Has Aplicado')
  }

  return(
    <button disabled={!isLoggedIn} onClick={handleApplyClick} className={buttonClasses}>{buttonText}</button>
  )
}

export default function JobCard({ job }) {



 
  return (
    <article
      className="job-listing-card"
      data-modalidad={job.data.modalidad}
      data-nivel={job.data.nivel}
      data-technology={job.data.technology}
    >
      <div>
        <Link className={styles.title} href={`/job/${job.titulo}`} >
          {job.titulo

          }
        </Link>
        <small>
          {job.empresa} | {job.ubicacion}
        </small>
        <p>{job.descripcion}</p>
      </div>
      <Link href={`/jobs/${job.id}`} className={styles.actions}>Ver detalles</Link>
      <JobCardFavoriteButton jobId={job.id} />
      <JobCardApplyButton jobId={job.id} ></JobCardApplyButton>
      
    </article>
  )
}

