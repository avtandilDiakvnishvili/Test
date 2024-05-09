// FormCreate.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import ToolbarComponent from './ToolbarComponent';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
    marginTop: useTheme().spacing(8),
    marginBottom: useTheme().spacing(8),// theme.spacing(2),
  },
  toolbar: {
    marginTop: useTheme().spacing(8),
    marginBottom: useTheme().spacing(8)
  }
}));

const FormCreate = () => {
  const classes = useStyles();
  const navigate = useNavigate();


  const handleBackClick = () => {
    navigate('/forms');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleBackClick} style={{ marginBottom: '20px' }}>
        Back
      </Button>
      <form>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            name="status"
            fullWidth
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            fullWidth
          >
            <MenuItem value="Category A">Category A</MenuItem>
            <MenuItem value="Category B">Category B</MenuItem>
            <MenuItem value="Category C">Category C</MenuItem>
            <MenuItem value="Category D">Category D</MenuItem>
          </Select>
        </FormControl>
      </form>
      <ToolbarComponent className={classes.toolbar} />
    </div>
  );
};

export default FormCreate;
