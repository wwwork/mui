import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function SelectDemo() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value;

    setCountries(value);
  };

  return (
    <>
      <Box width="250px">
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          helperText="pls select country"
          color="secondary"
          error
        >
          <MenuItem value="in"> India</MenuItem>
          <MenuItem value="us"> USA</MenuItem>
          <MenuItem value="au"> Australia</MenuItem>
        </TextField>
      </Box>
    </>
  );
}
