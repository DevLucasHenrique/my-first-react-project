import HomePage from "./components/home/HomePage";
import axios from "axios";
import { Route, Routes } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  
  const getRecipes = async () => {
    const resp = await axios.get("https://dummyjson.com/recipes");
    setRecipes(resp.data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />}></Route>
      </Routes>
    </>
  );
}

export default App;
