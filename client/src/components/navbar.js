import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useGlobalContext } from '../context';
import { useTheme } from '@mui/material/styles';

const departments = ['Management', 'Production', 'Support'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const theme = useTheme();
  const { category, setCategory } = useGlobalContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' sx={{ marginBottom: 4 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
              X Corp
            </a>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {departments.map((department) => (
                <MenuItem
                  key={department}
                  onClick={() => {
                    setCategory(department);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign='center'>{department}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            X Corp
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {departments.map((department) =>
              department === category ? (
                <Button
                  key={department}
                  onClick={() => {
                    setCategory(department);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: '#0288d1',
                    backgroundColor: '#e3f2fd',
                    display: 'block',
                    marginRight: '7px',
                    '&:hover': {
                      color: '#0288d1',
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                >
                  {department}
                </Button>
              ) : (
                <Button
                  key={department}
                  onClick={() => {
                    setCategory(department);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    marginRight: '7px',
                    '&:hover': {
                      color: '#0288d1',
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                >
                  {department}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
