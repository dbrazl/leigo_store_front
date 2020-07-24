import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import asset1 from "../../assets/images/items/asset1.png";
import asset2 from "../../assets/images/items/asset2.png";

import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeOneFromCart,
  removeFromCart,
} from "../../store/modules/cart/actions";

import Content from "../Content";
import {
  Container,
  Search,
  Icon,
  Input,
  WrapperMenu,
  Menu,
  Label,
  WrapperList,
  Item,
  Name,
  Controller,
  Minus,
  Count,
  Plus,
  Trash,
  Board,
  Photo,
  Price,
} from "./styles";

function List() {
  const [nav, setNav] = useState("Todos");
  const categories = [
    "Todos",
    "Camisas",
    "Blusas",
    "Bones",
    "Casacos",
    "Meia",
    "Shorts",
    "Copos",
    "Canecas",
    "Tirantes",
  ];

  // const products = useSelector((state) => state.products.products);
  // const categories = useSelector((state) => state.products.categories);
  const productsOnCart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

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

  const [filtered, setFiltered] = useState(products);

  function selectCategorie(event) {
    const tab = event.target.innerHTML;

    setNav(tab);

    if (tab !== "Todos") {
      const filter = products.filter((item) => item.category === tab);
      setFiltered(filter);
    } else setFiltered(products);
  }

  function searchProduct(term) {
    if (term.length > 0) _.debounce(() => search(term), 500)();
    else setFiltered(products);
  }

  function search(term) {
    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFiltered(filter);
  }

  function renderLabel(name) {
    const selected = categories.find((item) => item === nav);

    if (name === selected)
      return (
        <Label onClick={selectCategorie} selected>
          {name}
        </Label>
      );

    return <Label onClick={selectCategorie}>{name}</Label>;
  }

  function renderItem(product) {
    const onCart = productsOnCart.find((item) => item.id === product.id);
    const price = product.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    if (product.stock > 0) {
      return (
        <Item>
          <Board to={`/product/${product.id}`}>
            <Photo imageSmall={product.imageSmall} src={product.image} />
            <Price>{price}</Price>
          </Board>
          <Name>{product.name}</Name>
          <Controller>
            <Minus onClick={() => dispatch(removeOneFromCart(product))} />
            <Count>{onCart ? onCart.amount : 0}</Count>
            <Plus onClick={() => dispatch(addToCart(product))} />
            <Trash onClick={() => dispatch(removeFromCart(product))} />
          </Controller>
        </Item>
      );
    }
  }

  return (
    <Container>
      <Content>
        <Search>
          <Input
            placeholder="Filtrar"
            onChange={(event) => searchProduct(event.target.value)}
          />
          <Icon />
        </Search>
        <WrapperMenu>
          <Menu>{categories.map((name) => renderLabel(name))}</Menu>
        </WrapperMenu>
        <WrapperList>
          {filtered.map((product) => renderItem(product))}
        </WrapperList>
      </Content>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

export default List;
