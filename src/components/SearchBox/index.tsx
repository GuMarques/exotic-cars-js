import "flatpickr/dist/themes/material_green.css";
import { FC, useState, useRef } from "react";
import Flatpickr from "react-flatpickr";
import { Animate } from "react-simple-animate";
import calendar from "../../assets/icons/calendar-sharp.svg";
import pin from "../../assets/icons/ph_map-pin-fill.svg";
import searchIcon from "../../assets/icons/bx_bx-search.svg";
import formatDate from "../../shared/utils/format-date";
import DatePicker from "../DatePicker";
import { IconContainer } from "../DatePicker/styles";
import {
  CalendarContainer,
  DateContainer,
  DateText,
  HrInput,
  InputContainer,
  InputOutContainter,
  ItensContainer,
  PinContainer,
  SearchButton,
  SearchContainer,
  SearchOuterContainer,
  TextInput,
} from "./styles";

const SearchBox: FC<{}> = (props) => {
  const [playFirstAnimation, setPlayFirstAnimation] = useState(false);
  const [playSecondAnimation, setPlaySecondAnimation] = useState(false);
  const [playThirtyAnimation, setPlayThirtyAnimation] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isSecondOnFocus, setIsSecondOnFocus] = useState(false);
  const [isThirtyOnFocus, setIsThirtyOnFocus] = useState(false);
  const [selectedFirstDate, setSelectedFirstDate] = useState<Date>(new Date());
  const [selectedSecondDate, setSelectedSecondDate] = useState<Date>(
    new Date()
  );
  const [showFirstDatePicker, setShowFirstDatePicker] = useState(false);
  const [showSecondDatePicker, setShowSecondDatePicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const setFirstDate = (date: Date | undefined) => {
    if (date) {
      setSelectedFirstDate(date);
    }
  };
  const setSecondDate = (date: Date | undefined) => {
    if (date) {
      setSelectedSecondDate(date);
    }
  };
  return (
    <SearchOuterContainer>
      <SearchContainer>
        <InputOutContainter
          onMouseEnter={() => setPlayFirstAnimation(true)}
          onMouseLeave={() =>
            !isOnFocus ? setPlayFirstAnimation((prevState) => !prevState) : null
          }
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => {
            setIsOnFocus(false);
            setPlayFirstAnimation((prevState) => !prevState);
          }}
          onClick={() => inputRef.current?.focus()}
        >
          <PinContainer src={pin} />
          <InputContainer>
            <TextInput
              ref={inputRef}
              id="searchInput"
              type="text"
              placeholder="North Carolina, NC 90025"
            />
            <Animate
              play={playFirstAnimation}
              start={{ width: "0%" }}
              end={{ width: "100%" }}
              duration={0.6}
              easeType="cubic-bezier(0.85, 0, 0.15, 1)"
            >
              <HrInput />
            </Animate>
          </InputContainer>
        </InputOutContainter>
        <DateContainer
          style={{ marginRight: "1.5rem" }}
          onClick={() => {
            setShowFirstDatePicker((prevState) => !prevState);
            setIsSecondOnFocus(true);
          }}
          onMouseEnter={() => setPlaySecondAnimation(true)}
          onMouseLeave={() =>
            !isSecondOnFocus
              ? setPlaySecondAnimation((prevState) => !prevState)
              : null
          }
        >
          <CalendarContainer src={calendar} />
          <ItensContainer>
            <DateText>{formatDate(selectedFirstDate)}</DateText>
            <Animate
              play={playSecondAnimation}
              start={{ width: "0%" }}
              end={{ width: "100%" }}
              duration={0.6}
              easeType="cubic-bezier(0.85, 0, 0.15, 1)"
            >
              <HrInput />
            </Animate>
          </ItensContainer>
        </DateContainer>
        <DateContainer
          style={{ marginRight: "2.9375rem" }}
          onClick={() => {
            setShowSecondDatePicker((prevState) => !prevState);
            setIsThirtyOnFocus(true);
          }}
          onMouseEnter={() => setPlayThirtyAnimation(true)}
          onMouseLeave={() =>
            !isThirtyOnFocus
              ? setPlayThirtyAnimation((prevState) => !prevState)
              : null
          }
        >
          <CalendarContainer src={calendar} />
          <ItensContainer>
            <DateText>{formatDate(selectedSecondDate)}</DateText>
            <Animate
              play={playThirtyAnimation}
              start={{ width: "0%" }}
              end={{ width: "100%" }}
              duration={0.6}
              easeType="cubic-bezier(0.85, 0, 0.15, 1)"
            >
              <HrInput />
            </Animate>
          </ItensContainer>
        </DateContainer>
        <SearchButton>
          <IconContainer src={searchIcon} />
        </SearchButton>
        {showFirstDatePicker && (
          <DatePicker
            getDate={setFirstDate}
            preSelectedDate={selectedFirstDate}
            openDatePicker={showFirstDatePicker}
            closeDatePicker={() => {
              setIsSecondOnFocus(false);
              setPlaySecondAnimation((prevState) => !prevState);
              setShowFirstDatePicker((prevState) => !prevState);
            }}
          />
        )}
        {showSecondDatePicker && (
          <DatePicker
            getDate={setSecondDate}
            preSelectedDate={selectedSecondDate}
            openDatePicker={showSecondDatePicker}
            closeDatePicker={() => {
              setIsThirtyOnFocus(false);
              setPlayThirtyAnimation((prevState) => !prevState);
              setShowSecondDatePicker((prevState) => !prevState);
            }}
          />
        )}
      </SearchContainer>
    </SearchOuterContainer>
  );
};

export default SearchBox;
