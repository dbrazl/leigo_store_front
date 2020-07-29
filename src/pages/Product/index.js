import React, { useState, useEffect } from "react";

import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../store/modules/cart/actions.js";
import { setRoute } from "../../store/modules/route/actions";

import { useDispatch, useSelector } from "react-redux";
import { indexOneProductRequest } from "~/store/modules/products/actions";

import Header from "../../components/Header";

import {
  Container,
  Name,
  Description,
  Controller,
  Minus,
  Count,
  Plus,
  Trash,
  Board,
  Photo,
  Price,
  Total,
  Label,
  Value,
  Facebook,
  Whatsapp,
  Email,
  Social,
  Tags,
  Tag,
  Content,
  Info,
} from "./styles";

function Product({ match: { params } }) {
  const { id } = params;

  const product = useSelector((state) => state.products.product);
  const totalCart = useSelector((state) => state.cart.total);
  const productsCart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(setRoute("Product"));
    dispatch(indexOneProductRequest({ id }));
  }, []);

  // useEffect(() => {
  //   setImage(product.image);

  // }, [product])

  const price = product.unit_price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const total = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let count = 0;

  productsCart.forEach((product) => {
    if (product.id === product.id) count = product.amount;
  });

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Board>
            <Photo
              imageSmall={product.image.image_small}
              src={product.image.uri}
            />
            <Price>{price}</Price>
          </Board>
          <Info>
            <Name>{product.name}</Name>
            <Tags>
              <Label>tags:</Label>
              <Tag>
                {product.categories.map((category) => category.category)}
              </Tag>
            </Tags>
            <Description>{product.description}</Description>
            <Controller>
              <Minus onClick={() => dispatch(removeOneFromCart(product))} />
              <Count>{count}</Count>
              <Plus onClick={() => dispatch(addToCart(product))} />
              <Trash onClick={() => dispatch(removeFromCart(product))} />
            </Controller>
            <Total>
              <Label>total</Label>
              <Value>{total}</Value>
            </Total>
          </Info>
          <Social>
            <FacebookShareButton url={product.image.uri}>
              <Facebook />
            </FacebookShareButton>
            <EmailShareButton url={product.image.uri}>
              <Email />
            </EmailShareButton>
            <WhatsappShareButton url={product.image.uri}>
              <Whatsapp />
            </WhatsappShareButton>
          </Social>
        </Content>
      </Container>
    </>
  );
}

export default Product;
