import { useState } from "react";
import validation from "../../Validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "", //llamar igual al name del input asi funciona el handleChange en []
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData, //copio mi estado actual
      [event.target.name]: event.target.value //igualo el estado name a mi input para controlar lo que el usuario escribe
    }); // [] no conozco el nombre exacto de la propiedad del objeto (email o password)

    setErrors(validation(userData));
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
  }


  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <hr style={{ borderStyle: "none" }} />

      {errors.email !== "" && <p style={{ color: "red" }}>{errors.email}</p>}

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />

      {errors.password !== "" && <p style={{ color: "red" }}>{errors.password}</p>}

      <hr style={{ borderStyle: "none" }} />

      <button type="submit" onClick={handleSubmit}>Submmit</button>
    </form>
  );
};

export default Form;
