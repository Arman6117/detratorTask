'use client'
import React from "react";
import {
  Avatar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Input } from "./input";

const Navbar = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <div className="h-16 py-2 justify-between max-w-screen flex items-center px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-b border-gray-700/30">
      <Typography 
        variant={`${isSmall ? "subtitle1" : "h5"}`} 
        sx={{
          width: { xs: '100px', sm: 'auto' },
          background: 'linear-gradient(to right, #FF6B6B, #4E65FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}
      >
        Brand Name
      </Typography>
      
      <Input  />
      
      <div className="flex items-center gap-3">
        <Avatar sx={{ 
          background: 'linear-gradient(135deg, #4E65FF, #92EFFD)',
          border: '2px solid rgba(255,255,255,0.1)'
        }}/>
        <span className="text-gray-200 font-medium hidden md:inline">James</span>
      </div>
    </div>
  );
};

export default Navbar;