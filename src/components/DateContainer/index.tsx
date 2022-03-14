import { FC, useEffect, useState } from "react";
import { Animate } from "react-simple-animate";
import calendar from "../../assets/icons/calendar-sharp.svg";
import formatDate from "../../shared/utils/format-date";
import DatePicker from "../DatePicker";
import {
  CalendarContainer,
  Container,
  DateText,
  HrInput,
  ItensContainer,
} from "./styles";

interface DateContainerProps {
  preSelectedDate?: Date;
  getDate?: (date: Date) => void;
}

const DateContainer: FC<DateContainerProps> = (props) => {
  const { preSelectedDate, getDate } = props;
  const [selectedDate, setSelectedDate] = useState<Date>(
    preSelectedDate || new Date()
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const setDate = (date: Date | undefined) => {
    if (date) {
      if (getDate !== undefined) {
        getDate(date);
      }
      setSelectedDate(date);
    }
  };

  return (
    <Container
      style={{ marginRight: "1.5rem" }}
      onClick={() => {
        if (showDatePicker === false) {
          setShowDatePicker(true);
          setIsOnFocus(true);
        }
      }}
      onMouseEnter={() => setPlayAnimation(true)}
      onMouseLeave={() =>
        !isOnFocus ? setPlayAnimation((prevState) => !prevState) : null
      }
    >
      <CalendarContainer src={calendar} />
      <ItensContainer>
        <DateText>{formatDate(selectedDate)}</DateText>
        <Animate
          play={playAnimation}
          start={{ width: "0%" }}
          end={{ width: "100%" }}
          duration={0.6}
          easeType="cubic-bezier(0.85, 0, 0.15, 1)"
        >
          <HrInput />
        </Animate>
      </ItensContainer>
      {showDatePicker && (
        <DatePicker
          getDate={setDate}
          preSelectedDate={selectedDate}
          openDatePicker={showDatePicker}
          closeDatePicker={() => {
            setIsOnFocus(false);
            setPlayAnimation((prevState) => !prevState);
            setShowDatePicker((prevState) => !prevState);
          }}
        />
      )}
    </Container>
  );
};

export default DateContainer;
