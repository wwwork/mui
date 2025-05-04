import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export default function RadioButtonDemo() {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel id="job-exp-label">Years of experience</FormLabel>
          <RadioGroup
            name="job-experience"
            aria-label="job-exp-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="3-4"
              value="3-4"
            />
            <FormControlLabel
              control={<Radio size="small" color="info" />}
              label="5-6"
              value="5-6"
            />
          </RadioGroup>
          <FormHelperText>Test of form helper text</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}
