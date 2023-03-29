import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        top: 0,
        background: "#000",
        justifyContent:"space-between",
        alignItems: "center",
      }}
      p="2"
    >
      <Link to="/">
        <img src={logo} alt="logo" height="45" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
