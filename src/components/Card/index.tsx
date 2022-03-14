import { FC } from "react";
import {
  BrandName,
  ByDay,
  CardContainer,
  CarImage,
  DolarSign,
  ModelName,
  Price,
  PriceContainer,
} from "./styled";
import imagem from "../../assets/images/ac01.png";

interface CardProps {
  price: number;
  brand: string;
  model: string;
  image: string;
}

const Card: FC<CardProps> = (props) => {
  const { price, brand, model, image } = props;
  return (
    <CardContainer>
      <BrandName>{brand}</BrandName>
      <ModelName>{model.toUpperCase()}</ModelName>
      <CarImage src={image} />
      <PriceContainer>
        <DolarSign>$</DolarSign>
        <Price>{price}</Price>
        <ByDay>/day</ByDay>
      </PriceContainer>
    </CardContainer>
  );
};

export default Card;
