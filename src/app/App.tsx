import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";


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
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
