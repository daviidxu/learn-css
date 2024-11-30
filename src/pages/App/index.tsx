import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <nav className="flex w-fit items-center justify-center gap-2">
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className="hover:underline">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default App;
