import AdminPanel from '@/components/AdminPanel'
import Login from '@/components/Input'
import React from 'react'
import style from '../styles/Admin.module.css'
import Navbar from '@/components/Navbar'

export default function Admin() {
  return (
    <>
       <AdminPanel></AdminPanel>
       {/* <Navbar></Navbar> */}
       <div className={style.container}>
        <Login></Login>
        </div>      
    </>
  )
}
