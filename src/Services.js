function Services(props){
     return(
        <div className="card">
            <div className="card-image-container">
                <img src={props.image} className="card-image"/>
            </div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p>{props.description}</p>
                <div className="card-btn-container">
                    <button className="card-btn">Read More</button>
                </div>
            </div>
        </div>
    )             
}

export default Services;