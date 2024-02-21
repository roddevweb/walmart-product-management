import React, { Children, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

type LayoutProps={
  title:string
  children?:ReactNode
}

const Index = (props:LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header title={props.title} />
        <Box component="main" flexGrow={1}>
          {props.children}
        </Box>
      <Footer/>
    </Box >


  );
};

export default Index;