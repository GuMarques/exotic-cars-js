import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const SearchOuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f3f1fc;
  height: fit-content;
  border-radius: 18px;
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
