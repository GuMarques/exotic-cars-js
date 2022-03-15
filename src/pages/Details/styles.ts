import styled from "styled-components";

export const OuterContainer = styled.div`
  /* #1- Small devices - Portrait phones */
  background: rgb(255, 255, 255);
  flex: 1;
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
  margin-top: 53px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  align-self: flex-start;
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  /* max-width: 91px; */
  max-height: 123px;
  margin-right: 40px;
`;

export const Name = styled.h1`
  font-size: 3.125rem;
  color: #313136;
  font-weight: bold;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 2.5rem;
  color: #313136;
  font-weight: 300;
  margin: 0;
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
`;

export const IconContainer = styled.img`
  margin-right: 10px;
  width: 24px;
  filter: invert(15%) sepia(8%) saturate(547%) hue-rotate(201deg)
    brightness(98%) contrast(88%);
`;

export const CarImage = styled.img`
  margin-top: 96px;
  max-width: 783px;
  max-height: 408px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin-top: 71px;
`;

export const CarNumber = styled.p`
  margin: 0;
  font-size: 3.125rem;
  color: #313136;
  font-weight: bold;
`;

export const CarText = styled.p`
  margin: 0;
  font-size: 1.875rem;
  color: #313136;
  font-weight: 300;
  text-transform: capitalize;
`;
