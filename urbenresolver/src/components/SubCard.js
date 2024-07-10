import React from 'react'
import noise from './img/noise.png';

export default function SubCard(props) {

    const { name, description, imageURL } = props;
    

    return (
        <div><div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={noise} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-5">{name}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                </div>
            </div>
        </div></div>
    )
}
