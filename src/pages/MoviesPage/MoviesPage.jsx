import React from "react";
import { Outlet } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  return (
    <div className={s.wrapper}>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
