import React from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    <Card variant="outlined" sx={{ maxWidth: 400, margin: "0 auto", marginBottom: 16 }}>
      <CardContent>
        <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
          {companyName}
        </Typography>
        <Typography variant="h6" align="center" color="text.primary" gutterBottom>
          {jobTitle}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" paragraph>
          {timeTracker}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          {formattedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobEntry;
