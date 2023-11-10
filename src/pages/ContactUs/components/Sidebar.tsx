import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
  description: string;
  medicalLiterature: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { description, title, medicalLiterature } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up">
          {title}
        </Typography>
        <Typography fontFamily={'Poppins'} data-aos="fade-up">{description}</Typography>
      </Paper>


      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'} data-aos="fade-up">
        Hospitals
      </Typography>
     
        <Link display="block" href='https://www.philhealth.gov.ph/about_us/phCARES_hospitals.pdf' mt={2} target='_blank' data-aos="fade-left" sx={{ cursor: 'pointer'}}>
          <img src='https://www.philhealth.gov.ph/images/ph_cares_dir.png' width={'100%'}/>
        </Link>
      
     
    </Grid>
  );
}
