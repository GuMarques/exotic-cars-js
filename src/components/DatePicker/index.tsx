import { FC, useEffect, useState } from "react";
import { useAnimateGroup } from "react-simple-animate";
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
  preSelectedDate?: Date;
  getDate: (date: Date | undefined) => void;
}

interface IDaysOfCalendar {
  day: number;
  isSelectedMonth: boolean;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { openDatePicker, closeDatePicker, preSelectedDate, getDate } = props;
  const { play, styles, isPlaying } = useAnimateGroup({
    sequences: [
      {
        start: { pointerEvents: "none", backgroundColor: "rgba(0,0,0,0)" },
        end: { pointerEvents: "auto", backgroundColor: "rgba(0,0,0,0.4)" },
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
    setTimeout(() => {
      closeDatePicker();
    }, 400);
  };

  const [selectedDay, setSelectedDay] = useState(
    preSelectedDate?.getDate() || 0
  );
  const [highlightedDay, setHighlightedDay] = useState("");
  const [daysOfCalendar, setDaysOfCalendar] = useState<IDaysOfCalendar[]>([]);
  const [firstRender, setFirstRender] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(
    preSelectedDate?.getMonth() || new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState(
    preSelectedDate?.getFullYear() || new Date().getFullYear()
  );

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
    let num = daysInMonth(selectedYear, selectedMonth);
    for (let i = 1; i <= num; i++) {
      tempCalendar.push({ day: i, isSelectedMonth: true });
    }
    for (let i = 1; tempCalendar.length < 42; i++) {
      tempCalendar.push({ day: i, isSelectedMonth: false });
    }
    //`${selectedYear}-${selectedMonth}-${date.day}-${index}`
    if (preSelectedDate && firstRender) {
      const index = tempCalendar.findIndex((day, index) => {
        if (day.isSelectedMonth && day.day === preSelectedDate.getDate()) {
          return index;
        }
      });
      setHighlightedDay(
        `${preSelectedDate.getFullYear()}-${preSelectedDate.getMonth()}-${preSelectedDate.getDate()}-${index}`
      );
      setFirstRender(false);
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
    if (day === selectedDay) {
      return;
    }
    const calendarButtons = document.getElementsByClassName("Cb");
    Array.prototype.forEach.call(calendarButtons, (button) => {
      button.classList.remove("selected");
    });
    setSelectedDay(day);
    getDate(new Date(selectedYear, selectedMonth, day));
    const dayButton = document.getElementById(
      `${selectedYear}-${selectedMonth}-${day}`
    );
    setHighlightedDay(`${selectedYear}-${selectedMonth}-${day}-${index}`);
    dayButton?.classList.add("selected");
  };

  return (
    <BackDrop style={styles[0] || undefined} onClick={closeBackDrop}>
      <DatePickerContainer
        style={styles[1] || undefined}
        onClick={(e) => e.stopPropagation()}
      >
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
                  id={`${selectedYear}-${selectedMonth}-${date.day}-${index}`}
                  className={
                    `${selectedYear}-${selectedMonth}-${date.day}-${index}` ===
                    highlightedDay
                      ? "Cb selected"
                      : "Cb"
                  }
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
