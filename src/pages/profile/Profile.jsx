import React, { useEffect, useState } from 'react';
import { Button, TextField, Container, Grid } from '@mui/material';
import { currentUser, updateProfile } from 'api';

export default function Profile() {
  const [profile, setProfile] = useState({
    email: '',
    username: '',
    role: '',
    status: '',
    createdAt: ''
  });

  const getCurrentUser = async (id) => {
    try {
      const response = await currentUser();
      const { email, username, role, status, createdAt } = response.data;
      setProfile({
        email,
        username,
        role,
        status,
        createdAt
      });
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const updateUserProfile = async () => {
    try {
      await updateProfile(profile);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleChange = (prop) => (event) => {
    setProfile({ ...profile, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    updateUserProfile();
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" value={profile.email} onChange={handleChange('email')} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Username" value={profile.username} onChange={handleChange('username')} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Role"
            value={profile.role}
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Status"
            value={profile.status}
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Creation Date"
            value={profile.createdAt}
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        <Grid item xs={12} container justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
