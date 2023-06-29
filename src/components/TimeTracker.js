import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

function TimeTracker({ startDate, targetDate }) {
  const [timePassed, setTimePassed] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = Math.abs(startDate - targetDate);
      const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const yearsPassed = Math.floor(daysPassed / 365);

      setTimePassed({ years: yearsPassed, days: daysPassed % 365 });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate, targetDate]);

  return (
    <Typography variant="h6" align="center">
      Time: {timePassed.years} years, {timePassed.days} days
    </Typography>
  );
}

TimeTracker.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default TimeTracker;