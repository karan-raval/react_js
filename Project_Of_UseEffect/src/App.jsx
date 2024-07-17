import { useState } from 'react'
import './App.css'
import Apiproduct from './Components/Apiproduct.jsx'


function App() {
const [data,setdata]=useState([])

const handleclick=()=>{
	fetch(`https://mock-server-app-4tp9.onrender.com/product`)
	.then(res=>res.json())
	.then((res)=>{
		setdata(res)
	})
	.catch((err)=>{
		console.log(err); 
	})
}

  return (
	<>
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark " arial-label="Furni navigation bar">

			<div className="container">
				<a className="navbar-brand" href="index.html">Furni<span>.</span></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item ">
							<a className="nav-link" href="index.html">Home</a>
						</li>
						<li className="active" ><a className="nav-link" href="#" >Shop</a></li>
						<li><a className="nav-link" href="about.html">About us</a></li>
						<li><a className="nav-link" href="services.html">Services</a></li>
						<li><a className="nav-link" href="blog.html">Blog</a></li>
						<li><a className="nav-link" href="contact.html">Contact us</a></li>
					</ul>
	
					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><p className="nav-link" ><img src="./src/images/user.svg" onClick={handleclick}/></p></li>
						<li><a className="nav-link" href="cart.html"><img src="./src/images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
		<Apiproduct arr={data}/>
		</>
  )
}

export default App
