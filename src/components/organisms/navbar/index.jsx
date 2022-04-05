import SearchIcon from "@mui/icons-material/Search";
import {
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-5 py-4 justify-between bg-[#f8f9fa] ">
      <div className="flex items-center gap-3">
        <div className="text-4xl font-bold text-primary tracking-wider">
          <p className="drop-shadow-xl">R-Movies</p>
        </div>
        <div></div>
      </div>
      <div className="">
        <FormControl variant="outlined" className="">
          <InputLabel htmlFor="search">Search Movies</InputLabel>
          <OutlinedInput
            id="search"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon fontSize="large" className="text-black/60" />
                </IconButton>
              </InputAdornment>
            }
            label="Search Movies"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Navbar;
