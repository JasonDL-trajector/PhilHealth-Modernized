import { Box, Grid, Typography } from "@mui/material";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body?: string;
  images?: string;
}

const Hero = (props: HeroProps) => {
  return (
    <Grid sx={{
      backgroundColor: "#F5F5F5",    
      py: 10,
      pl: 20,
      pr: 10,
      mt: 5
    }}>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8rem', marginTop: 5}}>
        {props.images && (
            <Box ml={-25}>
              <img data-aos="zoom-in-right" src={props.images} width={800} height={550} alt="" style={{
                borderRadius: '1rem',
                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
              }} />
            </Box>
          )}
          <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', gap: '3rem'}}>
          {props.title && (
            <Typography variant="h6" data-aos="fade-up-right" sx={{
              fontFamily: 'Poppins',
              fontSize: '3rem',
              fontWeight: "bold",
              color: "rgb(20,59,10)"
            }}>
              {props.title}
            </Typography>
          )}
          
          {props.body && (
            <Typography variant="body1" data-aos="fade-left" sx={{
              fontFamily: 'Poppins',
              fontSize: 20,
              color: "black"
            }}>
              {props.body}
            </Typography>
          )}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Hero;
