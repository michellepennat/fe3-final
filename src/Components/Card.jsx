import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useContextGlobal } from "./utils/global.context";
import Storage from "./utils/storage";
import THEME from "./utils/theme-colors";

const Card = ({ name, username, id }) => {
  const [favs, setFavs] = useState(Storage.get("favs"));
  const {
    state: { theme },
  } = useContextGlobal();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: THEME[theme].card.backgroundColor,
      }}
    >
      <Link to={`detail/${id}`}>
        <img src="./images/doctor.jpg" alt={username} />

        <p
          style={{
            color: THEME[theme].card.titleColor,
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: THEME[theme].card.descriptionColor,
          }}
        >
          {username}
        </p>
      </Link>
      <button
        style={{
          color: THEME[theme].card.buttonColor,
          width: "100%",
        }}
        onClick={addFav}
        className="button"
      >
        Add fav ⭐
      </button>
    </div>
  );
};

export default Card;
