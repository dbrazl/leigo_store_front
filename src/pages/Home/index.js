import React, { useEffect } from "react";

import asset1 from "../../assets/images/items/asset1.png";
import asset2 from "../../assets/images/items/asset2.png";

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
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Caneca JOIA 2018",
      image: asset1,
      imageSmall: true,
      stock: 5,
      amount: 0,
      category: "Canecas",
      price: 30.0,
    },
    {
      id: 2,
      name: "Camisa Intereng 2019",
      image: asset2,
      imageSmall: false,
      stock: 5,
      amount: 0,
      category: "Camisas",
      price: 25.0,
    },
    {
      id: 3,
      name: "Caneca JOIA 2018",
      image: asset1,
      imageSmall: true,
      stock: 1,
      amount: 0,
      category: "Canecas",
      price: 30.0,
    },
    {
      id: 4,
      name: "Camisa Intereng 2019",
      image: asset2,
      imageSmall: false,
      stock: 5,
      amount: 0,
      category: "Camisas",
      price: 25.0,
    },
  ];

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
