import { FC, useState } from "react";
import {
  SearchContainer,
  PinContainer,
  InputContainer,
  TextInput,
  HrInput,
  CalendarContainer,
} from "./styles";
import pin from "../../assets/icons/pin.png";
import Flatpickr from "react-flatpickr";
import calendar from "../../assets/icons/calendar-sharp.svg";
import { useAnimate } from "react-simple-animate";
import "flatpickr/dist/themes/material_green.css";

const SearchBox: FC<{}> = (props) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
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
      <Flatpickr
        options={{
          dateFormat: "d/m/Y",
        }}
        value={selectedDate}
        onChange={([date]) => {
          setSelectedDate(date);
        }}
      />
    </SearchContainer>
  );
};

export default SearchBox;
