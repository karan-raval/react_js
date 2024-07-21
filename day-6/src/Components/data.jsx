import React, { useEffect, useState } from "react";

const data = () => {
  const [state, setstate] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.image} alt="" width="150px" height={"150px"} />
            <span>{el.title}</span>
            <h1>price:${el.price}</h1>
          </div>
        );
      })}

      <button onClick={() => setstate(!state)}>Show Data</button>
    </div>
  );
};

export default data;
