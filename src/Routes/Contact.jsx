import React from "react";
import Form from "../Components/Form";
import { useContextGlobal } from "../Components/utils/global.context";
import THEME from "../Components/utils/theme-colors";
import "./contact.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {
    state: { theme },
  } = useContextGlobal();

  return (
    <div
      className="contact"
      style={{
        backgroundColor: THEME[theme].contact.backgroundColor,
        color: THEME[theme].contact.color,
      }}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
