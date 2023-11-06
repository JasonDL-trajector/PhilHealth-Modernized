import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import './markdown.css'
import { Box, Link } from '@mui/material';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up">
        {title}
      </Typography>
      <Divider />
   
        <Box className="markdown" data-aos="fade-right" mb={10}>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

            <Grid md={12}>
              <Typography variant={'h4'} component= {'h1'} fontFamily={'Poppins'} fontWeight= {'600'} display={'flex'} color={'rgb(20,59,10)'}>Our Partners</Typography>
            </Grid>

            {/* FIRST CARD */} 
            <Link href='https://www.philhealth.gov.ph/partners/providers/' target='_blank' sx={{ textDecoration: 'none', ':hover': { transform: 'scale(1.03)', transition: '.3s ease-in-out'}}}>
            <Grid container mt={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0rem'}} data-aos='fade-right' width={'120%'}> 
              <Grid md={12} sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem'}}>
                <Grid md={8.5}>
                  <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} color={'rgb(20,59,10)'}>Healthcare Providers</Typography>
                  <Typography variant={'body1'} mt={1} fontFamily={'Poppins'}  color={'black'}>We forge partnerships with only the best in the industry to fulfil our mandate of providing all Filipinos with accessible, available, acceptable and affordable health care services that will lead to better health outcomes and improved quality of life.</Typography>
                </Grid>
                <Grid md={2}>
                  <img src='https://www.philhealth.gov.ph/images/hcp_main.jpg'/>
                </Grid>
              </Grid>
            </Grid>
            </Link>

            {/* SECOND CARD */}
            <Link href='https://www.philhealth.gov.ph/partners/employers/' target='_blank'sx={{ textDecoration: 'none', ':hover': { transform: 'scale(1.03)', transition: '.3s ease-in-out'}}}>
            <Grid container mt={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20rem'}} data-aos='fade-left'  width={'120%'}> 
              <Grid md={12}  sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem'}}>
                <Grid md={2} mr={10}>
                  <img src='https://www.philhealth.gov.ph/partners/images/emplyr_main.jpg'/>
                </Grid>
                <Grid md={8.5}>
                  <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} color={'rgb(20,59,10)'} textAlign={'right'}>Employers</Typography>
                  <Typography variant={'body1'} mt={1} fontFamily={'Poppins'} textAlign={'right'} color={'black'}>We partner with employers in the government and private sectors to ensure that all their employees are provided with social health insurance coverage as mandated by law.</Typography>
                </Grid>
                
              </Grid>
            </Grid>
            </Link>

            {/* THIRD CARD */}
            <Link href='https://www.philhealth.gov.ph/partners/csp/' target='_blank' sx={{ textDecoration: 'none', ':hover': { transform: 'scale(1.03)', transition: '.3s ease-in-out'}}}>
              <Grid container mt={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0rem'}} data-aos='fade-right'  width={'120%'}> 
                <Grid md={12} sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem'}}>
                  <Grid md={8.5}>
                    <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} color={'rgb(20,59,10)'}>Service Providers</Typography>
                    <Typography variant={'body1'} mt={1} fontFamily={'Poppins'} color={'black'}>We are moving towards electronic transactions and to help us achieve our goal, we have entered into partnerships with Health IT Providers for our e-claims and related processes.</Typography>
                  </Grid>
                  <Grid md={2} display={'flex'}justifyContent={'center'}>
                    <img src='https://www.philhealth.gov.ph/partners/csp/images/leyte-logo.png'/>
                  </Grid>
                </Grid>
              </Grid>
            </Link>

            {/* FOURTH CARD */}
            <Link href='https://www.philhealth.gov.ph/partners/collecting/' target='_blank' sx={{ textDecoration: 'none', ':hover': { transform: 'scale(1.03)', transition: '.3s ease-in-out'}}}>
              <Grid container mt={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20rem'}} data-aos='fade-left'  width={'120%'}> 
                <Grid md={12} sx={{ backgroundColor: 'rgba(227, 227, 227, 0.8)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem'}}>
                  
                <Grid md={2} mr={10}>
                    <img src='https://www.philhealth.gov.ph/partners/images/collect_main.jpg'/>
                  </Grid>
                  
                  <Grid md={8.5}>
                    <Typography variant={'h6'} component= {'h2'} fontFamily={'Poppins'} fontWeight= {'600'} color={'rgb(20,59,10)'} textAlign={'right'}>Collecting Partners</Typography>
                    <Typography variant={'body1'} mt={1} fontFamily={'Poppins'} textAlign={'right'} color={'black'}>We have tapped the services and networks of bank and non-bank institutions to make premium remittance more convenient for our members and employers. This section provides a complete list of these partners and their branch locations, and also includes basic information for collecting agencies that might be interested to partner with us in premium remittance.</Typography>
                  </Grid>
                
                </Grid>
              </Grid>
            </Link>

          
          </Box>
        </Box>
    </Grid>
  );
}