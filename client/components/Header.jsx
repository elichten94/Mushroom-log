import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react'
const Header = (props) => {
  return (
    <div id="top-block">
        <Heading id="title" as="h1" size="2xl">
          The Mushroom Log
        </Heading>
        <img id="header-img" src={require("../assets/mushroom-svgrepo-com.svg")} alt="mushroom.svg"/>
        <Heading as="h3" id="map-banner">
          Scroll through the map to add your favorite spots!
        </Heading>
    </div>
  );
};

export default Header;
