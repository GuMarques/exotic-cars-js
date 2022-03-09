import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;

  /* #1- Small devices - Portrait phones */
  @media (max-width: 575.98px) {
    height: 56px;
    margin-left: 5px;
    margin-right: 5px;
  }

  /* #1- Small devices - Landscape phones */
  @media (max-width: 767.98px) {
    height: 56px;
  }

  /* #2- Portrait and Landscape tablets  */
  @media (max-width: 991.98px) {
    height: 83px;
  }

  /* #3- Laptop with MDPI   */
  @media (max-width: 1199.98px) {
    height: 83px;
    margin-left: 92px;
    margin-right: 61px;
  }

  /* #3- Laptop with HiDPI   */
  @media (min-width: 1199.99px) {
    height: 83px;
    margin-left: 112px;
    margin-right: 91px;
  }
`;
