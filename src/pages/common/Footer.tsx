import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 25%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
   
    
  };

const footerLinks = [
    {
        link: "/"
    },
    {
        link: "/contact-us"
    },
    {
        link: "/sitemap"
    },
    {
        link: ""
    },
    {
        link: "/privacy-notice"
    },
]

const footerLinksStyles = {
    color: 'white',
    fontFamiliy: 'Poppins',
    fontSize: 17,
    fontWeight: '300',
    textDecoration: 'none',
    ":hover": {
        textDecoration: 'none',
        cursor: 'pointer'
    }
}

const footerBadges = [
    {
        image: "https://www.philhealth.gov.ph/images/transparency_seal.png",
        link: "https://www.philhealth.gov.ph/about_us/transparency/"
    },
    {
        image: "https://www.philhealth.gov.ph/images/corp_gov.png",
        link: "https://www.philhealth.gov.ph/about_us/transparency/GOCC_Scorecard.pdf"
    },
    {
        image: "https://www.philhealth.gov.ph/images/foi_logo.png",
        link: "https://www.foi.gov.ph/requests?agency=PH"
    }
];

const footerSocials = [
    {
        image: "https://www.philhealth.gov.ph/images/fb_btn.png",
        link: "https://www.facebook.com/PhilHealthofficial/"
    },
    {
        image: "https://www.philhealth.gov.ph/images/twitter_btn.png",
        link: "https://twitter.com/teamphilhealth"
    },
    {
        image: "https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png",
        link: "https://www.youtube.com/user/teamphilhealth"
    }
];


