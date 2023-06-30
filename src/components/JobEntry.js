import React from 'react';
import Typography from "@mui/material/Typography";

function JobEntry({ companyName, jobTitle, timeTracker, jobDescription }) {
  const formattedDescription = jobDescription.split('\n').map((line, index, arr) => {
    return (
      <React.Fragment key={index}>
        {line}
        {/* Don't add a <br /> after the last line */}
        {index < arr.length - 1 && <br />}
      </React.Fragment>
    );
  });

    return (
        <>
            <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
            >
                {companyName}
                <br />
                {jobTitle}
                {timeTracker}
            </Typography>
            <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                paragraph
            >
                {formattedDescription}
                <br />
            </Typography>
        </>
    );
}

export default JobEntry;
