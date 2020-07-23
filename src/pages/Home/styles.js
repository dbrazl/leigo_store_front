import styled, { keyframes } from "styled-components";
import pattern from "../../assets/images/pattern.png";
import debruy from "../../assets/images/debruy.png";
import label1 from "../../assets/images/cover-label-1.png";
import label2 from "../../assets/images/cover-label-2.png";
import shape from "../../assets/images/shape.png";

export const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  background: #ffbb29;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Pattern = styled.img.attrs({
  src: pattern,
})`
  width: 100%;
  height: 438px;
  object-fit: cover;

  @media (min-width: 620px) {
    height: 520px;
  }

  @media (min-width: 824px) {
    height: 626px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1px;

  @media (min-width: 620px) {
    width: 600px;
  }

  @media (min-width: 824px) {
    width: 700px;
  }

  @media (min-width: 1024px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

const entryLeft_debruy = keyframes`
  from {
    opacity: 0;
    left: -200px;
  }

  to {
    opacity: 1;
    left: 100px;
  }
`;

const entryLeft_debruy_420 = keyframes`
  from {
    opacity: 0;
    left: -150px;
  }

  to {
    opacity: 1;
    left: 150px;
  }
`;

const entryLeft_debruy_620 = keyframes`
  from {
    opacity: 0;
    left: 0px;
  }

  to {
    opacity: 1;
    left: 200px;
  }
`;

const entryLeft_debruy_824 = keyframes`
  from {
    opacity: 0;
    left: -50px;
  }

  to {
    opacity: 1;
    left: 150px;
  }
`;

const entryLeft_debruy_1024 = keyframes`
  from {
    opacity: 0;
    left: -10px;
  }

  to {
    opacity: 1;
    left: 100px;
  }
`;

export const Debruy = styled.img.attrs({
  src: debruy,
})`
  position: absolute;
  bottom: 0;
  z-index: 2px;
  height: 250px;
  object-fit: contain;

  animation: ${entryLeft_debruy} 500ms linear forwards;

  @media (min-width: 420px) {
    animation: ${entryLeft_debruy_420} 500ms linear forwards;
  }

  @media (min-width: 620px) {
    animation: ${entryLeft_debruy_620} 500ms linear forwards;
    height: 300px;
  }

  @media (min-width: 824px) {
    animation: ${entryLeft_debruy_824} 500ms linear forwards;
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }

  @media (min-width: 1200px) {
    animation: ${entryLeft_debruy_1024} 500ms linear forwards;
  }
`;

const entryLeft_label1 = keyframes`
  from {
    opacity: 0;
    left: -170px;
  }

  to {
    opacity: 1;
    left: 30px;
  }
`;

const entryLeft_label1_620 = keyframes`
  from {
    opacity: 0;
    left: -100px;
  }

  to {
    opacity: 1;
    left: 100px;
  }
`;

const entryLeft_label1_1024 = keyframes`
  from {
    opacity: 0;
    left: -150px;
  }

  to {
    opacity: 1;
    left: 50px;
  }
`;

const entryLeft_label1_1200 = keyframes`
  from {
    opacity: 0;
    left: 200px;
  }

  to {
    opacity: 1;
    left: 400px;
  }
`;

export const Label1 = styled.img.attrs({
  src: label1,
})`
  height: 83px;
  object-fit: contain;
  position: absolute;
  top: 170px;
  animation: ${entryLeft_label1} 400ms linear forwards;

  @media (min-width: 620px) {
    height: 100px;
    animation: ${entryLeft_label1_620} 400ms linear forwards;
  }

  @media (min-width: 824px) {
    height: 130px;
  }

  @media (min-width: 1024px) {
    height: 150px;
    animation: ${entryLeft_label1_1024} 400ms linear forwards;
    top: 100px;
  }

  @media (min-width: 1200px) {
    animation: ${entryLeft_label1_1200} 400ms linear forwards;
    top: 150px;
  }
`;

const entryLeft_label2 = keyframes`
  from {
    opacity: 0;
    right: -180px;
  }

  to {
    opacity: 1;
    right: 20px;
  }
`;

const entryLeft_label2_1024 = keyframes`
  from {
    opacity: 0;
    right: -150px;
  }

  to {
    opacity: 1;
    right: 50px;
  }
`;

const entryLeft_label2_1200 = keyframes`
  from {
    opacity: 0;
    right: -200px;
  }

  to {
    opacity: 1;
    right: 0;
  }
`;

export const Label2 = styled.img.attrs({
  src: label2,
})`
  height: 83px;
  object-fit: contain;
  position: absolute;
  bottom: 30px;
  animation: ${entryLeft_label2} 400ms linear forwards;

  @media (min-width: 620px) {
    height: 100px;
  }

  @media (min-width: 824px) {
    height: 130px;
  }

  @media (min-width: 1024px) {
    height: 150px;
    animation: ${entryLeft_label2_1024} 400ms linear forwards;
  }

  @media (min-width: 1200px) {
    animation: ${entryLeft_label2_1200} 400ms linear forwards;
    bottom: 100px;
  }
`;

export const Shape = styled.img.attrs({
  src: shape,
})`
  width: 100%;
  object-fit: cover;
`;
