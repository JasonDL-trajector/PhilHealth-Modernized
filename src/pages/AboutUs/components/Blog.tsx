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

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const mainFeaturedPost = {
  title: 'Contact Information',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://www.philhealth.gov.ph/about_us/images/abt_bnnr.jpg',
  imageText: 'Contact Information',
  linkText: 'Regional Offices ->',
};

const featuredPosts = [
  {
    title: 'PhilHealth Studies',
    date: 'Nov 6',
    description:
      "The PhilHealth Studies is the living and tangible proof of the corporation's commitment to this initiative.",
    image: 'https://www.philhealth.gov.ph/about_us/images/pstud.jpg ',
    imageLabel: 'Image Text',
    link: "https://www.philhealth.gov.ph/about_us/studies/"
  },
  {
    title: 'Annual Reports',
    date: 'Nov 6',
    description:
      'The PhilHealth Annual Report all the way back from 2003 to 2021.',
    image: 'https://www.philhealth.gov.ph/about_us/images/ar2021.png',
    imageLabel: 'Image Text',
    link: "https://www.philhealth.gov.ph/about_us/annual_report/"
  },
  {
    title: 'Statistics and Charts',
    date: 'Nov 6',
    description:
      "The PhilHealth Statics and Charts Report all the way back from 2007 to 2023.",
    image: 'https://www.philhealth.gov.ph/about_us/statsncharts/images/snc2023.jpg',
    imageLabel: 'Image Text',
    link: "https://www.philhealth.gov.ph/about_us/statsncharts/"
  },
  {
    title: 'PhilHealth Strategic Plan for 2021-2023',
    date: 'Nov 6',
    description:
      'Strategic plan following the conduct of a review of the 2016-2022 medium-term framework. ',
    image: 'https://www.philhealth.gov.ph/about_us/images/sp.png',
    imageLabel: 'Image Text',
    link: "https://www.philhealth.gov.ph/about_us/transparency/PhilHealthStratplan2021-23.pdf"
  },
];

const posts = [post];

const sidebar = {
  title: 'About',
  description:
    'About Us section page of PhilHealth website.',
  archives: [
    { title: 'R.A. 7875 and IRR', url: 'https://www.philhealth.gov.ph/about_us/ra7875.pdf' },
    { title: 'R.A. 9241 and IRR', url: 'https://www.philhealth.gov.ph/about_us/ra9241.pdf' },
    { title: 'R.A. 10606', url: 'https://www.philhealth.gov.ph/about_us/ra10606.pdf' },
    { title: 'Revised IRR of the National Health Insurance Act of 2013 (R.A. 7875 as amended by R.A. 9241 and 10606)', url: 'https://www.philhealth.gov.ph/about_us/IRR_NHIAct_2013.pdf' },
    { title: 'R.A. 11223 (Universal Health Care Act)', url: 'https://www.philhealth.gov.ph/about_us/RA11223_UHC.pdf' },
    { title: 'UHC-IRR', url: 'https://www.philhealth.gov.ph/about_us/UHC-IRR_Signed.pdf' },
    { title: 'IRR of R.A. 11228', url: 'https://www.philhealth.gov.ph/about_us/IRR_RA11228.pdf' },
    { title: 'PhilHealth Rules On Administrative Cases (PROAC) Involving Health Care Providers, Members And PhilHealth Employees', url: 'https://www.philhealth.gov.ph/about_us/AnnexA_PBRNo2571-PROAC.pdf' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
  medicalLiterature: [
    { title: 'Philippine National Formulary (PNF) Essential Medicines List (EML)', url: "https://www.philhealth.gov.ph/partners/providers/pdf/PNF-EML_11022022.pdf" },
    { title: 'HTA Forum (2006)', url: "https://www.philhealth.gov.ph/partners/providers/pdf/hta_forum_v4n1-2006.pdf" },
    { title: 'National TB Control Program Manual', url: "https://www.philhealth.gov.ph/partners/providers/pdf/NTCP_MoP2014.pdf" },
    { title: 'Comprehensive and Unified Policy for TB Control', url: "https://www.philhealth.gov.ph/partners/providers/pdf/ComprehensiveUnifiedPolicy_TB.pdf" },
    { title: 'Policy recommendations on Leptospirosis', url: "https://www.philhealth.gov.ph/partners/providers/pdf/Leptospirosis_Policy_Statements.pdf" },
  ],
  forumMaterials: [
    { title: '2018', url: "https://www.philhealth.gov.ph/2018policyforum/" },
  ],
  corporateData: [
    { title: 'PhilHealth Corporate Data Dictionary', url: "https://www.philhealth.gov.ph/about_us/PhilHealthCorporateDataDictionary10052022.pdf" },
  ],
  repositoryFramework: [
    { title: 'National Health Data Repository Framework', url: "https://www.philhealth.gov.ph/about_us/NationalHealthDataRepositoryFramework03282022.pdf" },
  ],
  procurementPlan: [
      { title: 'Annual Procurement Plan', url: "https://www.philhealth.gov.ph/about_us/app/2023/" },
  ],
  privacyNotice: [
    { title: 'Members and Health Care Professionals', url: "https://www.philhealth.gov.ph/privacy/mbr_hcp.php" },
    { title: 'Suppliers and Consultants', url: "https://www.philhealth.gov.ph/privacy/splr_cnslt.php" },
    { title: 'Applicants and Employees', url: "https://www.philhealth.gov.ph/privacy/applcnts_emplys.php" },
  ],
};

const defaultTheme = createTheme();

export default function Blog() {

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
  return (

    <div style={{ backgroundColor: 'white', paddingTop: '5rem', margin: '20px', borderRadius: '1rem', paddingBottom: isMobile ? '2rem' : 0}}>
       <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        {/* <Box>
          <Typography variant='h2' textAlign={'center'} fontFamily={'Poppins'}>ABOUT US</Typography>
        </Box> */}
        
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="Philippine Health Insurance Corporation" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
                medicalLiterature={sidebar.medicalLiterature}
                forumMaterials={sidebar.forumMaterials}
                corporateData={sidebar.corporateData}
                repositoryFramework={sidebar.repositoryFramework}
                procurementPlan={sidebar.procurementPlan}
                privacyNotice={sidebar.privacyNotice}



              />
            </Grid>
          </main>
        </Container>
       </ThemeProvider>

    </div>
   
  );
}
