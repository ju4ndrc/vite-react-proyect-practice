import {JobCard} from './JobCard.jsx'
import jobsData from '../data.json'

export default function JobListings(){
    return(
        <>
        <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
      
        {/*<!-- Aquí se insertan los empleos dinámicamente -->*/}

        {jobsData.map(job =>(
          // Las llaves no se pueden omitir ni duplicar
          <JobCard key={job.id} job={job}/>
        ))}
      </div>

        </>
    )
}