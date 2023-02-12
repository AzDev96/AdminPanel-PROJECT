import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";
function App() {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <li>
        <Link to={"/"}>Glavnaya</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <Suspense fallback={<div>... LOading</div>}>
        <Routes>
          <Route path={"/"} element={<AboutPageAsync />} />
          <Route path={"/about"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
