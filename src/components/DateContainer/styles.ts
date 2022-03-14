import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CalendarContainer = styled.img`
  align-self: center;
  margin-right: 0.5rem;
  cursor: pointer;
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

export const HrInput = styled.hr`
  margin: 0;
  background-color: ${Colors.textSecondary};
  height: 0.0625rem;
  border: none;
`;
