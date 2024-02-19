import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Logo from '../Logo';
import ImageAvatar from '../ImageAvatar';


type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  return (
    <Box>

      <Box display={'flex'} justifyContent={'space-between'} padding={3}>
        <Logo />
        <ImageAvatar />
      </Box>

      <AppBar position="static">

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />

          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
            {props.title}
          </Typography>


        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
