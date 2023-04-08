import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import Storage from "../Components/utils/storage";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const _fav = Storage.get("favs");
    setFavorites(_fav);
  }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      {favorites.length === 0 && (
        <p className="empty">
          No existen favoritos, ve al <NavLink to="/">Inicio</NavLink> y
          agregalos
        </p>
      )}
      <div className="card-grid">
        {favorites?.map((user) => (
          <Card
            isSelected={favorites.find((item) => item.id === user.id)}
            updateFavs={() => {
              const _fav = Storage.get("favs");
              setFavorites(_fav);
            }}
            id={user.id}
            name={user.name}
            username={user.username}
            key={`User-key-${user.id}`}
          />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
