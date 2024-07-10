import React from 'react';
import { Link } from 'react-router-dom';

export default function Complaints(props) {
    return (
        <div className='row'>
            <div className='complaint text-center text-warning fs-4 fw-bold mt-4'>Complaint Category</div>
            <div className="list-group col-md-5 fs-5">
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Noise Complaints" } }} className="list-group-item list-group-item-action list-group-item-warning">Noise Complaints</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Public Facility Maintenance" } }} className="list-group-item list-group-item-action list-group-item-secondary">Public Facility Maintenance</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Law Enforcement Concerns" } }} className="list-group-item list-group-item-action list-group-item-success">Law Enforcement Concerns</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Housing and Property Concerns" } }} className="list-group-item list-group-item-action list-group-item-danger">Housing and Property Concerns</Link>
            </div>
            <div className="list-group col-md-5 fs-5">
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Infrastructure Issues" } }} className="list-group-item list-group-item-action list-group-item-warning">Infrastructure Issues</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Public Health and Safety" } }} className="list-group-item list-group-item-action list-group-item-dark">Public Health and Safety</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Environmental Concerns" } }} className="list-group-item list-group-item-action list-group-item-light">Environmental Concerns</Link>
                <Link to={{ pathname: "/compscrren", state: { categoryName: "Transportation and Traffic Issues" } }} className="list-group-item list-group-item-action list-group-item-dark">Transportation and Traffic Issues</Link>
            </div>
            <p className='info bg-warning mt-4 text-center text-light fs-4 fw-bold px-3 py-2 mb-3'>Get more information About Complaints</p>
        </div>
    )
}
