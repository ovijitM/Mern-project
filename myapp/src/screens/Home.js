import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Crousel from "../components/Crousel"


export default function Home() {
    return (
        <>
            <div><Navbar /></div>
            <div><Crousel/></div>
            <div className='flex flex-wrap'>
            <div className='p-3'><Card/></div>
            <div className='p-3'><Card/></div>
            <div className='p-3'><Card/></div>
            <div className='p-3'><Card/></div>
            </div>
            <div><Footer /></div>
        </>
    )
}
