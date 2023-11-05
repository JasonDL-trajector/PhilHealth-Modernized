import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  medicalLiterature: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  forumMaterials: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  corporateData: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  repositoryFramework: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  procurementPlan: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  privacyNotice: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title, medicalLiterature, forumMaterials, corporateData, repositoryFramework, procurementPlan, privacyNotice } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up">
          {title}
        </Typography>
        <Typography fontFamily={'Poppins'} data-aos="fade-up">{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'} data-aos="fade-up">
        Enabling Laws
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-left"> 
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'} data-aos="fade-up">
        Medical Literature
      </Typography>
      {medicalLiterature.map((medical) => (
        <Link display="block" variant="body1" href={medical.url} key={medical.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-left">
          {medical.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'} data-aos="fade-up">
        Forum Materials
      </Typography>
      {forumMaterials.map((forum) => (
        <Link display="block" variant="body1" href={forum.url} key={forum.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-right">
          {forum.title}
        </Link>
      ))}

      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'}>
      PhilHealth Corporate Data Dictionary
      </Typography> */}
      {corporateData.map((corporate) => (
        <Link display="block" variant="h6" gutterBottom sx={{ mt: 3 }} href={corporate.url} key={corporate.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-right">
          {corporate.title}
        </Link>
      ))}

      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'}>
        Enabling Laws
      </Typography> */}
      {repositoryFramework.map((repository) => (
        <Link display="block" variant="h6" gutterBottom sx={{ mt: 3 }} href={repository.url} key={repository.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-right">
          {repository.title}
        </Link>
      ))}

      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'}>
        Enabling Laws
      </Typography> */}
      {procurementPlan.map((procurement) => (
        <Link display="block" variant="h6" gutterBottom sx={{ mt: 3 }} href={procurement.url} key={procurement.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-right">
          {procurement.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} fontFamily={'Poppins'} data-aos="fade-up">
        Privacy Notice
      </Typography>
      {privacyNotice.map((privacy) => (
        <Link display="block" variant="body1" href={privacy.url} key={privacy.title} fontFamily={'Poppins'} color={'#008000'} data-aos="fade-right">
          {privacy.title}
        </Link>
      ))}
     
    </Grid>
  );
}
