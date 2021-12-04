import React from 'react';

const Header = (props) => {
  return (
    <div id="top-block">
      <div id="header">
        <h1 id="title">The Mushroom Log</h1>
        <img id="header-img" src={require("./mushroom-svgrepo-com.svg")} alt="morel.jpeg"/>
      </div>
      <div id="subheader">
        <h2>A forager's diary</h2>
      </div>
    </div>
  );
};

export default Header;
