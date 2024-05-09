import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CustomCard = ({ title, category, status, onDetailClick }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          Category: {category}
        </Typography>
        <Typography color="textSecondary">
          Status: {status}
        </Typography>
      </CardContent>
      <CardContent>
        <Button variant="contained" color="primary" onClick={onDetailClick}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
