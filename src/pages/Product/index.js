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

import asset1 from "../../assets/images/items/asset1.png";

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
  const [product, setProduct] = useState(null);

  const products = useSelector((state) => state.products.products);
  const totalCart = useSelector((state) => state.cart.total);
  const productsCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const productMock = {
    id: 1,
    name: "Caneca JOIA 2018",
    image: asset1,
    imageSmall: true,
    stock: 5,
    amount: 0,
    category: "Canecas",
    description: "Copo preto metálico do JOIA 2018 versão kit.",
    price: 30.0,
    url:
      "https://www.facebook.com/atletica.uff/photos/pcb.1220790521600500/1220790488267170/",
  };

  useEffect(() => {
    const { id } = params;
    const finded = products.find((one) => one.id === id);
    setProduct(finded);
    window.scrollTo(0, 0);

    dispatch(setRoute("Product"));
  }, []);

  const price = productMock.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const total = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let count = 0;

  productsCart.forEach((product) => {
    if (product.id === productMock.id) count = product.amount;
  });

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Board>
            <Photo imageSmall={true} src={productMock.image} />
            <Price>{price}</Price>
          </Board>
          <Info>
            <Name>{productMock.name}</Name>
            <Tags>
              <Label>tags:</Label>
              <Tag>canecas</Tag>
            </Tags>
            <Description>{productMock.description}</Description>
            <Controller>
              <Minus onClick={() => dispatch(removeOneFromCart(productMock))} />
              <Count>{count}</Count>
              <Plus onClick={() => dispatch(addToCart(productMock))} />
              <Trash onClick={() => dispatch(removeFromCart(productMock))} />
            </Controller>
            <Total>
              <Label>total</Label>
              <Value>{total}</Value>
            </Total>
          </Info>
          <Social>
            <FacebookShareButton url={productMock.url}>
              <Facebook />
            </FacebookShareButton>
            <EmailShareButton url={productMock.url}>
              <Email />
            </EmailShareButton>
            <WhatsappShareButton url={productMock.url}>
              <Whatsapp />
            </WhatsappShareButton>
          </Social>
        </Content>
      </Container>
    </>
  );
}

export default Product;
