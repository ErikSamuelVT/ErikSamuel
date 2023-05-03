function Card({ img, title, alt, link }) {
    return (
        <div className="card shadow mx-2 mb-3" style={{ width: "18rem", height: '20rem' }}>
            <img src={img} className="card-img-top" width={300} height={200} alt={alt} title={alt} />
            <div className="card-body">
                <h5 className="card-title text-dark text-center mb-4">{title.toUpperCase()}</h5>
                
                <div className="d-flex justify-content-center w-100">
                <a href={`https://www.github.com/ErikVillarreal-bit/${link}`} className="btn bg-app-1 text-white" rel="noreferrer" target="_blank">Ver proyecto</a>
                </div>
            </div>
        </div>
    )
}

export default Card