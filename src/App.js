import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random user");

  const handleValue = (event) => {
    console.log(event.target);
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser></FaUser>
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
            <button
              className="icon"
              data-label="calender"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button className="icon" data-label="map" onMouseOver={handleValue}>
              <FaMap></FaMap>
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone></FaPhone>
            </button>
            <button
              className="icon"
              data-label="lock"
              onMouseOver={handleValue}
            >
              <FaLock></FaLock>
            </button>
          </div>
          <button className="btn" type="button">
            {isLoading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
