import React from "react";
import  {createRoot}  from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';
import './index.css'
import { Provider } from "./context/context";

const root = createRoot(document.getElementById("root"));

const theme = createTheme({
      // You can customize your theme here. For example:
      palette: {
        primary: {
          main: '#556cd6',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: '#ff1744',
        },
      },
    });
root.render(
    <Provider>  
      <ThemeProvider theme={theme}>
           <App />
     </ThemeProvider>
    </Provider>
     
     
)