import React from "react";
import { useState } from "react";

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

  return (
    <>
      <h1>our new student is {student.name}</h1>
      <button type="button" onClick={updateis}>change name</button>
    </>
  );
}

export default Home;
