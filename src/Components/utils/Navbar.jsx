import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContextGlobal } from "./utils/global.context";
import THEME from "./utils/theme-colors";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {
    dispatch,
    state: { theme },
  } = useContextGlobal();

  return (
    <nav
      className="nav"
      style={{ backgroundColor: THEME[theme].navbar.backgroundColor }}
    >
      <div className="logo">
        <h2 className="text text-red">D</h2>
        <h2 style={{ color: THEME[theme].navbar.text }} className="text">H</h2>
        <h2 style={{ color: THEME[theme].navbar.text }} className="text-name">Odonto</h2>
      </div>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <NavLink className="link" style={{ color: THEME[theme].navbar.text }} to={""}>
          Home
        </NavLink>
        <NavLink className="link"
          style={{ color: THEME[theme].navbar.text }}
          to={"contacto"}
        >
          Contact
        </NavLink>
        <NavLink className="link" style={{ color: THEME[theme].navbar.text }} to={"favs"}>
          Favs
        </NavLink>
        <button
          className="button"
          onClick={() => dispatch({ type: "toggleTheme" })}
        >
          Change theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
