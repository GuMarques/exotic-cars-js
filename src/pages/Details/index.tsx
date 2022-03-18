import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import CustomLink from "../../components/CustomLink";
import data from "../../dummyData.json";
import { FormatCarNumber } from "../../shared/utils/format-carnumbers";
import images from "../../shared/utils/import-images";
import back from "../../assets/icons/arrow-left.svg";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Arrow,
  ArrowIcon,
  BackButton,
  CarActive,
  CarImage,
  CarInactive,
  CarInfo,
  CarNumber,
  CarShow,
  CarsNavigation,
  CarText,
  Header,
  HeaderInfos,
  IconContainer,
  Logo,
  Name,
  OuterContainer,
  Price,
  SlideImage,
} from "./styles";

interface DetailsProps {}

function findData(id: string) {
  return (
    data.cars.find((value) => {
      return value.id === id;
    }) || data.cars[0]
  );
}

const Details: FC<DetailsProps> = (props) => {
  const params = useParams();
  const [selectedCar, setSelectedCar] = useState(findData(params.id || "ac01"));
  const [secondCar, setSecondCar] = useState(
    selectedCar?.number === 1
      ? data.cars[15]
      : data.cars[data.cars.indexOf(selectedCar!) - 1]
  );
  const [thirtyCar, setThirtyCar] = useState(
    selectedCar?.number === 16
      ? data.cars[0]
      : data.cars[data.cars.indexOf(selectedCar!) + 1]
  );
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [car, setCar] = useState(findData(params.id || "ac01"));
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const nextClickHandler = () => {
    setSelectedCar(thirtyCar);
    setThirtyCar(secondCar);
    setSecondCar(selectedCar);
  };

  const prevClickHandler = () => {
    setSelectedCar(secondCar);
    setThirtyCar(selectedCar);
    setSecondCar(thirtyCar);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <OuterContainer>
        <CarShow>
          <Header>
            <Logo src={images[`${selectedCar?.logo}.png`]} />
            <HeaderInfos>
              <Name>
                {selectedCar?.brand} {selectedCar?.model}
              </Name>
              <Price>${selectedCar?.price}/day</Price>
            </HeaderInfos>
          </Header>
          <CustomLink to="/">
            <BackButton>
              <IconContainer src={back} />
              Back to catalog
            </BackButton>
          </CustomLink>
          <CarImage src={images[`${selectedCar?.id}-side.png`]} />
          <CarInfo>
            <CarNumber>{FormatCarNumber(selectedCar?.number || 0)} </CarNumber>
            <CarText>{selectedCar?.color}</CarText>
          </CarInfo>
        </CarShow>
        <CarsNavigation>
          <Arrow onClick={prevClickHandler}>
            <ArrowIcon src={back} />
          </Arrow>
          {screenSize.dynamicWidth > 809 && (
            <CarInactive>
              <SlideImage src={images[`${secondCar?.id}-side.png`]} />
            </CarInactive>
          )}
          <CarActive>
            <SlideImage src={images[`${selectedCar?.id}-side.png`]} />
          </CarActive>
          {screenSize.dynamicWidth > 809 && (
            <CarInactive>
              <SlideImage src={images[`${thirtyCar?.id}-side.png`]} />
            </CarInactive>
          )}
          <Arrow onClick={nextClickHandler}>
            <ArrowIcon src={back} right />
          </Arrow>
        </CarsNavigation>
      </OuterContainer>
    </div>
  );
};

export default Details;
