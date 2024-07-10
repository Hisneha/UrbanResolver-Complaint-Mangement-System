import React, { } from 'react';
import noise from './img/noise.png';
import SubCard from '../components/SubCard'

export default function Card(props) {

    const { categoryName } = props;
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card mt-3">
                        <img src={noise} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3">{categoryName}</h5>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        {props.description}
                                    </p>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header fs-5">
                                    SubCatgories
                                </div>
                                <div className="card-body">
                                    <div>
                                    {props.subcategories.map((subcategory, index) => (
                                        <SubCard 
                                            key={index}
                                            name={subcategory.name}
                                            description={subcategory.description}
                                            imageURL={subcategory.imageURL}
                                        />
                                    ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
