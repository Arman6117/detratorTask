"use client";
import {
  
    Avatar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Input } from "./input";

const Navbar = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="h-15 py-2 justify-between bg-neutral-900 shadow-sm shadow-neutral-500 max-w-screen flex items-center px-4">
      <Typography variant={`${isSmall ? "subtitle1" : "h5"}` } sx={{width:{xs:'100%'}}} >
        Brand Name
      </Typography>
      {/* <input className='border-white border h-9 rounded-md max-w-[300px] w-full bg-transparent' /> */}
     <Input/>
      <div className="flex items-center gap-3">
        <Avatar/>
        <span>James</span>
      </div>
    </div>
  );
};

export default Navbar;
