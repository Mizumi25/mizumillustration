import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import './App.css';
import Entrance from '../components/Entrance/';



export default function App() {

  return (

      <Router>
            <Entrance />
            <Headermain />
            <AppRoutes />
      </Router>

          
  );
};




