import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_KEYWORD, SET_PAGE } from "../../../config/redux/action/type";

const Navbar = () => {
  const navigate = useNavigate();
  const { keyword } = useSelector((state) => state);

  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch({ type: SET_PAGE, value: 1 });
    navigate(`/movie?query=${keyword}`);
  };

  return (
    <div className="flex px-5 py-4 items-center justify-between bg-[#f8f9fa] ">
      <div className="flex">
        <div className="text-4xl font-bold text-primary tracking-wider">
          <Link to={"/"}>
            <p className="drop-shadow-xl">R-Movies</p>
          </Link>
        </div>
      </div>
      <div className="">
        <FormControl variant="outlined" className="">
          <InputLabel htmlFor="search">Search Movies</InputLabel>
          <OutlinedInput
            id="search"
            type="text"
            onChange={(e) =>
              dispatch({ type: SET_KEYWORD, value: e.target.value })
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" onClick={onSearch}>
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
