import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react'
const Header = (props) => {
  return (
    <div id="top-block">
      <Flex id="header" direction="row" justify="space-evenly">
        <Heading id="title" as="h1" size="xl">
          The Mushroom Log
        </Heading>
        <img id="header-img" src={require("./mushroom-svgrepo-com.svg")} alt="morel.jpeg"/>
      </Flex>
      <Heading as="h2" id="subheader" size="md" >
        A diary for foragers
      </Heading>
    </div>
  );
};

export default Header;
