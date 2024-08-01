import React from 'react'

const Navbar = () => {
  return (
    <>
<div className="top">
<div className="container">
<div className="row d-flex align-items-center">
<div className="col">
<p className="social d-flex">
<a href="#"><span className="icon-facebook"></span></a>
<a href="#"><span className="icon-twitter"></span></a>
<a href="#"><span className="icon-google"></span></a>
<a href="#"><span className="icon-pinterest"></span></a>
</p>
</div>
<div className="col d-flex justify-content-end">
<p className="num"><span className="icon-phone"></span> + 1700 12345 6789</p>
</div>
</div>
</div>
</div>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div className="container">
<a className="navbar-brand" href="index.html">Royal<span>estate</span></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="oi oi-menu"></span> Menu
</button>
<div className="collapse navbar-collapse" id="ftco-nav">
<ul className="navbar-nav ml-auto">
<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
<li className="nav-item"><a href="property.html" className="nav-link">Property</a></li>
<li className="nav-item"><a href="agents.html" className="nav-link">Agents</a></li>
<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
<li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
<li className="nav-item cta"><a href="contact.html" className="nav-link ml-lg-2"><span className="icon-user"></span> Sign-In</a></li>
<li className="nav-item cta cta-colored"><a href="contact.html" className="nav-link"><span className="icon-pencil"></span> Sign-Up</a></li>
</ul>
</div>
</div>
</nav>
    </>
  )
}

export default Navbar