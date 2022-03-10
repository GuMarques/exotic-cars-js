import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

export const BackDrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: black;
  pointer-events: none;
`;

export const DatePickerContainer = styled.div`
  float: left;
  position: absolute;
  width: 300px;
  top: 80px;
  min-height: 350px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeButton = styled.button`
  border-radius: 100%;
  /* border: 1px solid black; */
  border: none;
  box-shadow: none;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.1s linear;
  transition: transform 0.1s linear;
  :hover {
    background-color: #a3a3a3;
    transform: scale(1.1);
  }
`;

export const IconContainer = styled.img``;

export const DateContainer = styled.div``;

export const YearText = styled.p`
  margin: 0;
  text-align: center;
`;

export const MonthText = styled.p`
  margin: 0;
  text-align: center;
  width: 76px;
`;

export const DaysOfWeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DaysOfWeekText = styled.p`
  margin: 0;
  text-align: center;
  min-width: 30px;
  max-width: 30px;
  font-weight: bold;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
`;

export const DaysOfMonthContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  button {
    background-color: white;
    transition: background-color 0.1s linear;
  }
  .selected {
    background-color: ${Colors.textTertiary};
  }
`;

export const DaysOfMonthButton = styled.button`
  flex: 0 0 11%;
  /* border: 1px solid black; */
  border: none;
  border-radius: 100px;
  margin: 3px;
  height: 33px;
  padding: 0;
  align-self: center;
  background-color: white;
  transition: background-color 0.5s linear;
  transition: transform 0.5s linear;
  :enabled:hover {
    background-color: #a3a3a3;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
