import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "light", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "setUsersData":
      return { ...state, data: action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      dispatch({ type: "setUsersData", payload: data });
    }
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
