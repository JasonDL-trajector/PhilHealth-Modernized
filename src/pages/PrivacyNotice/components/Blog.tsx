import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import { post } from './blog-posts';

const mainFeaturedPost = {
  title: 'Contact Information',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://www.philhealth.gov.ph/about_us/images/abt_bnnr.jpg',
  imageText: 'Contact Information',
  linkText: 'Regional Offices ->',
};

const posts = [post];

const sidebar = {
  title: 'Contact Us',
  description:
    'Contact Us section page of PhilHealth website.',
  
  medicalLiterature: [
    { title: 'Philippine National Formulary (PNF) Essential Medicines List (EML)', url: "https://www.philhealth.gov.ph/partners/providers/pdf/PNF-EML_11022022.pdf" },
    { title: 'HTA Forum (2006)', url: "https://www.philhealth.gov.ph/partners/providers/pdf/hta_forum_v4n1-2006.pdf" },
    { title: 'National TB Control Program Manual', url: "https://www.philhealth.gov.ph/partners/providers/pdf/NTCP_MoP2014.pdf" },
    { title: 'Comprehensive and Unified Policy for TB Control', url: "https://www.philhealth.gov.ph/partners/providers/pdf/ComprehensiveUnifiedPolicy_TB.pdf" },
    { title: 'Policy recommendations on Leptospirosis', url: "https://www.philhealth.gov.ph/partners/providers/pdf/Leptospirosis_Policy_Statements.pdf" },
  ],
  
};

const defaultTheme = createTheme();

export default function Blog() {
  return (

    <div style={{ backgroundColor: 'white', paddingTop: '2rem', paddingBottom: '5rem', margin: '20px', borderRadius: '1rem'}}>
       <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        
        <Container maxWidth="lg">
          <main>
            
            <Grid container sx={{ mt: 3 }}>
              <Main title="Philippine Health Insurance Corporation" posts={posts} />
             
            </Grid>
          </main>
        </Container>
       </ThemeProvider>

    </div>
   
  );
}
