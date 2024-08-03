import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
<div className="container">
<a className="navbar-brand" ><span className="flaticon-bible"></span>Christian</a>
<button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="oi oi-menu"></span> Menu
</button>
<div className="collapse navbar-collapse" id="ftco-nav">
<ul className="navbar-nav nav ml-auto">
<li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
<li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
<li className="nav-item"><a href="#sermons-section" className="nav-link"><span>Sermons</span></a></li>
<li className="nav-item"><a href="#events-section" className="nav-link"><span>Events</span></a></li>
<li className="nav-item"><a href="#causes-section" className="nav-link"><span>Causes</span></a></li>
<li className="nav-item"><a href="#blog-section" className="nav-link"><span>Blog</span></a></li>
<li className="nav-item"><a href="#pastor-section" className="nav-link"><span>Pastor</span></a></li>
<li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
</ul>
</div>
</div>
</nav>
<OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
</OwlCarousel>;
    </>
  );
};

export default Navbar;
