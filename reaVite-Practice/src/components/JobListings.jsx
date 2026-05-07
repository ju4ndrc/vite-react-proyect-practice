export default function JobListings(){
    return(
        <>
        <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
        <JobCard></JobCard>
        {/*<!-- Aquí se insertan los empleos dinámicamente -->*/}
      </div>

        </>
    )
}