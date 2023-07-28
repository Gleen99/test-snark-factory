import React from 'react';
import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import Snark_logo_noir from './img/Snark_logo_noir.png';
import Group_173 from './img/Group_173.svg';

const MenuList = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  alignItems: 'center',
  minWidth: '778px',
});

const MenuItem = styled('li')({
  color: '#00525D',
  fontFamily: 'Dosis',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  cursor: 'pointer',
  marginRight: '69px',
});

const AccountItem = styled(MenuItem)({
    display: 'flex',
    width: '155px',
    height: '45px',
    borderRadius: '10px',
    background: '#FF8123',
    color: '#FFF',
    fontWeight: 700,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2px',
  });
  

const AccountBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Menu: React.FC = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#FFF',
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.10)',
                width: 1240,
                height: 104,
                flexShrink: 0,
                marginRight: 20,
            }}
        >
            <Toolbar sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
                <Box component="img" src={Snark_logo_noir} alt="logo" sx={{width: '273px', height: '37px', marginRight: '80px'}} />
                <MenuList>
                    <MenuItem>Qui sommes-nous</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <AccountItem>Mon compte</AccountItem>
                </MenuList>
                <AccountBox>
                    <Box component="img" src={Group_173} alt="icon" sx={{marginTop: '60px', marginBottom: '39px'}}/>
                </AccountBox>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
