import { Box, Grid, Typography } from "@mui/material";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body?: string;
  images?: string;
}

const HeroTwo = (props: HeroProps) => {
  return (
    <Grid sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",    
      py: 10,
      pr: 20,
      pl: 10,
      mb: -5
    }}>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8rem'}}>
          <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', gap: '3rem'}}>
          {props.title && (
            <Typography variant="h6" data-aos="fade-left" sx={{
              fontFamily: 'Poppins',
              fontSize: '3rem',
              fontWeight: "bold",
              color: "rgb(20,59,10)"
            }}>
              {props.title}
            </Typography>
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
            <Box mr={-20}>
              <img data-aos="zoom-in-left" src={props.images} width={700} height={550} alt="" />
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default HeroTwo;
