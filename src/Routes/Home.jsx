import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const {
    state: { data },
  } = useContextGlobal();

  return (
    <main >
      <h1>Home</h1>
      <div className="card-grid">
        {data?.map((user) => (
          <Card
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
