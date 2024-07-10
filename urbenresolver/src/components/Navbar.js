import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate =useNavigate();

const handlelogout = ()=>{
  localStorage.removeItem("authToken");
  navigate("/")

}

const username = localStorage.getItem("username");
console.log(username);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mt-0">
        <div className="container-fluid">
        {(localStorage.getItem("authToken"))?
        <div>
      
          <div className="user fs-2 text-danger ">Welcome <div className="user fs-2 d-inline text-primary"> {username}</div></div>
          
          </div>
          :
          <div className="user fs-2">Welcome </div>
          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2">
              {(localStorage.getItem("Role"))!="admin" ?
              <li className="nav-item">
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/">Home</Link>
              </li>
              :<li className="nav-item">
                <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/admin">Home</Link>
              </li>}
             
              <li className="nav-item">
              <Link className="nav-link active fs-5 mt-3" aria-current="page" to="/">About Us</Link>
            </li>
            
            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className='d-flex'>
              <Link className="btn bg-success text-white mx-1" to="/login">Login</Link>
              <Link className="btn bg-primary text-white mx-1" to="/createuser">SignUp </Link>

            </div>
            :
            <div>
            <Link className="btn bg-success text-white mx-1" aria-current="page" to="/profile">Profile</Link>
          
            <div className="btn bg-danger text-white mx-1" onClick={handlelogout}>Logout </div>
            </div>
}

          </div>
        </div>
      </nav>

    </div>
  )
}
