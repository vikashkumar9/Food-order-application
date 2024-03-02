import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";


const MenuSearch = ({ addDatahandler }) => {
  const [items, setItems] = useState("");

  const handleAddData = () => {
    addDatahandler(items);
    setItems("");
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          mb: "20px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase
          value={items}
          onChange={(e) => setItems(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search yummy food 🍔🍕..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleAddData}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default MenuSearch;
