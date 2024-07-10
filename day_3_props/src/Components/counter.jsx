import { useState } from "react";
// import '../Components/img'

function Counter() {
  const [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }
  function minus() {
    if (count > 0) {
      setCount(count - 1);
    }
   
  }

  return (
  <div className="post">
		<div className="video">
            <img src="https://gudstory.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/07/06080423/CarryMinati-Gets-30-Million-Subscribers.jpg" className="thumbnail" alt=""/>
            <div className="content">
                <img src="https://tse1.mm.bing.net/th?id=OIP.wCz9ygXEz4dIDZHoQkbkRAHaHa&pid=Api&P=0&h=180" classNameName="channel-icon" alt=""/>
                <div className="info">
                    <h4 className="title">RARE INDIAN STREET FOOD....YUMMYY🤤| CARRYMINATI</h4>
                    <p className="channel-name">Carryminati</p>
                </div>
            </div>
        </div>
		<div className="post-ratings-container">
			<div className="post-rating">
				<span className="post-rating-button material-icons" onClick={Add}><i class="fa-regular fa-thumbs-up"></i></span>
				<span className="post-rating-count">{count}</span>
			</div>
			<div className="post-rating">
				<span className="post-rating-button material-icons" disabled={count == 0} onClick={minus}><i class="fa-regular fa-thumbs-down"></i></span>
			</div>
		</div>
	</div>
  );
}
export default Counter;
