import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarb = () => {
  return (
    <>
<Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-dark" >
      <Container  className="container">
        <Navbar.Brand href="#home" className="text-light">Christian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" ><li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#sermons-section" className="nav-link"><span>Sermons</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#events-section" className="nav-link"><span>Events</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#causes-section" className="nav-link"><span>Causes</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#blog-section" className="nav-link"><span>Blog</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#pastor-section" className="nav-link"><span>Pastor</span></a></li></Nav.Link>
            <Nav.Link href="#link"><li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/*  */}
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/christian/images/bg_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        {/* <div class="slider-item js-fullheight" > */}
        {/* <div class="overlay"></div> */}
        {/* <div class="container"> */}
{/* <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"> */}
{/* <div class="col-md-8 text-center ftco-animate mt-5"> */}
<div className="text">
<div className="subheading">
<span>Christian Church</span>
</div>
<h1 className="mb-4">Following <span>Jesus</span> wherever we are</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<p><a href="#" className="btn btn-primary py-2 px-4">Be part of us</a> <a href="#" className="btn btn-primary btn-outline-primary py-2 px-4">Read more</a></p>
</div>
{/* </div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/christian/images/bg_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="text">
<div className="subheading">
<span>Christian Church</span>
</div>
<h1 className="mb-4">We <span>Love</span> God, We Believe in God</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<p><a href="#" className="btn btn-primary py-2 px-4">Be part of us</a> <a href="#" className="btn btn-primary btn-outline-primary py-2 px-4">Read more</a></p>
</div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </>
  );
};

export default Navbarb;
