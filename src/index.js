import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import App from './routes/App';
import Contact from './routes/Contact';
import Cart from './routes/Cart';

Amplify.configure(awsconfig);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/root",
    element: <Root />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);