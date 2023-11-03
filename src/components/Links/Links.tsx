import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from 'react'
import { LinksURL, getLinks } from '../../services/links'
import { LinksBanner, getLinksBanner } from '../../services/links'

const anchorStyles = {
  ":hover": { 
    transform: "scale(1.1)",
    transition: "transform .3s"
  } 
}

const imagesStyles = {
  width: '25rem',
  height: '10rem',
  ":hover": { 
    transform: "scale(1.2)",
    transition: "transform .3s"
  } 
}

const labelStyles = {
  fontSize: 32,
  fontFamily: 'Poppins',
  fontWeight: 400,
  textAlign: 'left',
  color: 'rgb(20,59,10)'
}

const Links = () => {

  const [links, setLinks] = useState<Array<LinksURL>>([]);
  const [linksBanner, setLinksBanner] = useState<Array<LinksBanner>>([]);

  useEffect(() => {
    getLinks().then(links => setLinks(links));
  }, []);

  useEffect(() => {
    getLinksBanner().then(linksBanner => setLinksBanner(linksBanner));
  }, []);

  return (
    <Grid sx={{
      backgroundColor: "#F5F5F5",
      mt: 10,
      py: 10,
    }}>
      <Box>
        <Typography variant="h2" data-aos="fade-up"
          sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 600,
            color: 'rgb(20,59,10)',
            display: 'flex',
            justifyContent: 'center'
          }}>
          QUICK LINKS
        </Typography>
      </Box>

      <Box mt={10} px={8} sx={{ display: 'flex', flexDirection: 'row', gap: '12rem'}}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* TOP ROW */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            {linksBanner.slice(0, 2).map((link, index) => (
              <Box key={index} sx={anchorStyles}>
                <a href={link.links} target="_blank" rel="noreferrer">
                  <img data-aos="zoom-in" src={link.image} style={imagesStyles} alt={link.image} />
                </a>
              </Box>
            ))}
          </Box>

          {/* MID ROW */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            {linksBanner.slice(2, 4).map((link, index) => (
              <Box key={index} sx={anchorStyles}>
                <a href={link.links} target="_blank" rel="noreferrer">
                  <img data-aos="zoom-in" src={link.image} style={imagesStyles} alt={link.image} />
                </a>
              </Box>
            ))}
          </Box>

          {/* BOTTOM ROW */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', marginLeft: '25%' }}>
            {linksBanner.slice(4, 5).map((link, index) => (
              <Box key={index} sx={anchorStyles}>
                <a href={link.links} target="_blank" rel="noreferrer">
                  <img data-aos="zoom-in" src={link.image} style={imagesStyles} alt={link.image} />
                </a>
              </Box>
            ))}
          </Box>
        </Box>

        <Box py={10} sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '3rem', borderLeft: "5px solid rgb(20,59,10)" }}>
          {links.map((link, index) => (
            <Box key={index} sx={anchorStyles}>
              <a href={link.links} target="_blank" rel="noreferrer">
                <Typography data-aos="fade-down" variant="h3" sx={labelStyles}>{link.label}</Typography>
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  )
}

export default Links;
