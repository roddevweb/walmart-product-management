import React from 'react';
import { Box, Typography, colors } from '@mui/material';
import { Directions, Height } from '@mui/icons-material';


const Footer = () => {
    return (
<Box style={{display:'flex', backgroundColor:'#004F9A', height: 30, justifyContent:'center', alignItems:'center'}}>
    <Typography style={{color:'white'}}>© 2024 Walmart. All Rights Reserved.</Typography>
</Box>



    )
}

export default Footer;