const Footer = () => {
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(20,59,10)'}}>

        <Grid container>

            <Grid md={7} xs={12}>
            <Box pt={isMobile ? 10 : 10} px={isMobile ? 8 : 8} width={isMobile ? '100%' : 250}>
                    <a style={{ cursor: 'pointer'}} onClick={() => navigate('/')}>
                        <Typography variant='h2' 
                                    data-aos="fade-up" 
                                    sx={{ 
                                        fontFamily: 'Poppins', 
                                        fontSize: isMobile ? 36 : 50,
                                        color: 'white', 
                                        fontWeight: 600, 
                                        textDecoration: 'underline'
                                    }}>
                                PhilHealth
                        </Typography>
                    </a>
                </Box>

                <Box pt={5} px={3} sx={{ transform: 'scale(.8)'}}>
                    <Typography pb={2} variant='h2' data-aos="fade-up" sx={{ fontFamily: 'Poppins', fontSize: 30, fontWeight: 600}}>Contact Information:</Typography>
                    <Typography ml={2} mb={-1} variant='h2' data-aos="fade-up" sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 600}}>
                        <span className="material-symbols-outlined">call</span> Callback Channel: 0917-898-7442 (PHIC)
                        </Typography>
                    <Typography ml={2} pb={0} variant='h2' data-aos="fade-up" sx={{ fontFamily: 'Poppins', fontSize: 16}}>
                        <p>
                        <span className="material-symbols-outlined">phone_iphone</span><strong style={{ fontWeight: 600, fontSize: 20}}> Text:</strong> <i>"PHICcallback [space] Mobile No. or Metro Manila landline [space] details of your concern"</i> and we will call you during office hours, weekdays only. 
                        </p> 
                    </Typography>
                   
                    <Typography ml={2} mb={2} mt={-1} variant='h2' data-aos="fade-up"  sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 600}}>
                        <span className="material-symbols-outlined">phone_in_talk</span> Call Center Hotline: 84417442 (PHIC)
                    </Typography>
                    <Typography ml={2} mb={2} mt={-1} variant='h2' sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 400}}>
                    <p> <span className="material-symbols-outlined">mail</span> <strong>Email:</strong> <u>actioncenter@philhealth.gov.ph</u> </p> 
                    </Typography>
                    
                    

                </Box>
            </Grid>

            <Grid md={5} xs={12} sx={{marginTop: isMobile ? '-5rem' : 0}}>
                <Box py={isMobile ? 6 : 10} px={isMobile ? 8 : 8}>
                    <Typography variant='h2' data-aos="fade-up"  sx={{ fontFamily: 'Poppins', fontSize: isMobile ? 24 : 30, fontWeight: 500, mt: isMobile ? 1 : 3.5}}>Links</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10rem', }}>
                    {/* FOOTER LINKS */}
                    <Box mt={-3.5} pl={10} sx={{ display: 'flex', flexDirection: 'column', gap: '.3rem', marginBottom: isMobile ? '-15rem' : 0, zIndex: 1000}}>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[0].link} style={footerLinksStyles}> Home </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[1].link} rel="noreferrer" style={footerLinksStyles} > Contact Us </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[2].link} target='_blank' rel="noreferrer" style={footerLinksStyles}> Sitemap </a></Typography>
                        <Typography data-aos="fade-up" onClick={handleOpen} sx={footerLinksStyles}>Disclaimer</Typography>
                            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

                            <Box data-aos="zoom in">    
                                <Box sx={{...style, width: isMobile? 300 : 500, left: isMobile? '45%' : '50%' }} >
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        fontFamily={'Poppins'}
                                        bgcolor={'rgb(20,59,10)'}
                                        color={'white'}
                                        mt={0}
                                        padding={4}
                                        sx={{ borderTopLeftRadius: '.75rem', borderTopRightRadius: '.75rem'}}
                                    >
                                        Disclaimer
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }} fontFamily={'Poppins'} padding={3}>
                                        The PhilHealth Logo, Photographs and information on this Web Site may not be reproduced, copied, or downloaded in any form or by any means -- graphic, electronic, or mechanical, including recording, taping, photocopying, or information storage and retrieval systems -- for use in illegal, damaging or pornographic material.
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 0 }} fontFamily={'Poppins'} padding={3}>
                                        But PhilHealth information may be used for educational or informative purposes and may be reproduced, copied, or downloaded without the written permission from PhilHealth.
                                    </Typography>
                                </Box>
                            </Box>


                            </Modal>
                        <Typography  variant='h6'> <a href={footerLinks[4].link} style={footerLinksStyles}> Privacy Notice </a></Typography>
                    </Box>

                    {/* FOOTER BADGES */}
                    <Box sx={{ display: isMobile ? 'none' : 'flex', flexDirection: isMobile ? 'row':'column', marginTop: '-1rem', marginBottom: isMobile ? '-3rem' : 0 }}>
                        <a href={footerBadges[0].link} target='_blank' rel="noreferrer">
                            <img src={footerBadges[0].image} width={50} data-aos="fade-left" alt='Transparency' />
                        </a> 

                        <a href={footerBadges[1].link} target='_blank' rel="noreferrer">
                            <img src={footerBadges[1].image} width={50} data-aos="fade-left" alt='Transparency' />
                        </a> 

                        <a href={footerBadges[2].link} target='_blank' rel="noreferrer">
                            <img src={footerBadges[2].image} width={50} data-aos="fade-left" alt='Transparency' />
                        </a> 
                    </Box>

                    {/* FOOTER SOCIALS */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7rem', marginLeft: '-8rem', marginTop: '1rem'}}>
                    <a href={footerSocials[0].link} target='_blank' rel="noreferrer">
                            <img src={footerSocials[0].image} data-aos="fade-left" alt='Transparency' />
                        </a> 

                        <a href={footerSocials[1].link} target='_blank' rel="noreferrer">
                            <img src={footerSocials[1].image} data-aos="fade-left" alt='Transparency' />
                        </a> 

                        <a href={footerSocials[2].link} target='_blank' rel="noreferrer">
                            <img src={footerSocials[2].image} data-aos="fade-left" alt='Transparency' width={35} style={{ marginTop: '-10px', marginLeft: '-1px'}} />
                        </a> 
                    </Box>
                </Box>
                
            </Grid>

        </Grid>
       

        <Box>
            <Grid>

            </Grid>
        </Box>
        
        <Box py={2} sx={{ backgroundColor: 'rgb(17,37,15)'}}>
            <Typography variant='body2' textAlign={'center'} style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins', fontSize: isMobile ? 10 : 12, marginBottom: 2}}>
                © 2014 Philippine Health Insurance Corporation | Citystate Centre, 709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
            </Typography>
        </Box>
    </AppBar>
  )
}

export default Footer;