import { useState }from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import loading from './assets/loading.gif'

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Typography variant="h6" gutterBottom fontFamily={'Poppins'} data-aos="fade-up" textAlign={'center'}>
        {title}
      </Typography>
      <Divider />
      
        <Grid container className="markdown"  data-aos="fade-right" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> 
          <Grid md={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant='h4' fontFamily={'Poppins'} fontWeight={600} textAlign={'center'} color={'#143B0A'}>Sitemap</Typography>
            <Typography variant='body1' mt={5} fontFamily={'Poppins'} textAlign={'center'}>We are currently working on our sitemap.</Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <img src={loading} alt='Loading animation' style={{ width: isMobile ? 300 : 500}}/>
            </Box>
            
          </Grid>
          
        
        </Grid>

       

    </Grid>
  );
}