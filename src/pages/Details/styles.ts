import styled from "styled-components";

export const OuterContainer = styled.div`
  /* #1- Small devices - Portrait phones */
  background: rgb(255, 255, 255);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(216, 215, 215, 1) 100%
  );
  @media (max-width: 575.98px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  /* #1- Small devices - Landscape phones */
  @media (min-width: 575.99px) and (max-width: 767.98px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  /* #2- Portrait and Landscape tablets  */
  @media (min-width: 767.99px) and (max-width: 991.98px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  /* #3- Laptop with MDPI   */
  @media (min-width: 991.99px) and (max-width: 1199.98px) {
    padding-left: 30px;
    padding-right: 20px;
  }

  /* #3- Laptop with HiDPI   */
  @media (min-width: 1199.99px) {
    padding-left: 112px;
    padding-right: 91px;
  }
`;

export const CarShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 53px;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  align-self: flex-start;
  margin: 0;
  @media (max-width: 992px) {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  /* max-width: 91px; */
  max-height: 123px;
  margin-right: 40px;
  @media (max-width: 992px) {
    max-width: 89px;
  }
`;

export const Name = styled.h1`
  font-size: 3.125rem;
  color: #313136;
  font-weight: bold;
  margin: 0;
  @media (max-width: 809px) {
    font-size: 2rem;
  }
`;

export const Price = styled.p`
  font-size: 2.5rem;
  color: #313136;
  font-weight: 300;
  margin: 0;
  @media (max-width: 809px) {
    font-size: 1.6rem;
  }
`;

export const BackButton = styled.button`
  border-radius: 25px;
  border: 1px solid #313136;
  font-weight: 300;
  font-size: 1rem;
  color: #313136;
  background-color: white;
  padding: 15px 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: #313136;
    color: #ffffff !important;
    img {
      filter: invert(100%) sepia(5%) saturate(20%) hue-rotate(152deg)
        brightness(105%) contrast(105%);
    }
  }
  @media (max-width: 992px) {
    margin-top: 10px;
  }
  @media (max-width: 809px) {
    font-size: 0.8rem;
    padding: 7px 8px;
  }
`;

export const IconContainer = styled.img`
  margin-right: 10px;
  width: 24px;
  filter: invert(15%) sepia(8%) saturate(547%) hue-rotate(201deg)
    brightness(98%) contrast(88%);
`;

export const CarImage = styled.img`
  margin-top: 96px;
  height: 380px;
  @media (max-width: 992px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 783px;
    height: auto;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin-top: 71px;
  margin-bottom: 0;
  @media (max-width: 992px) {
    flex-direction: row;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 35px;
  }
`;

export const CarNumber = styled.p`
  margin: 0;
  font-size: 3.125rem;
  color: #313136;
  font-weight: bold;
  @media (max-width: 992px) {
    line-height: 3.125rem;
    margin-right: 5px;
  }
`;

export const CarText = styled.p`
  margin: 0;
  font-size: 1.875rem;
  color: #313136;
  font-weight: 300;
  text-transform: capitalize;
`;

export const CarsNavigation = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.button`
  margin: 5px;
  background-color: #313136;
  box-shadow: 0px 3px 6px #00000029;
  width: 42px;
  height: 42px;
  border-radius: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

export const ArrowIcon = styled.img<{ right?: boolean }>`
  width: 24px;
  transform: ${({ right }) => (right ? "scaleX(-1)" : "none")};
  filter: invert(96%) sepia(9%) saturate(0%) hue-rotate(88deg) brightness(103%)
    contrast(105%);
`;

export const CarInactive = styled.div`
  background: #cecece 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 20px #0000001a;
  max-height: 180px;
  max-width: 232px;
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media (max-width: 932px) {
    width: 180px;
  }
`;
export const CarActive = styled.div`
  background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 8px 20px #0000001a;
  max-height: 240px;
  min-width: 200px;
  max-width: 310px;
  width: 100%;
  height: 240px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media (max-width: 550px) {
    width: 280px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  position: relative;
  left: 20px;
`;
