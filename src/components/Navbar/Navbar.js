import style from "./styles.module.css";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <section className={style.title}>
          <NavLink to="" style={{ textDecoration: "none" }}>
            <h1>The<span>Cocktail</span>DB</h1>
          </NavLink>
        </section>
        <section className={style.pages}>
          <NavLink style={{ textDecoration: "none", color: "rgb(53, 49, 49)", letterSpacing: "3px", fontSize: "21px" }} to="">Home</NavLink>
          <NavLink style={{ textDecoration: "none", color: "rgb(53, 49, 49)", letterSpacing: "3px", fontSize: "21px" }} to="about">About</NavLink>
        </section>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;