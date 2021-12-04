import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react'
const Header = (props) => {
  return (
    <div id="top-block">

        <Heading id="title" as="h1" size="2xl">
          The Mushroom Log
        </Heading>
        <img id="header-img" src={require("./mushroom-svgrepo-com.svg")} alt="morel.jpeg"/>
    </div>
  );
};

export default Header;
