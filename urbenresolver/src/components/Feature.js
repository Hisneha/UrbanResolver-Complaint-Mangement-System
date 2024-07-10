import React from 'react'
import { Link } from 'react-router-dom'

export default function Feature() {
    return (
        <div><div className="row">
            <div className="col-sm-6">
                <div className="card bg-success">
                    <div className="card-body">
                        <h5 className="card-title fs-2">Register Complaint</h5>
                        <p className="card-text fs-4 fw-bold">Welcome to our complaint resolution platform!</p>
                        <p className="card-text fs-5">
                            We understand that issues can arise in any community, and your feedback is essential for addressing them
                            effectively. Whether it's a pothole on your street, a noisy neighbor,
                            or a concern about public health, we're here to help.</p>
                            {(!localStorage.getItem("authToken"))?
                            <div>
                        <Link to="/login" className="btn btn-primary fs-5  ">Fill the form</Link>
                        </div>
                        :
                        <div><Link to="/registercomplaint" className="btn btn-primary fs-5">Fill the form</Link>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h5 className="card-title fs-2">Check Complaint Status</h5>
                        <p className="card-text fs-4 fw-bold">Stay Informed, Stay Engaged</p>
                        <p className="card-text fs-5">
                        We understand that you're eager to know the status of your complaint, and we're 
                        committed to keeping you informed every step of the way. With our complaint status
                         tracking feature, you can easily stay updated on the progress of your reported issue.</p>
                            <Link to="/complaintData" className="btn btn-primary fs-5">Check</Link>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
