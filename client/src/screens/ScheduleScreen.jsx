import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Calendar from "../components/calendar/Calendar";
import { useGetEventsByYearAndMonthQuery } from "../slices/eventApiSlice";

const ScheduleScreen = () => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const month = new URLSearchParams(search).get("m");
  const year = new URLSearchParams(search).get("y");

  const today = moment();
  const [currentMonthMoment, setCurrentMonthMoment] = useState(
    month && year ? moment(`${month}${year}`, "MMYYYY") : today
  );

  console.log(currentMonthMoment.format("D"));
  const eventData = {
    month: currentMonthMoment.format("MMM"),
    year: currentMonthMoment.format("YYYY"),
  };
  const {
    data: events,
    isLoading,
    refetch,
  } = useGetEventsByYearAndMonthQuery(eventData);

  const incrementMonth = () => {
    const newMonth = moment(currentMonthMoment.add(1, "months"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  };

  const decrementMonth = () => {
    const newMonth = moment(currentMonthMoment.subtract(1, "months"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  };

  return (
    <Calendar
      month={currentMonthMoment.format("MM")}
      year={currentMonthMoment.format("YYYY")}
      events={events}
      onPrev={decrementMonth}
      onNext={incrementMonth}
      refetch={refetch}
    />
  );
};

export default ScheduleScreen;
