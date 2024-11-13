import React from 'react';
import { useState } from 'react';

 function Home(){
   


  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
  });

 
  const updateColor = () => {
    setCar(soCar => ({ ...soCar, color: "blue" }));
  };

  return (
    <div>
      <h1>{car.brand} {car.model}</h1>
      <p>Color: {car.color}</p>
      <button onClick={updateColor}>Change Color</button>
    </div>
  );
}


    

export default Home;