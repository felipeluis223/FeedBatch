import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function Home({onLogout}){
	const [ userdata, setUserdata ] = useState({ username: '', password: '' });
	return (
		<section style={{background: 'red', width: 400, height: 400}}>
			<Outlet />
		</section>
	)
}

export default Home