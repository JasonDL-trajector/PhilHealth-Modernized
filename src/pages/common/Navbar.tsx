import * as React from 'react';
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
import { useNavigate } from 'react-router-dom'
import { Link } from '@mui/material';

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

const routes = ['/', '/about-us', '/members', '/our-partners', '/online-services', '/downloads']
  
const Navbar = () => {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
  }
  return (
    <AppBar position="fixed" 
          className='navbar' 
          sx={{ 
            backgroundColor: 'rgb(20,59,10)', 
            top: 100,
            left: 0,
            right: 0,
            zIndex: 1000
          }}>
    <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {pages.map((page) => (
                
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.url} textAlign="center" fontFamily={'Poppins'}>{page.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
          </Typography>
          
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center', 
            gap: '3rem'
            }}>
            
              <Button key={pages[0].title} onClick={() => navigate(routes[0])} sx={navbarStyles}> {pages[0].title} </Button>
              <Button key={pages[1].title} onClick={() => navigate(routes[1])} sx={navbarStyles}> {pages[1].title} </Button>
              <Button key={pages[2].title} onClick={() => navigate(routes[2])} sx={navbarStyles}> {pages[2].title} </Button>
              <Button key={pages[3].title} onClick={() => navigate(routes[3])} sx={navbarStyles}> {pages[3].title} </Button>
              <Button key={pages[4].title} onClick={() => navigate(routes[4])} sx={navbarStyles}> {pages[4].title} </Button>
              <Button key={pages[5].title} onClick={() => navigate(routes[5])} sx={navbarStyles}> {pages[5].title} </Button>
          
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;