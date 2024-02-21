import React from 'react';
import { Box, Typography, colors } from '@mui/material';
import { Directions, Height } from '@mui/icons-material';


const Footer = () => {
    return (
        <Box
            display="flex"
            justifyContent='center'
            alignItems='center'
            width='100%'
            height={45}
            sx={{ backgroundColor: '#004F9A' }}
        >
            <Typography style={{ color: 'white' }}>© 2024 Walmart. All Rights Reserved.</Typography>
        </Box>
    )
}

export default Footer;