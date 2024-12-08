import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <h2>Job Tracking</h2>

      <nav>
        <NavLink to="/">Job List</NavLink>
        <NavLink to="/create">Add Job</NavLink>
      </nav>
    </header>
  );
};

export default Header;
