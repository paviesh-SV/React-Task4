import React from "react";

// Creating the template of the card with header, body and footer
const CardTemplate = ({data}) => {
    return(
        <>
            <div className="col">
                <div className="card h-100">
                    <img 
                        src={data.img}
                        className="card-img-top image-width-box-shadow"
                        height="200"
                    />

                    <div className="car-body">
                        <h4 className="card-title">{data.title}</h4>
                        <p className="card-description">{data.description}</p>
                        <p className="card-more">Read More</p>
                    </div>

                    <div className="card-footer">
                        <small className="custom-card-footer">
                            {data.date}
                            <li>
                                Informative
                            </li>
                        </small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTemplate