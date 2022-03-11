import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const SearchOuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 174px;
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

export const PinContainer = styled.img`
  align-self: center;
  margin-right: 0.37125rem;
  margin-left: 1.6875rem;
  cursor: pointer;
`;

export const InputOutContainter = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-right: 4px;
`;

export const TextInput = styled.input`
  all: unset;
  border: none;
  width: 210px;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.03rem;
  color: ${Colors.textSecondary};
  cursor: pointer;

  ::placeholder {
    color: ${Colors.textSecondary};
  }

  :focus-visible {
    border: none;
  }
`;

export const HrInput = styled.hr`
  margin: 0;
  background-color: ${Colors.textSecondary};
  height: 0.0625rem;
  border: none;
`;

export const CalendarContainer = styled.img`
  align-self: center;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateText = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  color: #656469;
  min-width: 71px;
  letter-spacing: 0.03rem;
  margin: 0;
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
