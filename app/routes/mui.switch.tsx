import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export default function SwitchDemo() {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="DArk mode"
        control={
          <Switch
            checked={!!checked}
            onChange={handleChange}
            size="small"
            color="warning"
          />
        }
      />
    </Box>
  );
}
