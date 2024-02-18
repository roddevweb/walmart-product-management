import React from 'react';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  return (
    <Box>

      <Box display="flex" justifyContent="space-between" sx={{ mt: 4, mr: 3, mb: 4, ml: 3 }}>
        <img src="/walmart_logo.svg" alt="Logo" width={176} height={42} />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
            Menu
          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
            {props.title}
          </Typography>

          <Button variant="contained" endIcon={<AddIcon />} style={{ backgroundColor: '#FFC220', color: 'black' }}>
            Add products
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
