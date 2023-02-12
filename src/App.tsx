import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./button.module.scss";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./index.scss";
function App() {
  return (
    <div>
      Counter
      <span className={styles.red}></span>
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
