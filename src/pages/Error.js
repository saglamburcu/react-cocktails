import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>Oops! It's A Dead End</h1>
      <NavLink to="/">
        <button type="button">BACK HOME</button>
      </NavLink>
    </div>
  )
};

export default Error;