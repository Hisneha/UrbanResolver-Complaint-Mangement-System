import React from 'react'
import Logo from '../components/Logo'
import Picture from '../components/Picture'
import Navbar from '../components/Navbar'
import Admin from '../components/Admin'

export default function AdminHome() {
  return (
    <div>
      <div><Logo /></div>
      <div><Picture /></div>
      <div><Navbar /></div>
      <div><Admin /></div>
    </div>
  )
}
