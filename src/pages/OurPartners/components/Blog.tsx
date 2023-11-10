import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import { post } from './blog-posts';

const mainFeaturedPost = {
  title: '',
  description:
    "",
  image: 'https://www.philhealth.gov.ph/partners/providers/images/hcp_bnnr.jpg',
  imageText: '',
  linkText: '',
};

const posts = [post];


const defaultTheme = createTheme();

export default function Blog() {
  return (

    <div style={{ backgroundColor: 'white', paddingTop: '5rem', margin: '20px', borderRadius: '1rem'}}>
       <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="Philippine Health Insurance Corporation" posts={posts} />
             
            </Grid>
          </main>
        </Container>
       </ThemeProvider>

    </div>
   
  );
}
