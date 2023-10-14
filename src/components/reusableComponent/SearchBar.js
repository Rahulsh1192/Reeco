import { SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React from "react";

function SearchBar() {
  const searchStyle = {
    border: "0",
    outline: "0",
    ".MuiInputBase-root": {
      borderRadius: "5px",
      background: "#eee",
      padding: "0 3px",
      height: "35px",
      border: "0",
      outline: "none",
    },
  };
  return (
    <>
      <TextField
        type="text"
        variant="standard"
        id="input"
        placeholder="Search..."
        name=""
        sx={searchStyle}
        size="small"
        // fullWidth
        // focused
        autoComplete="off"
        // onChange={debouncedResults}
        // onInput={handleInput}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
    </>
  );
}

export default SearchBar;
