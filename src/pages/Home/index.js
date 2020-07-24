import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setRoute } from "../../store/modules/route/actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute("Principal"));
  }, []);

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
