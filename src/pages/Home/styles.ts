import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarsBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 45px;

  /* #1- Small devices - Portrait phones */
  @media (max-width: 575.98px) {
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 942px) {
    justify-content: space-around;
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
