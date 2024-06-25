import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Calendar from "../components/calendar/Calendar";
import { useGetEventsByYearAndMonthQuery } from "../slices/eventApiSlice";
import { Container } from "react-bootstrap";

const ScheduleScreen = () => {
  return (
    <Container>
      <h1>Schedule</h1>
      <p>
        Reservations are recommended but not required.  To reserve a spot, click
        on the class you would like to attend.
      </p>
      <iframe
        id="idZenPlannerFrame"
        style={{ width: "100%", height: "500px" }}
        src="https://denverjudo.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true"
        frameBorder="0"
      ></iframe>
    </Container>
  );
};

export default ScheduleScreen;
