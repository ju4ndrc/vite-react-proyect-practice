import {JobCard} from './JobCard.jsx'


export default function JobListings({jobs}){
    return(
        <>
        <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
      
        {/*<!-- Aquí se insertan los empleos dinámicamente -->*/}

        {jobs.map(job =>(
          // Las llaves no se pueden omitir ni duplicar
          <JobCard key={job.id} job={job}/>
        ))}
      </div>

        </>
    )
}