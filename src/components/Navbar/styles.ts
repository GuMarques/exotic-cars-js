import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 10px 30px #0000001a;

  /* #1- Small devices - Portrait phones */
  @media (max-width: 575.98px) {
    height: 56px;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: center;
  }

  /* #1- Small devices - Landscape phones */
  @media (min-width: 575.99px) and (max-width: 767.98px) {
    height: 56px;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: center;
  }

  /* #2- Portrait and Landscape tablets  */
  @media (min-width: 767.99px) and (max-width: 991.98px) {
    height: 83px;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: flex-start;
  }

  /* #3- Laptop with MDPI   */
  @media (min-width: 991.99px) and (max-width: 1199.98px) {
    height: 83px;
    padding-left: 30px;
    padding-right: 20px;
    justify-content: flex-start;
  }

  /* #3- Laptop with HiDPI   */
  @media (min-width: 1199.99px) {
    height: 83px;
    padding-left: 112px;
    padding-right: 91px;
    justify-content: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const IconContainer = styled.img`
  @media (max-width: 767.98px) {
    width: 20px;
  }

  /* #2- Portrait and Landscape tablets  */
  @media (min-width: 767.99px) and (max-width: 991.98px) {
    width: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* #1- Small devices - Portrait phones */
  @media (max-width: 575.98px) {
    margin-left: auto;
    margin-right: auto;
  }

  /* #1- Small devices - Landscape phones */
  @media (min-width: 575.99px) and (max-width: 767.98px) {
    margin-left: auto;
    margin-right: auto;
  }

  /* #2- Portrait and Landscape tablets  */
  @media (min-width: 767.99px) and (max-width: 991.98px) {
    margin-left: auto;
    margin-right: auto;
  }

  /* #3- Laptop with MDPI   */
  @media (min-width: 991.99px) and (max-width: 1199.98px) {
    margin-left: 0;
    margin-right: 0;
  }

  /* #3- Laptop with HiDPI   */
  @media (min-width: 1199.99px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
