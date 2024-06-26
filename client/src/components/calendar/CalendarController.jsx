import { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar";

const CalendarController = ({ monthNumber, year, onPrev, onNext }) => {
  const today = moment();
  const [currentMonthMoment, setCurrentMonthMoment] = useState(today);

  const incrementMonth = () => {
    setCurrentMonthMoment(moment(currentMonthMoment.add(1, "months")));
  };

  const decrementMonth = () => {
    setCurrentMonthMoment(moment(currentMonthMoment.subtract(1, "months")));
  };
  return (
    <Calendar
      currentMonthMoment={currentMonthMoment}
      onPrev={decrementMonth}
      onNext={incrementMonth}
    />
  );
};

export default CalendarController;
