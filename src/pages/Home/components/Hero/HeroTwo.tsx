import { Box, Grid, Link, Typography } from "@mui/material";
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body?: string;
  images?: string;
  links?: string;
}



const HeroTwo = (props: HeroProps) => {

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

  return (
    <Grid sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",    
      py: 10,
      pr: 20,
      pl: 10,
      mb: -5
    }}>
      <Box>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2rem' : '8rem', marginTop: isMobile ? -2 : 5}}>
      <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginLeft: isMobile ? '-3rem' : 0, marginTop: isMobile ? 0 : 10, marginRight: isMobile ? -15 : 0}}>
          {props.title && (
            <Link href={props.links} variant="h6" data-aos="fade-up-left" sx={{
              fontFamily: 'Poppins',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: "bold",
              color: "rgb(20,59,10)"
            }}>
              {props.title}
            </Link>
          )}
          
          {props.body && (
            <Typography variant="body1" data-aos="fade-right" sx={{
              fontFamily: 'Poppins',
              fontSize: 20,
              color: "black"
            }}>
              {props.body}
            </Typography>
          )}
          </Box>
          {props.images && (
            <Box mr={-20} sx={{ marginLeft: isMobile ? -8 : 0}}>
              <img data-aos="zoom-in-left" src={props.images}  alt="" style={{
                marginRight: isMobile ? '0rem' : 0,
                width: isMobile ? 400 : 700,
                height: isMobile ? 275 : 550,
                borderRadius: '1rem',
                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
              }}/>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default HeroTwo;
