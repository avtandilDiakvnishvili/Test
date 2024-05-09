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
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { findAll, create, update, remove } from 'api/userManagement/requests';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: '',
    email: '',
    status: 'ACTIVE',
    role: 'USER'
  });
  const fetchUsers = async () => {
    try {
      const response = await findAll();
      setUsers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await remove(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      username: formData.get('username'),
      name: formData.get('name'),
      email: formData.get('email'),
      status: formData.get('status'),
      role: formData.get('role')
    };

    try {
      if (currentUser.id) {
        await update(currentUser.id, userData);
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
      <Button sx={{ margin: '0 auto 50px auto' }} variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
        Add New User
      </Button>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Creation Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xs" fullWidth>
        <DialogTitle>{currentUser.id ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <form id="user-form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              margin="dense"
              name="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue={currentUser.username}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              defaultValue={currentUser.email}
              required
            />
            {currentUser.id && (
              <>
                <Select
                  margin="dense"
                  name="status"
                  label="Status"
                  fullWidth
                  variant="outlined"
                  value={currentUser.status}
                  onChange={(e) => setCurrentUser({ ...currentUser, status: e.target.value })}
                  required
                >
                  {['ACTIVE', 'INACTIVE', 'PENDING', 'SUSPENDED', 'DELETED'].map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  margin="dense"
                  name="role"
                  label="Role"
                  fullWidth
                  variant="outlined"
                  value={currentUser.role}
                  onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                  required
                >
                  {['USER', 'ADMIN'].map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button type="submit" form="user-form" variant="contained" color="primary">
            {currentUser.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UsersTable;
