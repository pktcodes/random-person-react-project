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

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { large: image } = person.picture;
    const { first, last } = person.name;
    const { email } = person;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const { phone } = person;
    const {
      login: { password },
    } = person;
    const newPerson = {
      image,
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone,
      password,
    };
    setPerson(newPerson);
    setIsLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (event) => {
    if (event.target.classList.contains("icon")) {
      const newValue = event.target.dataset.label;
      // console.log(newValue);
      // console.log(person);
      setTitle(newValue);
      setValue(person[newValue]);
    }
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
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
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
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock></FaLock>
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {isLoading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
