import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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
        height: '20rem'
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} height={700}/>}
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
