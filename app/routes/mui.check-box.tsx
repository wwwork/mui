import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

export default function CheckBoxDemo() {
  const [value, setValue] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ value });
  console.log({ skills });

  const handleCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  const handleChangeSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!skills.includes(event.target.value)) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          id="FormControlLabel"
          control={<Checkbox onChange={handleCHange} />}
          label="Form control label"
        />
        <Box>
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </Box>

        <Box>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeSkills}
                    checked={skills.includes("html")}
                  />
                }
                label="Html"
                value={"html"}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    color="secondary"
                    onChange={handleChangeSkills}
                    checked={skills.includes("css")}
                  />
                }
                label="css"
                value={"css"}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeSkills}
                    checked={skills.includes("js")}
                  />
                }
                label="Js"
                value={"js"}
              />
            </FormGroup>
            <FormHelperText> Invalid selection</FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
