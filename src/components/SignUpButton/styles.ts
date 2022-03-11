import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
`;

export const Button = styled.button`
  font-family: "Segoe UI";
  background-color: #fff;
  border: none;
  border-radius: 13px;
  font-weight: bold;
  font-size: 1rem;
  color: ${Colors.textTertiary};
  cursor: pointer;
  padding: 0.4375rem 1rem;
  transition: all linear 0.3s;
  :hover {
    background-color: ${Colors.textTertiary};
    color: white;
  }
`;
