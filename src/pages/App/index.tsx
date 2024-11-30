import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <nav className="flex w-full items-center justify-center bg-slate-400">
        <Link to="/before-after" className="hover:underline">
          Before & After
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default App;
