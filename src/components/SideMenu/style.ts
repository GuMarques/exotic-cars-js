import styled from "styled-components";

export const MenuContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width + "px"};

  background-color: white;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-top: 83px;
  height: 100%;
  @media (max-width: 767.98px) {
    margin-top: 56px;
  }
  z-index: 2;
`;

export const DisplayOrganizer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  box-shadow: 10px 0px 30px #0000001a;
`;

export const ItensContainer = styled.div`
  display: flex;
  margin-left: 1.6875rem;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.6875rem;
  margin-right: 1.6875rem;
`;

export const SearchButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0px 3px 15px #00000014;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1875rem;
  margin-bottom: 0.1875rem;
  margin-right: 0.625rem;
`;

export const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
`;

export const IconContainer = styled.img``;
