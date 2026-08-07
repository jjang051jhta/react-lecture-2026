import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/member">Member</Link>
          <Link to="/board">Board</Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
