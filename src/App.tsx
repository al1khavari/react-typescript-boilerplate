import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Stylable } from '@/types/commons';
import { themeConfig } from './ThemeConfig';
import Sample from './Sample';

export type AppProps = Stylable;

const App: React.FC<AppProps> = ({ className }) => (
   <div className={className}>
      <ThemeProvider theme={themeConfig}>
         <Sample />
      </ThemeProvider>
   </div>
);

const StyledApp = styled(App)``;

export default StyledApp;
