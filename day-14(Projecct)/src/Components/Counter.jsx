import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <>
    <section className="ftco-counter" id="section-counter">
<div className="container-fluid px-0">
<div className="row no-gutters">
<div className="col-md-3 justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center py-5">
<div className="text">
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-users"></span>
</div>
<strong ><CountUp end={98087} duration={5} className="number">0</CountUp></strong>
<span>Members</span>
</div>
</div>
</div>
<div className="col-md-3 justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center py-5">
<div className="text">
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-user"></span>
</div>
<strong className="number"><CountUp end={309} duration={5} >0</CountUp></strong>
<span>Pastors</span>
</div>
</div>
</div>
<div className="col-md-3 justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center py-5">
<div className="text">
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-money"></span>
</div>
<strong className="number" ><CountUp end={9350500} duration={5} >0</CountUp></strong>
<span>Donation</span>
</div>
</div>
</div>
<div className="col-md-3 justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center py-5">
<div className="text">
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-home"></span>
</div>
<strong className="number" data-end=""><CountUp end={206} duration={5} >0</CountUp></strong>
<span>Churches</span>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
)
}

export default Counter