import React from 'react';
import { Box, Typography, Grid, IconButton, styled } from '@mui/material';
import Snark_logo_blanc_1 from './img/Snark_logo_blanc_1.png'
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Square = styled('div')({
  width: '100.8%',
  height: 319,
  background: '#00525D',
  marginLeft: -10,
  marginTop: -80,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

const StyledTypography = styled(Typography)({
  color: "#FFF",
  fontFamily: "Dosis",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
});

const Footer: React.FC = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column', 
        }}>
            <Square>
                <Grid container spacing={3} sx={{margin: "0px 206px 50px 206px"}}>

                    <Grid item xs={3}>
                        <img src={Snark_logo_blanc_1} alt="salade" style={{width: '226px', height: "30px"}} />
                    </Grid>
                    <Grid item xs={3}>
                        <StyledTypography variant="body1">Nous suivre</StyledTypography>

                        <IconButton aria-label="facebook" sx={{ color: '#FFF' }}>
                            <Facebook />
                        </IconButton>
                        <IconButton aria-label="twitter" sx={{ color: '#FFF' }}>
                            <Twitter />
                        </IconButton>
                        <IconButton aria-label="instagram" sx={{ color: '#FFF' }}>
                            <Instagram />
                        </IconButton>
                        <IconButton aria-label="linkedin" sx={{ color: '#FFF' }}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <StyledTypography variant="body1">Mentions légales</StyledTypography>
                        <StyledTypography variant="body1" sx={{marginTop:"5px"}}>CGU/CGV</StyledTypography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box 
                          component="button" 
                          sx={{
                            borderRadius: "10px",
                            background: "#FF8123",
                            width: "183px",
                            height: "45px",
                            flexShrink: 0,
                            color: "#FFF",
                            fontFamily: "Dosis",
                            fontSize: "24px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "normal",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: 'none',
                            outline: 'none',
                            WebkitAppearance: 'none'
                          }}>
                          Nous contacter
                        </Box>
                    </Grid>
                </Grid>
            </Square>
        </Box>
    );
};

export default Footer;
