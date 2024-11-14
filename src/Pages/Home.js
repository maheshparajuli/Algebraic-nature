import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [student, setinfo] = useState({
    name: "mahesh",
    class: 7,
    roll: 124,
  });
  const updateis = () => {
    setinfo((prevstudent) => {
      return { ...prevstudent, name: "krish" };
    });
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  return (
    <>
      <h1>our new student is {student.name}</h1>
      <button type="button" onClick={updateis}>
        change name
      </button>
      <h2>used {count} times</h2>
    </>
  );
}

export default Home;
