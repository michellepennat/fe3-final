import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //Aqui deberan implementar el form completo con sus validaciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 5)
      return setMessage("Por favor verifique su información nuevamente");
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      return setMessage("Por favor verifique su información nuevamente");

    setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          onChange={(e) => setName(e.target.value)}
          minLength="5"
          type="text"
        />
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <button type="submit" className="button">
          Send
        </button>
      </form>
      <p className="message">{message}</p>
    </>
  );
};

export default Form;
