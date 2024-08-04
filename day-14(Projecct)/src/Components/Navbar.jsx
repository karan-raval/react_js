import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

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
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/christian/images/bg_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/christian/images/bg_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </>
  );
};

export default Navbar;
