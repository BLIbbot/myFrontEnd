import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav id="NavBar">
        <div id="NavFlex1">
          <Link id={"Title"} to="/articles">
            <h1> Welcome to a smaller version of wikipedia</h1>
          </Link>
        </div>
        <div id="NavFlex2">
          <Link className={"NavButton"} to="/articles">
            Home
          </Link>
          <Link className={"NavButton"} to="/topics">
            Topics
          </Link>
        </div>
      </nav>
    </>
  );
};
