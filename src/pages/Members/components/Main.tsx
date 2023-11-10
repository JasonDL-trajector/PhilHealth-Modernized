import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './markdown.css'
import { Box, Link } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
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
  
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up" display={'flex'} textAlign={'center'} justifyContent={'center'}>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Box className="markdown" data-aos="fade-right" width={'100%'} mb={10} >

          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Grid md={12}>
              <Typography variant={'h4'} component= {'h1'} fontFamily={'Poppins'} fontWeight= {'600'} display={'flex'} justifyContent={'center'}>Members</Typography>
            </Grid>

            <Grid container mt={5} gap={'2rem'} display={'flex'} justifyContent={'center'}>
              <Grid md={5.5} sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '2rem', borderRadius: '2rem'}}>
                <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} display={'flex'} justifyContent={'center'} color={'rgb(20,59,10)'}>Direct Contributors</Typography>
                <Box mt={3}>
                  <Link href='https://www.philhealth.gov.ph/members/formal/' target='_blank' variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Employees with Formal Employment</Link>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Kasambahays</Typography>
                  <Link href='https://www.philhealth.gov.ph/members/informal/' target='_blank' variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Self-Earning Individuals; Professional Practitioners</Link>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Overseas Filipino Workers</Typography>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Filipinos living abroad and those with Dual Citizenship</Typography>
                  <Link href='https://www.philhealth.gov.ph/members/lifetime/' target='_blank' variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Lifetime Members</Link>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- All Filipinos aged 21 years and above with capacity to pay</Typography>
                </Box>
              </Grid>

              <Grid md={5.5} sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '2rem', borderRadius: '2rem'}}>
                <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} display={'flex'} justifyContent={'center'} color={'rgb(20,59,10)'}>Indirect Contributors</Typography>

                <Box mt={3}>
                  <Link href='https://www.philhealth.gov.ph/members/sponsored/' target='_blank' variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Indigents identified by the DSWD</Link>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Beneficiaries of Pantawid Pamilyang Pilipino Program</Typography>
                  <Link href='https://www.philhealth.gov.ph/members/senior/' target='_blank' variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Senior Citizens</Link>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Persons with Disability</Typography>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Sangguniang Kabataan Officials</Typography>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- Previously identified at Point-of-Service / Sponsored by LGUs</Typography>
                  <Typography variant={'h6'} fontFamily={'Poppins'} fontSize={16}>- All Filipinos aged 21 years and above with capacity to pay</Typography>
                </Box>
              </Grid>
            </Grid>

           
          </Box>
        </Box>
      ))}
    </Grid>
  );
}