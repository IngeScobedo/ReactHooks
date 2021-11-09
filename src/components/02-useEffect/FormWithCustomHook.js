
import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    mail: "",
    role: '',
    password: ''
  });
  let { name, mail, role, password } = formValues;

  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log(JSON.stringify(formValues));
   fetch('https://rest-server-svj.herokuapp.com/api/users',{
       method: 'POST',
       headers: {'Content-Type' : 'application/json'},
       body: JSON.stringify(formValues)
  })
   .then(res => console.log(res))
   .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
          name="mail"
          className="form-control"
          placeholder="Your email..."
          autoComplete="off"
          value={mail}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="role"
          className="form-control"
          placeholder="Your role..."
          autoComplete="off"
          value={role}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};
