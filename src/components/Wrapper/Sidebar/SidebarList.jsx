import React from 'react';
import { ListItemText, ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormatListBulleted } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';

const SidebarList = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const open = true;
  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          selected={pathname === '/'}
          onClick={() => navigate('/')}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="გამოკითხვები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => navigate('/forms')}
          selected={pathname === '/forms'}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary="ფორმები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => navigate('/assessments')}
          selected={pathname === '/assessments'}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary="შეფასებები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => navigate('/respodents')}
          selected={pathname === '/respodents'}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="რესპოდენტები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => navigate('/results')}
          selected={pathname === '/results'}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="შედეგები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={() => navigate('/users')}
          selected={pathname === '/results'}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="მომხმარებლები" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarList;
