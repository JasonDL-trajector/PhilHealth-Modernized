import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './markdown.css';
import { Box, Link } from '@mui/material';

import image1 from './assets/1.png'
import image2 from './assets/2.png'

import "./styles.css";
import Collapsible from "./Collapsible";

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

      <Box className="markdown" data-aos="fade-right" mb={10} px={10}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant={'h4'} component={'h1'} fontFamily={'Poppins'} fontWeight={'600'} display={'flex'} justifyContent={'center'} color={'rgb(20,59,10)'}>
            Benefits
          </Typography>

          <div className="container" style={{ marginTop: '3rem'}}>
            <div className="row">
            <div className="col-md-12 offset-md-2 col-lg-12 offset-lg-3" style={{ display: 'flex', justifyContent: 'center'}}>
         
              <div className="content" style={{ width: isMobile ? '20rem' : '70rem'}}>
                 <div className="list-group list-group-flush">

                    <Collapsible title="Inpatient Benefits">
                      {/* Inpatient Benefits ROW */}
                      
                      <ul>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                            These benefits are paid to the accredited Health Care Institution (HCI) through All Case Rates
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          The case rate amount shall be deducted by the HCI from the member’s total bill, which shall include professional fees of attending physicians, prior to discharge
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                            The case rate amount is inclusive of hospital charges and professional fees of attending physician
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Documents needed: copy of Member Data Record or PhilHealth Benefit Eligibility Form (PBEF) and duly accomplished <Link href='https://www.philhealth.gov.ph/downloads/claim/PhilHealth_ClaimForm1.pdf' target='_blank'> PhilHealth Claim Form 1</Link> 
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                          Where available: <Link href='https://www.philhealth.gov.ph/partners/providers/institutional/map' target='_blank'> all accredited HCIs*</Link> <br/>
                          <i>*Different case rate amounts for selected medical conditions are being implemented when done in Primary Care facilities <Link href='https://www.philhealth.gov.ph/circulars/2013/circ14_2013.pdf' target='_blank'>(PhilHealth Circular 14, s-2013)</Link> </i>
                          </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'} mt={3} ml={2} color={'rgb(20,59,10)'}>
                            Only admissible cases shall be reimbursed
                          </Typography>
                        </li>
                       
                      </ul>
                            
                    </Collapsible>

                    <Collapsible title="Outpatient Benefits">

                      {/* DAY SURGERIES */}
                      <Typography variant='h6' fontFamily={'Poppins'} mt={3} ml={3} color={'green'}>
                        1. Day surgeries <span style={{ color: 'black', fontSize: '1rem'}}><i>(ambulatory or outpatient surgeries)</i></span> are services that include elective <span style={{ color: 'black', fontSize: '1rem'}}><i>(non-emergency)</i></span>  surgical procedures ranging from minor to major operations, where patients are safely sent home within the same day for post-operative care
                      </Typography>
                      <ul style={{ marginLeft: '1rem'}}>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Payments for these procedures are made to the accredited facility through All Case Rates</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The case rate amount shall be deducted by the HCI from the member’s total bill, which shall include professional fees of attending physicians, prior to discharge</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The case rate amount is inclusive of hospital charges and professional fees of attending physician</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Documents needed: copy of Member Data Record and duly accomplished PhilHealth Claim Form 1</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Where available: <Link href='https://www.philhealth.gov.ph/partners/providers/institutional/map' target='_blank'>Accredited Ambulatory Surgical Clinics (ASCs)</Link> </Typography>
                        </li>
                      </ul>

                      {/* Radiotherapy */}
                      <Typography variant='h6' fontFamily={'Poppins'} mt={3} ml={3} color={'green'}>
                      2. Radiotherapy
                      </Typography>
                      <ul style={{ marginLeft: '1rem'}}>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The case rate for radiotherapy using cobalt is P2,000 per session and P3,000 per session for linear accelerator</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Includes radiation treatment delivery using cobalt and linear accelator</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Claims for multiple sessions may be filed using one (1) claim form for both inpatient and outpatient radiation therapy</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>May be availed of even as second case rate (full case rate amount)</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>45 days benefit limit: One session is equivalent to one day deduction from the 45 allowable days per year</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>If procedure is done during confinement, only the total number of confinement days shall be deducted</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Exempted from Single Period of Confinement (SPC) rule <i>(admissions and re-admissions due to same illness or procedure within 90-calendar day period)</i> </Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Where available:<Link href='https://www.philhealth.gov.ph/partners/providers/institutional/map' target='_blank'> Accredited HCIs including Primary Care Facilities</Link>  that are accredited for the said service</Typography>
                        </li>
                      </ul>

                      {/* Hemodialysis */}
                      <Typography variant='h6' fontFamily={'Poppins'} mt={3} ml={3} color={'green'}>
                      3. Hemodialysis
                      </Typography>
                      <ul style={{ marginLeft: '1rem'}}>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The Case Rate for hemodialysis is P2,600 per session</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Covers both inpatient and outpatient procedures including emergency dialysis procedures for acute renal failure</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Claims for multiple sessions may be filed using one (1) claim form for both inpatient and outpatient hemodialysis</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>May be availed of even as second case rate (full case rate amount)</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>90 days benefit limit: One session is equivalent to one day deduction from the 90 allowable days per year</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>If procedure is done during confinement, only the total number of confinement days shall be deducted</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The procedure is exempted from Single Period of Confinement rule <i>(admissions and re-admissions due to same illness or procedure within 90-calendar day period)</i></Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Where available: All Accredited HCIs – <i>this benefit is no longer restricted to hospitals and free standing dialysis centers provided that the service is within their capability as provided for in the DOH license</i></Typography>
                        </li>
                      </ul>

                      {/* Outpatient Blood Transfusion */}
                      <Typography variant='h6' fontFamily={'Poppins'} mt={3} ml={3} color={'green'}>
                        4. Outpatient Blood Transfusion
                      </Typography>
                      <ul style={{ marginLeft: '1rem'}}>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>The case rate for outpatient blood transfusion is P3,640 (one or more units)</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Includes Drugs & Medicine, X-ray, Lab & Others, Operating Room</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Covers outpatient blood transfusion only</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>One day of transfusion of any blood or blood product, regardless of the number of bags, is equivalent to one session</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>May be availed of as second case rate (full case rate amount)</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>45 days benefit limit: One session for each procedure is equivalent to one day deduction from the 45 allowable days per year Exempted from the SPC rule</Typography>
                        </li>
                        <li>
                          <Typography variant='body1' fontFamily={'Poppins'}>Where to avail: <Link href='' target='_blank'>All Accredited HCIs</Link> </Typography>
                        </li>
                       
                      </ul>

                    </Collapsible>

                    <Collapsible title="Z Benefits">
                      {/* Z Benefit Documents ROW */}        
                      <img src={image1} alt='' style={{ marginTop: '2rem'}}/>
                    </Collapsible>

                    <Collapsible title="SDG Related">
                      {/* Konsulta ROW */}
                      <img src={image2} alt='' style={{ marginTop: '2rem'}}/>
                    </Collapsible>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>

      

        </Box>
      </Box>
    </Grid>
  );
}
