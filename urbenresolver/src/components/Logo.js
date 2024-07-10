import React from 'react'
import logo from './img/punelogo1.png'

export default function Logo() {
    return (
        
        <div>
            <div>
            <span className="border border-dark fs-5 col-md-6 px-3 py-2 mb-3">महाराष्ट्र शासन</span>
            <span className="border border-dark fs-5 col-md-6 px-3 py-2 mb-3">Goverment of Maharashtra</span>
            <hr className="my-1 "></hr>
            </div>
            
            <figure className="figure col-md-5">
            <img src={logo} className="figure-img img-fluid rounded" alt="..." />
            <div className="figure-caption2  d-inline  fs-5 fw-bold text-success ">
             Complaint management system
                </div>
        </figure>
            <div className="figure-caption  d-inline col-md-5 text-center fs-1 fw-bold text-dark ">
                UrbanResolver
                </div>
                <hr className="my-1 "></hr>
        </div>
    )
}
