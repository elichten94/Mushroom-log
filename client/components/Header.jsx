import React from 'react';

const Header = (props) => {
  return (
    <div id="top-block">
      <div id="header">
        <h1 id="title">The Mushroom Log</h1>
        <img id="header-img" src={require("./mushroom-svgrepo-com.svg")} alt="morel.jpeg"/>
      </div>
    </div>
  );
};

export default Header;
