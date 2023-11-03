import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const appBarStyle = {
  backgroundColor: 'white'
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const settings = ['Profile', 'Account', 'Logout'];

const Header = () => {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <div style={{ marginLeft: '8%'}}>
          <Toolbar variant="dense" sx={{display: 'flex', gap: '2rem', py: 1}}>
            <a href='/'>
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Philippine_Health_Insurance_Corporation_%28PhilHealth%29.svg/1200px-Philippine_Health_Insurance_Corporation_%28PhilHealth%29.svg.png`}
                width={220}
                height={80}
                
                alt={'PhilHealth'}
                loading="lazy"
              />
            </a>
          </Toolbar>
        </div>
        
        <div >
          <Toolbar variant="dense">
            <img
              src={`https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png`}
              alt={'PhilHealth'}
              loading="lazy"  
            />
          </Toolbar>
        </div>
     
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '2%'
        }}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', gap: '2rem'}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: 'black'}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                sx={{ fontFamily: 'Poppins' }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={`https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`} />
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
        </div>
      </div>     
    </AppBar>
  )
}

export default Header;