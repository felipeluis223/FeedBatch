import { Outlet } from 'react-router-dom'

function Home(){
	return (
		<section style={{background: 'red', width: 400, height: 400}}>
			<Outlet />
		</section>
	)
}

export default Home