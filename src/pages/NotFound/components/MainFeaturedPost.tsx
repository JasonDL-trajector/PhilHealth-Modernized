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
              {post.title}
            </Typography>
            <Typography variant="body1" color="inherit" paragraph fontFamily={'Poppins'} sx={{transform: 'scale(.9 )', color: 'black'}}>
                <span className="material-symbols-outlined">call</span> <strong style={{ fontWeight: 600, fontSize: 18}}>Callback Channel:</strong> 0917-898-7442 (PHIC)
                <p>
                  <span className="material-symbols-outlined">phone_iphone</span><strong style={{ fontWeight: 600, fontSize: 18}}> Text:</strong> <i>"PHICcallback [space] Mobile No. or Metro Manila landline [space] details of your concern"</i> and we will call you during office hours, weekdays only. 
                </p> 
          
                <span className="material-symbols-outlined">phone_in_talk</span> <strong style={{ fontWeight: 600, fontSize: 18}}>Call Center Hotline:</strong>  84417442 (PHIC)
                <p> 
                  <span className="material-symbols-outlined">mail</span> <strong>Email:</strong> <a href='mailto:actioncenter@philhealth.gov.ph' style={{ color: 'green'}}>actioncenter@philhealth.gov.ph</a> 
                </p> 
              </Typography>
            <Link variant="subtitle1" target="_blank" href="https://www.philhealth.gov.ph/about_us/map/regional.htm" 
                  fontFamily={'Poppins'} sx={{ color: 'black' }} ml={2}>
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
