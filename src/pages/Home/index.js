import React from "react";

import Header from "../../components/Header";
import List from "../../components/List";
import {
  Container,
  Banner,
  Pattern,
  Box,
  Debruy,
  Label1,
  Label2,
  Shape,
} from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Banner>
        <Pattern />
        <Box>
          <Label1 />
          <Debruy />
          <Label2 />
        </Box>
      </Banner>
      <Shape />
      <List />
    </Container>
  );
}

export default Home;
