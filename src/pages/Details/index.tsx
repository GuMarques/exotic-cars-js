import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import CustomLink from "../../components/CustomLink";
import data from "../../dummyData.json";
import { FormatCarNumber } from "../../shared/utils/format-carnumbers";
import images from "../../shared/utils/import-images";
import back from "../../assets/icons/arrow-left.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  BackButton,
  CarImage,
  CarInfo,
  CarNumber,
  CarShow,
  CarText,
  Header,
  HeaderInfos,
  IconContainer,
  Logo,
  Name,
  OuterContainer,
  Price,
  SildeArrow,
  SlideArrowIcon,
  SlideCard,
  SlideCarImage,
  SlideContainer,
} from "./styles";

interface DetailsProps {}

function findData(id: string) {
  return data.cars.find((value) => {
    return value.id === id;
  });
}

const Details: FC<DetailsProps> = (props) => {
  const params = useParams();
  const selectedCar = findData(params.id || "ac01");
  const carouselRef = useRef<AliceCarousel>(null);
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

  const slideChangeHandler = (id: string | undefined) => {
    console.log(id);
    if (!id) {
      setCar(selectedCar);
      return;
    }
    setCar(findData(id!));
  };
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <OuterContainer>
        <CarShow>
          <Header>
            <Logo src={images[`${car?.logo}.png`]} />
            <HeaderInfos>
              <Name>
                {car?.brand} {car?.model}
              </Name>
              <Price>${car?.price}/day</Price>
            </HeaderInfos>
          </Header>
          <CustomLink to="/">
            <BackButton>
              <IconContainer src={back} />
              Back to catalog
            </BackButton>
          </CustomLink>
          <CarImage src={images[`${car?.id}-side.png`]} />
          <CarInfo>
            <CarNumber>{FormatCarNumber(car?.number || 0)} </CarNumber>
            <CarText>{car?.color}</CarText>
          </CarInfo>
        </CarShow>
        <SlideContainer>
          <SildeArrow
            className="prev"
            onClick={(e) => carouselRef.current?.slidePrev(e)}
          >
            <SlideArrowIcon src={back} />
          </SildeArrow>
          <SildeArrow
            className="next"
            style={{ order: 3 }}
            onClick={(e) => carouselRef.current?.slideNext(e)}
          >
            <SlideArrowIcon src={back} right />
          </SildeArrow>
          <AliceCarousel
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            infinite
            ref={carouselRef}
          >
            <SlideCard>
              <SlideCarImage src={images[`ac02-side.png`]} />
            </SlideCard>
            <SlideCard>
              <SlideCarImage src={images[`ac06-side.png`]} />
            </SlideCard>
            <SlideCard>
              <SlideCarImage src={images[`ac08-side.png`]} />
            </SlideCard>
          </AliceCarousel>
        </SlideContainer>
      </OuterContainer>
    </div>
  );
};

const responsive = {
  0: { items: 1 },
  991: { items: 3 },
};

export default Details;
