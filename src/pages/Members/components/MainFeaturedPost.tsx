import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {

  useEffect(()=>{
    Aos.init({duration: 1500})
    Aos.init({
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
}, [])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        height: isMobile ? '5rem' : '20rem'
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          height: '700px'
        }}
      />
      <Grid container>
        <Grid item md={7}></Grid>
        <Grid item md={5}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              alignItems: 'end'
            }}
          >
            <Typography component="h1" variant="h4" color="black" gutterBottom fontFamily={'Poppins'}>
              {}
            </Typography>
            <Typography variant="body1" color="inherit" paragraph fontFamily={'Poppins'} sx={{transform: 'scale(.9 )', color: 'black'}}>
              
              </Typography>
            <Link variant="subtitle1" target="_blank" href="https://www.philhealth.gov.ph/about_us/map/regional.htm" 
                  fontFamily={'Poppins'} sx={{ color: 'black' }} ml={2}>
              {}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
