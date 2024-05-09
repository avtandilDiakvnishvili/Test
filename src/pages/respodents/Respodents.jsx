import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { findAll, create, update, remove, upload } from 'api/respondents/respondents';

export default function Respodents() {
  const [respondents, setRespondents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentRespondent, setCurrentRespondent] = useState({
    firstname: '',
    lastname: '',
    identityNumber: ''
  });
  const [file, setFile] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await findAll();
      setRespondents(response.data.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (respondent) => {
    setCurrentRespondent(respondent);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await remove(id);
      setRespondents(respondents.filter((respondent) => respondents.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await upload(formData);
      console.log('File uploaded successfully', response.data);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
      alert('Error uploading file');
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      identityNumber: formData.get('identityNumber')
    };

    try {
      if (currentRespondent.id) {
        await update(currentRespondent.id, userData);
      } else {
        await create(userData);
      }
      fetchUsers();
    } catch (error) {
      console.error('Failed to submit user:', error);
    }

    handleDialogClose();
  };
  return (
    <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
      <div>
        <Button sx={{ margin: '0 30px 0 auto' }} variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Add New Respondent
        </Button>
        <input accept=".xlsx" type="file" onChange={handleFileChange} style={{ display: 'none' }} id="raised-button-file" />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span">
            Upload Excel File
          </Button>
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileUpload}
          style={{ marginLeft: '30px' }} // Add some spacing between buttons
        >
          Submit
        </Button>
      </div>
      <TableContainer component={Paper} sx={{ maxHeight: 850, marginTop: '30px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>firstname</TableCell>
              <TableCell>lastname</TableCell>
              <TableCell>identityNumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {respondents.map((respondent) => (
              <TableRow key={respondent.id}>
                <TableCell>{respondent.firstname}</TableCell>
                <TableCell>{respondent.lastname}</TableCell>
                <TableCell>{respondent.identityNumber}</TableCell>

                <TableCell>
                  <IconButton onClick={() => handleEdit(respondent)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(respondent.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xs" fullWidth>
        <DialogTitle>{currentRespondent.id ? 'Edit Respondent' : 'Add New Respondent'}</DialogTitle>
        <DialogContent>
          <form id="user-form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              margin="dense"
              name="firstname"
              label="Firstname"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue={currentRespondent.firstname}
              required
            />
            <TextField
              margin="dense"
              name="lastname"
              label="Lastname"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue={currentRespondent.lastname}
              required
            />
            <TextField
              margin="dense"
              name="identityNumber"
              label="IdentityNumber"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue={currentRespondent.identityNumber}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button type="submit" form="user-form" variant="contained" color="primary">
            {currentRespondent.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
