import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import './markdown.css';
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

  const { title } = props;

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
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up" textAlign="center">
        {title}
      </Typography>
      <Divider />

      <Box className="markdown" data-aos="fade-right" mb={10} px={-30}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant={'h4'} component={'h1'} fontFamily={'Poppins'} fontWeight={'600'} display={'flex'} justifyContent={'center'} color={'rgb(20,59,10)'}>
            Online Services
          </Typography>

          {/* FIRST ROW */}
          <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '3rem', gap: 10 }}>

            {/* Membership Section */}
            <Grid item md={7} xs={12}>
              <Typography variant='h4' fontFamily={'Poppins'} ml={2} color={'rgb(20,59,10)'}>
                Membership
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginTop: '2rem', gap: isMobile ? '2rem' : 0 }}>

                {/* Membership Card 1 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={210} data-aos='fade-right' sx={{ backgroundColor: 'rgba(206, 109, 14, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Member Portal
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={3} fontFamily={'Poppins'} color={'black'}>
                        Enables members to check on the accuracy of their membership details.
                      </Typography>
                      <Link href='https://memberinquiry.philhealth.gov.ph/member' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} justifyContent={'flex-end'}>
                        Register / Login
                      </Link>
                    </Grid>
                  </Grid>
                </Box>

                {/* Membership Card 2 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={210} data-aos='fade-right' sx={{ backgroundColor: 'rgba(49, 169, 11, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Electronic Group Enrollment System
                      </Typography>
                      <Typography variant={'body1'} mt={1} fontFamily={'Poppins'} color={'black'}>
                        Enables members to check on the accuracy of their membership details.
                      </Typography>
                      <Link href='https://egroup03.philhealth.gov.ph/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} justifyContent={'flex-end'}>
                        Login
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* Contribution Section */}
            <Grid item md={4} xs={12}>
              <Typography variant='h4' fontFamily={'Poppins'} ml={2} color={'rgb(20,59,10)'}>
                Contribution
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row',  marginTop: '2rem' }}>

                {/* Contribution Card 1 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={210} data-aos='fade-left' sx={{ backgroundColor: 'rgba(94, 193, 174, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Electronic Premium Remittance System
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={3} fontFamily={'Poppins'} color={'black'}>
                        Enables employers to remit their premium contributions online.
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '.5rem'}}>
                        <Link href='https://eprs01.philhealth.gov.ph/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} >
                          Login 
                        </Link>
                        <Typography color={'black'}>{' | '}</Typography>
                        <Link href='https://epoaf.philhealth.gov.ph/employer/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'}>
                          ePOAF
                        </Link>
                      </Box>
                      
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>


          {/* SECOND ROW */}
          <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '3rem', gap: 10 }}>

            {/* Benefits Section */}
            <Grid item md={7} xs={12}>
              <Typography variant='h4' fontFamily={'Poppins'} ml={2} color={'rgb(20,59,10)'}>
                Benefits
              </Typography>

              <Box sx={{ display: 'flex',flexDirection: isMobile ? 'column' : 'row', marginTop: '2rem', gap: isMobile ? '2rem' : 0  }}>

                {/* Benefits Card 1 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={225} data-aos='fade-right' sx={{ backgroundColor: 'rgba(66, 139, 202, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Case Rates Search
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={6} fontFamily={'Poppins'} color={'black'}>
                        Provides members with information on PhilHealth's benefit packages
                      </Typography>
                      <Link href='https://www.philhealth.gov.ph/services/acr/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} justifyContent={'flex-end'}>
                        Begin Search
                      </Link>
                    </Grid>
                  </Grid>
                </Box>

                {/* Benefits Card 2 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={225} data-aos='fade-right' sx={{ backgroundColor: 'rgba(109, 206, 255, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Claims Eligibility Checking
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={2} fontFamily={'Poppins'} color={'black'}>
                        Enables providers to ascertain the benefit availment eligibility of members
                      </Typography>
                      <Link href='https://cec.philhealth.gov.ph/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} justifyContent={'flex-end'}>
                        Login
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* Collection Section */}
            <Grid item md={4} xs={12}>
              <Typography variant='h4' fontFamily={'Poppins'} ml={2} color={'rgb(20,59,10)'}>
                Collection
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row',  marginTop: '2rem' }}>

                {/* Collection Card 1 */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={11} height={225} data-aos='fade-left' sx={{ backgroundColor: 'rgba(121, 165, 76, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Electronic Collection Reporting System
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={2} fontFamily={'Poppins'} color={'black'}>
                        Enables PhilHealth Accredited Collecting Agents to submit daily RF2 reports online
                      </Typography>
                        <Link href='https://ecrs.philhealth.gov.ph/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} justifyContent={'flex-end'} >
                          Login 
                        </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* THIRD ROW */}
          <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '3rem' }}>

            {/* Accreditation Section */}
            <Grid item md={12} xs={12}>
              <Typography variant='h4' fontFamily={'Poppins'} ml={2} color={'rgb(20,59,10)'} display={'flex'} justifyContent={'center'}>
                Accreditation
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', justifyContent: 'center' }}>

                {/* Accreditation Card */}
                <Box sx={{ textDecoration: 'none' }}>
                  <Grid item md={12} height={225} data-aos='zoom-in' sx={{ backgroundColor: 'rgba(99, 137, 193, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1rem', borderRadius: '2rem' }}>
                    <Grid>
                      <Typography variant={'h6'} component={'h2'} fontFamily={'Poppins'} fontWeight={'600'} color={'rgb(20,59,10)'}>
                        Health Care Institutions
                      </Typography>
                      <Typography variant={'body1'} mt={1} mb={8} fontFamily={'Poppins'} color={'black'}>
                        Shows the complete list of HCIs including accreditation status
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '.5rem'}}>
                        <Link href='https://ihcp.philhealth.gov.ph/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'} >
                          Login 
                        </Link>
                        <Typography color={'black'}>{' | '}</Typography>
                        <Link href='https://www.philhealth.gov.ph/services/hci/' target='_blank' variant={'body2'} fontFamily={'Poppins'} display={'flex'}>
                          How to Register
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

      
              </Box>
            </Grid>

          </Grid>


        </Box>
      </Box>
    </Grid>
  );
}
