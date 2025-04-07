import React from "react";

 export const Header = ({ title }) => {
  return (
    <header className="font-bold text-2xl underline pt-2 pb-7">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};

export default Header;
