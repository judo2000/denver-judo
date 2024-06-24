import moment from "moment";
import {
  getDaysInMonth,
  segmentIntoWeeks,
  daysOfTheWeek,
  padWeekFront,
  padWeekBack,
} from "./util";
import { Button, Table } from "react-bootstrap";
import EventModal from "./AddEventModal";
import { useState } from "react";

const Calendar = ({ month, year, events, onPrev, onNext }) => {
  const currentMonthMoment = moment(`${month}${year}`, "MMYYYY");
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const handleShowAddEventModal = () => setShowAddEventModal(true);
  const handleCloseAddEventModal = () => setShowAddEventModal(false);

  const [selectedDay, setSelectedDay] = useState("");

  console.log("selected day ", selectedDay);
  return (
    <div>
      <div className="calendar-controls-wrapper">
        <h1>{currentMonthMoment.format("MMMM, YYYY")}</h1>

        <Button onClick={onPrev}>Prev</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
      <Table>
        <thead>
          <tr>
            {daysOfTheWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => {
            const displayWeek =
              i === 0
                ? padWeekFront(week)
                : i === weeks.length - 1
                ? padWeekBack(week)
                : week;

            return (
              <tr key={i}>
                {displayWeek &&
                  displayWeek.map((dayMoment, j) =>
                    dayMoment ? (
                      <td key={dayMoment.format("D")} className="calendar-cell">
                        <span
                          className="calendar-cell-number"
                          onClick={() => {
                            setSelectedDay(dayMoment.format("yyyy-MM-DD"));
                            handleShowAddEventModal();
                          }}
                        >
                          {dayMoment.format("D")}
                        </span>
                        <br />
                        {events &&
                          events.map(
                            (event, i) =>
                              moment(event.startDate).format("D") ===
                                dayMoment.format("D") && (
                                <p key={i}>{event.eventName}</p>
                              )
                          )}
                      </td>
                    ) : (
                      <td key={`${i}${j}`} className="calendar-cell"></td>
                    )
                  )}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {showAddEventModal && (
        <EventModal
          show={showAddEventModal}
          handleClose={handleCloseAddEventModal}
          month={month}
          year={year}
          day={selectedDay}
        />
      )}
    </div>
  );
};

export default Calendar;
