import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const BtnAddProduct = () => {    
    return (
        <Button variant="contained" endIcon={<AddIcon />} style={{ backgroundColor: '#FFC220', color: 'black' }}>
            Add products
        </Button>
    )
}

export default BtnAddProduct;


