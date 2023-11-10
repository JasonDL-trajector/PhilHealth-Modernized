import { useState }from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const [region, setRegion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const { posts, title } = props;

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
      
        <Box className="markdown"  data-aos="fade-right">
          <Typography variant='h4' fontFamily={'Poppins'} fontWeight={600}>Directory of Offices</Typography>
          <Typography variant='body1' mt={3} fontFamily={'Poppins'}>You can view the Regional Offices, Local Health Insurance Offices, Business Centers and PhilHealth Express Branches</Typography>
        </Box>

        <Box data-aos="fade-right" mt={3}>
          <Typography variant='h5' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>Please Select Region</Typography>
          
          <FormControl sx={{ m: 1, minWidth: '90%', marginTop: '2rem' }} size="medium">
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: 'Poppins', marginRight: '1rem'}}>Region</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              
              value={region}
              label="Region"
              onChange={handleChange}
              sx={{ fontFamily: 'Poppins', fontWeight: 600, '&:before': {
                borderColor: 'green',
            },
            '&:after': {
                borderColor: 'green',
            }}}
            >
              <MenuItem sx={{ fontFamily: 'Poppins' }} value="">
                <em>None</em>
              </MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO I'}>PRO I</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO II'}>PRO II</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO CAR'}>PRO CAR</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO III-A'}>PRO III-A</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO III-B'}>PRO III-B</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO NCR'}>PRO NCR</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO NCR North - Manila'}>PRO NCR North - Manila</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO NCR Central - Quezon City'}>PRO NCR Central - Quezon City</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO NCR South - Pasig'}>PRO NCR South - Pasig</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO IV-A'}>PRO IV-A</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO IV-B'}>PRO IV-B</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO V'}>PRO V</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO VI'}>PRO VI</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO VII'}>PRO VII</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO VIII'}>PRO VIII</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO IX'}>PRO IX</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO X'}>PRO X</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO CARAGA'}>PRO CARAGA</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO XI'}>PRO XI</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO XII'}>PRO XII</MenuItem>
              <MenuItem sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'rgb(20,59,10)' }} value={'PRO BARMM'}>PRO BARMM</MenuItem>
              
            </Select>
        </FormControl>
        </Box>

        <Box data-aos="fade-right" mt={5} ml={1}>
          <Typography variant='h4' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>PRO V - Legazpi</Typography>

          <Box mt={3}>
            <Typography variant='h6' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>Regional Office</Typography>
            <Typography mt={1} variant='body1' fontFamily={'Poppins'}> <i>ANST IV Bldg., Benny S. Imperial Drive,</i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Legazpi City, Albay</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Healthline: (052) 481-5596</i> </Typography>
          </Box>

          <Box mt={3}>
            <Typography variant='h6' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>Local Health Insurance Offices</Typography>
            
            <Typography mt={1} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Legazpi City, Albay  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>2/F delos Santos Commercial Bldg. </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>LandCo Business Park, Bitano Legazpi City</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>(052) 481-55-96 (telefax); (052) 480-15-89</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>albay.pro5@philhealth.gov.ph</i> </Typography>

            <Typography mt={3} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Masbate City, Masbate  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>VMBT Building, Mabini St., Brgy. Kalipay,  </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Masbate City, Masbate</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>(056) 333-6041</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>masbate.pro5@philhealth.gov.ph</i> </Typography>
          
            <Typography mt={3} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Naga City, Camarines Sur  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Westpark, Magsaysay Ave., Naga City 4400 </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>(054) 473-5632; (054) 472-1483</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>naga.pro5@philhealth.gov.ph</i> </Typography>
          
            <Typography mt={3} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Daet, Camarines Norte </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Manzihing Corporation Building  </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Purok 1, Binanuaan, Talisay, Camarines Norte</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>(054) 440 3380-81</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>daet.pro5@philhealth.gov.ph</i> </Typography>

            <Typography mt={3} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Sorsogon, Sorsogon </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Sorcom Leasing, Burgos St., Brgy. Talisay,   </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Sorsogon City, Sorsogon</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>(056) 421-5582</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>sorsogon.pro5@philhealth.gov.ph</i> </Typography>

            <Typography mt={3} variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}>Virac, Catanduanes</Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>2/F Riverside Building, Virac Town Center   </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Gogon Sirangan, Virac, Catanduanes 4800</i> </Typography>
            <Typography variant='body1' fontFamily={'Poppins'} color={'#008000'}> <i>virac.pro5@philhealth.gov.ph</i> </Typography>

            <Typography mt={3} variant='h6' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>Satellite Office</Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>LGU Office Compound, Sta. Elena, Camarines Norte  </i>  </Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>LGU Compound, Nabua, Camarines Sur</i> </Typography>

            <Typography mt={3} variant='h6' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>Service Desk</Typography>
            <Typography variant='body1' fontFamily={'Poppins'}> <i>Santa Elena Municipal Bldg., Santa Elena, Camarines Norte  </i>  </Typography>
            
            <Typography mt={3} variant='h6' fontFamily={'Poppins'} fontWeight={600} color={'rgb(20,59,10)'}>PhilHealth Express</Typography>
            <Typography variant='body1' fontFamily={'Poppins'} bgcolor={'rgba(114, 179, 1, 0.3)'} padding={.5}> <i>Ground Floor, ABC Building, La Purisima St., Goa, Camarines Sur  </i>  </Typography>

          </Box>


        </Box>

    </Grid>
  );
}