import React from "react";
import { useEffect, useState } from "react";
import "./effects.css";
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  let { name, email } = formState;

  useEffect(() => {
    console.log("hey!");
  }, []);

  let handleInputChange = ({target}) =>{
    setFormState({
        ...formState,
        [target.name]: target.value
    })
  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name..."
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
      </div>
      <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Your email..."
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
      </div>

    {(name === '123') && <Message/>}

    </>
  );
};
