import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import Storage from "../Components/utils/storage";

const Home = () => {
  const {
    state: { data },
  } = useContextGlobal();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const _fav = Storage.get("favs");
    setFavorites(_fav);
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {data?.map((user) => (
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
      </div>
    </main>
  );
};

export default Home;
