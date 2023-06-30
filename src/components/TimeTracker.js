import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

function TimeTracker({ startDate, targetDate }) {
  const [timePassed, setTimePassed] = useState({ years: 0, days: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = startDate || new Date();
      const timeDiff = Math.abs(currentTime - targetDate);
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
  targetDate: PropTypes.instanceOf(Date).isRequired,
  startDate: PropTypes.instanceOf(Date),
};

export default TimeTracker;