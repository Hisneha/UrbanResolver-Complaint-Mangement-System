import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Picture from '../components/Picture'
import Logo from '../components/Logo'
import Complaints from '../components/Complaints'
import Feature from '../components/Feature'



export default function Home() {
    return (
        <div>
            <div><Logo/></div>
            <div><Picture/></div>
            <div><Navbar /></div>
            <div><Complaints/></div>
            <div><Feature/></div>
            <div><Footer /></div>
        </div>
    )
}
