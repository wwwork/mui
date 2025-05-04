import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export default function TextFieldDemo() {
  const [value, setValue] = useState<string | null>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setValue(event.currentTarget.value);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="test" variant="outlined" />
        <TextField label="test" variant="filled" />
        <TextField label="test" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="test1ss"
          variant="outlined"
          size="small"
          color="warning"
          value={value}
          error={!value}
          helperText={!value ? "Require" : "Error happen"}
          onChange={handleChange}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="test"
          variant="outlined"
          size="small"
          color="warning"
          required
          type="password"
          value={"password"}
        />
        <TextField
          label="test"
          variant="outlined"
          size="small"
          color="warning"
          helperText="helper text"
          disabled
          error
        />

        <TextField
          label="readonly"
          variant="outlined"
          size="small"
          color="warning"
          helperText="readonly"
          InputProps={{ readOnly: true }}
        />
      </Stack>
    </Stack>
  );
}
