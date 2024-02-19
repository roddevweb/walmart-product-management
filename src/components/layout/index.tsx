import React, { Children, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps={
  title:string
  children?:ReactNode
}

const Index = (props:LayoutProps) => {
  return (
    <div>
      <Header title={props.title} />
      
      <Footer/>
    </div>


  );
};

export default Index;