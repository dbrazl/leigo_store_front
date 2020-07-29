import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

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

function List({ noFilters, products, topList }) {
  const [nav, setNav] = useState("Todos");
  const [filtered, setFiltered] = useState(products);
  const [length, setLenght] = useState(products.lenght);

  const productsOnCart = useSelector((state) => state.cart.products);

  let categories = ["Todos"];
  products.forEach((product) => {
    product.categories.forEach((category) => {
      categories.push(category.category);
    });
  });

  useEffect(() => {
    if (products.length !== length) {
      setLenght(filtered.length);
      setFiltered(products);
    }
  }, [products]);

  const dispatch = useDispatch();

  function selectCategorie(event) {
    const tab = event.target.innerHTML;

    setNav(tab);

    if (tab !== "Todos") {
      let filter = [];
      products.forEach((product) => {
        product.categories.forEach((category) => {
          if (category.category === tab) filter.push(product);
        });
      });

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

  function renderCategorie(name) {
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
    const price = product.unit_price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    if (product.stock > 0) {
      return (
        <Item>
          <Board to={`/product/${product.id}`}>
            <Photo imageSmall={product.image_small} src={product.image} />
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
        {!noFilters && (
          <>
            <Search>
              <Input
                placeholder="Filtrar"
                onChange={(event) => searchProduct(event.target.value)}
              />
              <Icon />
            </Search>
            <WrapperMenu>
              <Menu>{categories.map((name) => renderCategorie(name))}</Menu>
            </WrapperMenu>
          </>
        )}
        <WrapperList top={topList}>
          {filtered.map((product) => renderItem(product))}
        </WrapperList>
      </Content>
    </Container>
  );
}

List.propTypes = {
  products: PropTypes.array,
  noFilters: PropTypes.bool,
  topList: PropTypes.number,
};

List.defaultProps = {
  products: [],
  noFilters: false,
  topList: 150,
};

export default List;
