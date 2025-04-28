import React from "react";

 export const Header = ({ title }) => {
  return (
    <header className="font-bold text-4xl underline pt-4 pb-5 mb-7 bg-blue-500 rounded-t-2xl">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};

export default Header;
