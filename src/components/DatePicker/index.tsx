import { FC, useEffect, useState, useRef } from "react";
import {
  Animate,
  useAnimateGroup,
  AnimateKeyframes,
} from "react-simple-animate";
import {
  BackDrop,
  CalendarContainer,
  ChangeButton,
  DateContainer,
  DatePickerContainer,
  DaysOfMonthButton,
  DaysOfMonthContainer,
  DaysOfWeekContainer,
  DaysOfWeekText,
  HeaderContainer,
  IconContainer,
  MonthText,
  YearText,
} from "./styles";

import chevronDoubleLeft from "../../assets/icons/chevron-double-left.svg";
import chevronDoubleRight from "../../assets/icons/chevron-double-right.svg";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

interface DatePickerProps {
  openDatePicker: boolean;
  closeDatePicker: () => void;
}

interface IDaysOfCalendar {
  day: number;
  isSelectedMonth: boolean;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { openDatePicker, closeDatePicker } = props;
  const { play, styles, isPlaying } = useAnimateGroup({
    sequences: [
      {
        start: { pointerEvents: "none", opacity: 0 },
        end: { pointerEvents: "auto", opacity: 0.4 },
        duration: 0.3,
        easeType: "linear",
      },
      {
        start: { transform: "scale(0)" },
        end: { transform: "scale(1)" },
        duration: 0.2,
        easeType: "linear",
      },
    ],
  });

  useEffect(() => {
    if (openDatePicker) {
      play(true);
    }
  }, [openDatePicker]);

  const closeBackDrop = () => {
    play(!isPlaying);
    closeDatePicker();
  };

  const [selectedDay, setSelectedDay] = useState(0);
  const [daysOfCalendar, setDaysOfCalendar] = useState<IDaysOfCalendar[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const DaysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const Months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const daysInMonth = (year: number, month: number) => {
    let dataObject = new Date(year, month + 1, 0);
    return dataObject.getDate();
  };

  useEffect(() => {
    loadCalendarDays();
  }, [selectedMonth, selectedYear]);

  const loadCalendarDays = () => {
    let tmpDate = new Date(selectedYear, selectedMonth, 1);
    let lastDayOfLastMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    let dayOfWeek = tmpDate.getDay();
    let firstDayOfCalendar = lastDayOfLastMonth - dayOfWeek + 1;
    let tempCalendar: IDaysOfCalendar[] = [];
    for (let i = 0; i < dayOfWeek; i++) {
      tempCalendar.push({ day: firstDayOfCalendar, isSelectedMonth: false });
      firstDayOfCalendar++;
    }
    let num = daysInMonth(2022, 2);
    for (let i = 1; i <= num; i++) {
      tempCalendar.push({ day: i, isSelectedMonth: true });
    }
    for (let i = 1; tempCalendar.length < 42; i++) {
      tempCalendar.push({ day: i, isSelectedMonth: false });
    }
    setDaysOfCalendar(tempCalendar);
  };

  const changeYear = (direction: "back" | "front") => {
    direction === "back"
      ? setSelectedYear((prevState) => prevState - 1)
      : setSelectedYear((prevState) => prevState + 1);
  };

  const changeMonth = (direction: "back" | "front") => {
    if (direction === "back") {
      if (selectedMonth === 0) {
        changeYear("back");
        setSelectedMonth(11);
      } else {
        setSelectedMonth((prevState) => prevState - 1);
      }
    } else {
      if (selectedMonth === 11) {
        changeYear("front");
        setSelectedMonth(0);
      } else {
        setSelectedMonth((prevState) => prevState + 1);
      }
    }
  };

  const selectDay = (day: number, index: number) => {
    const calendarButtons = document.getElementsByClassName("Cb");
    Array.prototype.forEach.call(calendarButtons, (button) => {
      button.classList.remove("selected");
    });
    if (day === selectedDay) {
      setSelectedDay(0);
    } else {
      setSelectedDay(day);
      const dayButton = document.getElementById(`${day}-${index}`);
      dayButton?.classList.add("selected");
    }
  };

  return (
    <BackDrop style={styles[0] || undefined} /*onClick={closeBackDrop} */>
      <DatePickerContainer style={styles[1] || undefined}>
        <HeaderContainer>
          <ChangeButton onClick={() => changeYear("back")}>
            <IconContainer src={chevronDoubleLeft} />
          </ChangeButton>
          <ChangeButton onClick={() => changeMonth("back")}>
            <IconContainer src={chevronLeft} />
          </ChangeButton>
          <DateContainer>
            <YearText>{selectedYear}</YearText>
            <MonthText>{Months[selectedMonth]}</MonthText>
          </DateContainer>
          <ChangeButton onClick={() => changeMonth("front")}>
            <IconContainer src={chevronRight} />
          </ChangeButton>
          <ChangeButton onClick={() => changeYear("front")}>
            <IconContainer src={chevronDoubleRight} />
          </ChangeButton>
        </HeaderContainer>
        <CalendarContainer>
          <DaysOfWeekContainer>
            {DaysOfWeek.map((day, index) => {
              return (
                <DaysOfWeekText key={day + "-" + index}>{day}</DaysOfWeekText>
              );
            })}
          </DaysOfWeekContainer>
          <DaysOfMonthContainer>
            {daysOfCalendar.map((date, index) => {
              return (
                <DaysOfMonthButton
                  id={`${date.day}-${index}`}
                  className="Cb"
                  disabled={!date.isSelectedMonth}
                  key={date.day + "-" + index}
                  onClick={() => selectDay(date.day, index)}
                >
                  {date.day}
                </DaysOfMonthButton>
              );
            })}
          </DaysOfMonthContainer>
        </CalendarContainer>
      </DatePickerContainer>
    </BackDrop>
  );
};

export default DatePicker;
