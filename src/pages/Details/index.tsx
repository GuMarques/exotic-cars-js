import { FC } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import CustomLink from "../../components/CustomLink";
import data from "../../dummyData.json";
import { FormatCarNumber } from "../../shared/utils/format-carnumbers";
import images from "../../shared/utils/import-images";
import back from "../../assets/icons/arrow-left.svg";
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
} from "./styles";

interface DetailsProps {}

function findData(id: string) {
  return data.cars.find((value) => {
    return value.id === id;
  });
}

const Details: FC<DetailsProps> = (props) => {
  const params = useParams();
  const car = findData(params.id || "ac01");
  return (
    <>
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
            <CarNumber>{FormatCarNumber(car?.number || 0)}</CarNumber>
            <CarText>{car?.color}</CarText>
          </CarInfo>
        </CarShow>
      </OuterContainer>
    </>
  );
};

export default Details;
