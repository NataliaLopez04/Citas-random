import React from "react";
/* import "./styles.css"; */
/* import Reference from "./Components/Reference";
import Refresh from "./Components/Refresh"; */
import { useState } from "react";
import quotes from "../quotes.json";

const Refresh = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeReference = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };

  let arrayColor = [
    "#4E6C50",
    "#F0EBCE",
    "#81C6E8",
    "#FF5858",
    "#FF6464",
    "#FF7D7D",
    "#82CD47",
    "#B75AEC",
    "#EC5ACA",
    "#933A4D",
    "#933A6C",
    "#923A93",
    "#633A93",
    "#4B3A93",
    "#3A5593",
    "#3A936E",
    "#3E933A",
    "#938E3A",
    "#936C3A",
  ];

  const colorRandom = Math.floor(Math.random() * arrayColor.length);
  document.body.style = `background: ${arrayColor[colorRandom]}`;
  return (
    <>
      <div className="container">
        <button
          onClick={changeReference}
          style={{ background: arrayColor[colorRandom] }}
        >
          <i class="fa-solid fa-shuffle"></i>
        </button>
        <p style={{ color: arrayColor[colorRandom] }}>
          {`"`}
          {quotes[index].quote}
          {`"`}
        </p>
        <h4 style={{ color: arrayColor[colorRandom] }}>
          {quotes[index].author}
        </h4>
      </div>
    </>
  );
};

export default Refresh;
