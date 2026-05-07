


function JobCard(){

    const {titulo, empresa, ubicacion, descripcion,data} = job
    return(
    <article className="job-card">
      <header className="job-card-header">
        <h3 className="job-title">{job.titulo}</h3>
        <p className="job-company">{job.empresa}</p>
      </header>

      <div className="job-card-body">
        <p className="job-location">📍 {job.ubicacion}</p>
        {/* <p className="job-salary">💰 {job.salary}</p> */}
        <p className="job-description">{job.descripcion}</p>
      </div>

      <footer className="job-card-footer">
        <span className="job-tags">{job.data.join(', ')}</span>
        <button className="btn-apply">Aplicar</button>
      </footer>
    </article>
    )
}

export default JobCard