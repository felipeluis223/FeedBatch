import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Home({onLogout}){
	return (
		<section className='w-full h-screen bg-[#242424]'>
			<Header onLogout={onLogout}/>
			<Outlet />
		</section>
	)
}

export default Home