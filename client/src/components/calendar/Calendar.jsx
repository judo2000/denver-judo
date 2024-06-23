import moment from "moment";
import {
  getDaysInMonth,
  segmentIntoWeeks,
  daysOfTheWeek,
  padWeekFront,
  padWeekBack,
} from "./util";
import { Button, Table } from "react-bootstrap";
import EventModal from "./EventModal";
import { useState } from "react";

const Calendar = ({ month, year, onPrev, onNext }) => {
  const currentMonthMoment = moment(`${month}${year}`, "MMYYYY");
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
                      <td
                        key={dayMoment.format("D")}
                        className="calendar-cell"
                        onClick={handleShowModal}
                      >
                        {dayMoment.format("D")}
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

      {showModal && (
        <EventModal show={showModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Calendar;
