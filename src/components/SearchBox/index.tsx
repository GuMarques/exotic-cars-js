import "flatpickr/dist/themes/material_green.css";
import { FC, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useAnimate } from "react-simple-animate";
import calendar from "../../assets/icons/calendar-sharp.svg";
import pin from "../../assets/icons/pin.png";
import DatePicker from "../DatePicker";
import {
  CalendarContainer,
  HrInput,
  InputContainer,
  PinContainer,
  SearchContainer,
  TextInput,
} from "./styles";

const SearchBox: FC<{}> = (props) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { play, style, isPlaying } = useAnimate({
    start: { width: "0%" },
    end: { width: "100%" },
    duration: 0.6,
    easeType: "cubic-bezier(0.85, 0, 0.15, 1)",
  });
  return (
    <SearchContainer>
      <PinContainer src={pin} />
      <InputContainer>
        <TextInput
          type="text"
          placeholder="North Carolina, NC 90025"
          onMouseEnter={() => play(true)}
          onMouseLeave={() => (!isOnFocus ? play(!isPlaying) : null)}
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => {
            setIsOnFocus(false);
            play(!isPlaying);
          }}
        />
        <HrInput style={style} />
      </InputContainer>
      <CalendarContainer src={calendar} />
      <button onClick={() => setShowDatePicker((prevState) => !prevState)}>
        Click Me
      </button>
      <DatePicker
        openDatePicker={showDatePicker}
        closeDatePicker={() => setShowDatePicker((prevState) => !prevState)}
      />
    </SearchContainer>
  );
};

export default SearchBox;
