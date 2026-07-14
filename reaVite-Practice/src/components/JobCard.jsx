import { useState } from "react"
import toast from "react-hot-toast"
import {Link} from "./Link"
import styles from './JobCard.module.css'
import { useFavoritesStore } from "../store/favoritesStore.js"

export default function JobCard({ job }) {

  const [isApplied, setIsApplied] = useState(false)

  const {toggleFavorite, isFavorite} = useFavoritesStore()

  const handleApplyClick = ( ) =>{
    setIsApplied(true)
    toast.success('Has Aplicado')
  }
  const buttonClasses = isApplied ? 'button-apply-job is-applied': 'button-apply-job'
  const buttonText = isApplied ? 'Aplicado': 'Aplicar'
 
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
      <button onClick={()=> toggleFavorite(job.id)}>  {isFavorite(job.id)?'❤️':'🤍'}  </button>
      <button onClick={handleApplyClick} className={buttonClasses}>{buttonText}</button>
      
    </article>
  )
}

