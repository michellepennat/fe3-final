import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favorites from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import "./Components/utils/reset.css"

const routes = [
  {
    path: "",
    Cmp: Home,
  },
  {
    path: "detail/:id",
    Cmp: Detail,
  },
  {
    path: "favs",
    Cmp: Favorites,
  },
  {
    path: "contacto",
    Cmp: Contact,
  },
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map(({ path, Cmp }) => (
          <Route key={`Route-key-${path}`} path={path} element={<Cmp />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
