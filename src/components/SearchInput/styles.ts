import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const InputOutContainter = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const PinContainer = styled.img`
  align-self: center;
  margin-right: 0.37125rem;
  margin-left: 1.6875rem;
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
