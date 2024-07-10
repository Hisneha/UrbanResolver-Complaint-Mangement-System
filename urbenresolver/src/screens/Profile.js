import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Picture from '../components/Picture'
import Logo from '../components/Logo'
import UserName from '../components/UserName'



export default function Profile() {
    return (
        <div>
            <div><Logo/></div>
            <div><Picture/></div>
            <div><Navbar /></div>
            <div><UserName/> </div>
            <div><Footer /></div>
        </div>
    )
}
