import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import CustomLink from "../../components/CustomLink";
import data from "../../dummyData.json";
import { FormatCarNumber } from "../../shared/utils/format-carnumbers";
import images from "../../shared/utils/import-images";
import back from "../../assets/icons/arrow-left.svg";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
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
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

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

  const renderCarsSlide = () => {
    let lastCar = car;
    let render: React.ReactElement[] = [];
    for (let i = 0; i < 15; i++) {
      let nextCar = data.cars.find((value) => {
        if (lastCar!.number === 16) {
          return value.number === 1;
        }
        return value.number === lastCar!.number + 1;
      });
      render.push(
        <SwiperSlide key={new Date() + "-" + nextCar?.id}>
          <SlideCard className="card-slide">
            <SlideCarImage src={images[`${nextCar?.id}-side.png`]} />
          </SlideCard>
        </SwiperSlide>
      );
      lastCar = nextCar;
    }

    return render;
  };

  const car = findData(params.id || "ac01");
  return (
    <div>
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
          <SildeArrow className="prev" style={{ order: 1 }}>
            <SlideArrowIcon src={back} />
          </SildeArrow>
          <SildeArrow className="next" style={{ order: 3 }}>
            <SlideArrowIcon src={back} right />
          </SildeArrow>
          <Swiper
            style={{ order: 2 }}
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            centeredSlides={true}
            loopedSlides={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={screenSize.dynamicWidth > 991 ? 2.18 : 1}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop={true}
            allowTouchMove
          >
            <SwiperSlide>
              <SlideCard className="card-slide">
                <SlideCarImage src={images[`${car?.id}-side.png`]} />
              </SlideCard>
            </SwiperSlide>
            {renderCarsSlide()}
          </Swiper>
        </SlideContainer>
      </OuterContainer>
    </div>
  );
};
export default Details;
