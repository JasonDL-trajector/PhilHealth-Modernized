import { useState }from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
  const [region, setRegion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

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
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up">
        {title}
      </Typography>
      <Divider />
      
        <Box className="markdown"  data-aos="fade-right">
          <Typography variant='h4' fontFamily={'Poppins'} fontWeight={600}>Privacy Notice for PhilHealth Website</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>In carrying out its mandate under Republic Act (RA) No. 7875, as amended by RAs 9241 and 10606, which relates to the administration of the National Health Insurance Program (NHIP), the Philippine Health Insurance Corporation (“PhilHealth or “We”) collects and processes personal data, including those sourced from its official website.</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>As a responsible data custodian, it commits to keep such personal data secure from any unlawful or unauthorized processing, in line with RA 10173, also known as the Data Privacy Act of 2012 (DPA), and the fundamental right to privacy of every individual.</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>This Privacy Notice defines how we manage the information we collect or generate via our official website and other linked online services. Since this website also contains links to other websites, visitors are advised to read the privacy notice (privacy policy) of those sites since they are separate and distinct from ours.</Typography>
        
          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Information We Collect</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>Collection is primarily carried out via the linked web applications found in My PhilHealth Portal under Online Services that record personal data including, but not limited to:</Typography>

          <ol>
            <li>
            <Typography variant='body1' mt={3} fontFamily={'Poppins'}>PhilHealth Identification Number;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>last name;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>first name;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>middle name;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>mobile number;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>sex;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>date of birth; </Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>civil status; and</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>email address.</Typography>
            </li>
          </ol>

          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>We also use cookies to help us maintain and improve the website to enhance user experience. Thus, when you visit our website, the following information are also recorded via Google Analytics: </Typography>

          <ol>
            <li>
            <Typography variant='body1' mt={3} fontFamily={'Poppins'}>browser type and version;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>browser plug-in types and versions;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>date and time of connection;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>length of visits to certain pages;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>IP address; and</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>page interaction information (eg, scrolling, clicks and mouse-overs).</Typography>
            </li>
          </ol>



          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Purpose of Collection</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>Personal data collected via the linked web applications are used for any or all the following purposes:</Typography>

          <ol>
            <li>
            <Typography variant='body1' mt={3} fontFamily={'Poppins'}>to facilitate electronic registration;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to verify the identity of a member and/ or his or her dependent;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to administer and update PhilHealth’s account records;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to provide appropriate services;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to guard against potential information security breaches;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to comply with legal and regulatory requirements; and</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>to respond to queries. </Typography>
            </li>
          </ol>

          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>On the other hand, data gathered and processed by Google Analytics are used to generate a report on the following:</Typography>

          <ol>
            <li>
            <Typography variant='body1' mt={3} fontFamily={'Poppins'}>most viewed pages (per day and per month);</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>number of regular users and new users;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>landing pages;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>social networking site which has the most referrals;</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>location of most users; and</Typography>
            </li>
            <li>
              <Typography variant='body1' mt={1} fontFamily={'Poppins'}>most common devices and browsers used to access the website.</Typography>
            </li>
            
          </ol>


          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Security Measures</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>PhilHealth has evolving controls and security policies in place in order to maintain the confidentiality, integrity and availability of the personal data it collects. All information collected by domains maintained by PhilHealth are stored in data centers accessible only to authorized personnel including third-party service providers.</Typography>

          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Sharing of Information</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>Personal data collected via the linked web applications are not disclosed to external parties unless required or permitted by law.</Typography>

          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Retention of Information</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>Except when otherwise required or permitted by law, collected data are kept only as long as they are necessary to achieve the purposes declared herein. After which, they are deleted or disposed of in a safe and secure manner.</Typography>

          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Rights of Data Subjects</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>Individuals whose personal data we collect are accorded rights by the DPA as data subjects. They may invoke such rights at any time, in accordance with the provisions of the law. On the other hand, if there are inaccuracies in their records that need to be corrected or updated, members must notify PhilHealth immediately through any of its Local Health Insurance Offices or Branches.</Typography>

          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Changes to this Notice</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>This Privacy Notice was issued <b>January 16, 2019</b> and will remain effective unless there is a revision, which will be effective immediately after being posted on this site. PhilHealth will make every effort to announce to the public any changes made on this Notice.</Typography>

          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>Contact Information</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>If you have feedback, questions, complaints or other concerns regarding this Privacy Notice or PhilHealth’s data processing operations, you may relay them to us via our Data Protection Officer using the information below:</Typography>
        
          <Typography variant='h6' mt={5} fontFamily={'Poppins'} fontWeight={600}>DATA PROTECTION OFFICER</Typography>
          <Typography variant='body1' mt={1} fontFamily={'Poppins'} fontWeight={600}>(02) 8441-7444 local 7425</Typography>
          <Typography variant='body1' mt={1} fontFamily={'Poppins'} fontWeight={600}>Callback Channel: 0917-8987442 (PHIC)</Typography>
          <Typography variant='body1' mt={1} fontFamily={'Poppins'}><b>Text</b> <i>"PHICcallback [space] Mobile No. or Metro Manila landline [space] details of your data privacy concern"</i> and we will call you during office hours, weekdays only.</Typography>
        
          <Typography variant='body1' mt={5} fontFamily={'Poppins'}>Callback requests will expire after 72 hours</Typography>
          <Typography variant='body1' mt={5} fontFamily={'Poppins'}>Email: <a href='#' target='_blank'>privacy.dpo@philhealth.gov.ph</a> </Typography>
        
        </Box>

       

    </Grid>
  );
}