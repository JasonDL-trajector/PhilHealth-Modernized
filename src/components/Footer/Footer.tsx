import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const footerLinks = [
    {
        link: "/"
    },
    {
        link: "https://www.philhealth.gov.ph/about_us/map/regional.htm"
    },
    {
        link: "https://www.philhealth.gov.ph/sitemap.html"
    },
    {
        link: "https://www.philhealth.gov.ph/#?w=500"
    },
    {
        link: "https://www.philhealth.gov.ph/privacy/"
    },
]

const footerLinksStyles = {
    color: 'white',
    fontFamiliy: 'Poppins',
    fontSize: 17,
    fontWeight: '300',
    textDecoration: 'none',
    ":hover": {
        textDecoration: 'underline',
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
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(20,59,10)'}}>

        <Grid container>

            <Grid md={7} >
                <Box pt={10} px={8} width={250}>
                    <Typography variant='h2' data-aos="fade-up" sx={{ fontFamily: 'Poppins', fontSize: 50, fontWeight: 600, borderBottom: '3px solid white'}}>PhilHealth</Typography>
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
                    {/* <Typography ml={2} mb={2} mt={-1} variant='h2' sx={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 400}}>(Callback requests will expire after 72 hours.)</Typography> */}
                    <Typography ml={2} mb={2} mt={-1} variant='h2' data-aos="fade-up"  sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 600}}>
                        <span className="material-symbols-outlined">phone_in_talk</span> Call Center Hotline: 84417442 (PHIC)
                    </Typography>
                    <Typography ml={2} mb={2} mt={-1} variant='h2' data-aos="fade-up" sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 400}}>
                    <p> <span className="material-symbols-outlined">mail</span> <strong>Email:</strong> <u>actioncenter@philhealth.gov.ph</u> </p> 
                    </Typography>
                    {/* <Typography ml={2} mb={2} mt={-1} variant='h2' sx={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 400}}>(Self-help only; agent assistance temporarily not available)</Typography> */}
                    

                </Box>
            </Grid>

            <Grid md={5}>
                <Box py={10} px={8}>
                    <Typography variant='h2' data-aos="fade-up"  sx={{ fontFamily: 'Poppins', fontSize: 30, fontWeight: 500, mt: 3.5}}>Links</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10rem'}}>
                    {/* FOOTER LINKS */}
                    <Box mt={-3.5} pl={10} sx={{ display: 'flex', flexDirection: 'column', gap: '.3rem'}}>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[0].link} style={footerLinksStyles}> Home </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[1].link} target="_blank" rel="noreferrer" style={footerLinksStyles} > Contact Us </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[2].link} target="_blank" rel="noreferrer"style={footerLinksStyles}> Sitemap </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[3].link} target="_blank" rel="noreferrer"style={footerLinksStyles}> Disclaimer </a></Typography>
                        <Typography data-aos="fade-up" variant='h6'> <a href={footerLinks[4].link} target="_blank" rel="noreferrer" style={footerLinksStyles}> Privacy Notice </a></Typography>
                    </Box>

                    {/* FOOTER BADGES */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '-1rem'}}>
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
            <Typography variant='body2' style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins', fontSize: 12, marginBottom: 2}}>
                © 2014 Philippine Health Insurance Corporation | Citystate Centre, 709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
            </Typography>
        </Box>
    </AppBar>
  )
}

export default Footer;