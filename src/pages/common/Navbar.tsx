import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Drawer, Link } from '@mui/material';

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About Us',
    url: '/about-us'
  },
  {
    title: 'Members',
    url: '/members'
  },
  {
    title: 'Our Partners',
    url: '/our-partners'
  },
  {
    title: 'Online Services',
    url: '/online-services'
  },
  {
    title: 'Downloads',
    url: '/downloads'
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
  };

  const navbarStyles = {
    my: 2,
    color: 'white',
    display: 'block',
    fontFamily: 'Poppins',
    ":hover": {
      backgroundColor: "white",
      color: "rgb(20,59,10)",
      transform: "scale(1.2)",
      transition: "transform .3s"
    }
  };

  return (
    <AppBar position="relative" className='navbar' sx={{
      backgroundColor: 'rgb(20,59,10)',
      position: 'relative',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="bottom"  // You can customize the anchor as needed
              open={isDrawerOpen}
              onClose={handleCloseNavMenu}
              // style={{ backgroundColor: 'rgb(20,59,10)'}}
              
            >
              <div
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
                style={{ backgroundColor: 'rgb(20,59,10)'}}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu} style={{ backgroundColor: 'rgb(20,59,10)'}}>
                    <Link href={page.url} textAlign="center" fontFamily={'Poppins'} color={'rgb(255,255,255)'}>
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </Drawer>
          </Box>

          <Link
            href='/'
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'Poppins'
            }}
          >
            PHILHEALTH
          </Link>

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: '3rem'
          }}>
            {pages.map((page, index) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.url)}
                sx={{
                  ...navbarStyles,
                  backgroundColor: location.pathname === page.url ? 'white' : 'transparent',
                  color: location.pathname === page.url ? 'rgb(20,59,10)' : 'white',
                  transform: location.pathname === page.url ? 'scale(1)' : 'scale(1)',
                  transition: "transform .3s"
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
