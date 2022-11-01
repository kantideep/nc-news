import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="Nav"> 
      <Link to="/articles">Articles</Link>
      <br />
      <Link to="/topics">Topics</Link>
      <br />
      <Link to="/users">Users</Link>
      <br />
      <Link to={`/users/${user}`}>User</Link>
      <br />
    </nav>
  );
};

export default Nav;
