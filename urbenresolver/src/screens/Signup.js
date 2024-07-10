import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", contact: "", geolocation: "", pincode: "",role:" ", password: "" })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, contact: credentials.contact, location: credentials.geolocation, pincode: credentials.pincode, role:credentials.role,password: credentials.password })
        })
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        navigate("/");

    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }


    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name='contact' value={credentials.contact} onChange={onChange} id="contact" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pincode" className="form-label">Pincode</label>
                        <input type="text" className="form-control" name='pincode' value={credentials.pincode} onChange={onChange} id="pincode" />
                    </div>
                    <div>
                        <select name="role" value={credentials.role} onChange={onChange}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already User</Link>
                </form></div></>
    )
}
