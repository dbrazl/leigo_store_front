import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "../../store/modules/route/actions";
import { indexProductsRequest } from "../../store/modules/products/actions";

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
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoute("Principal"));
    dispatch(indexProductsRequest());
    window.scrollTo(0, 0);
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
      <List products={products} />
    </Container>
  );
}

export default Home;
