import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["Test,", "html", "js", "ts", "phyton"];
const skillsOptions: Skill[] = skills.map((item, index) => ({
  id: index + 1,
  label: item,
}));

export default function AutocompleteDemo() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={2} width={"240px"}>
      <Autocomplete
        options={skills}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="MuiAuticomplete" />
        )}
        freeSolo
      />

      <Autocomplete
        options={skillsOptions.length ? skillsOptions : []}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
        renderInput={(params) => <TextField {...params} label="rest" />}
      />
    </Stack>
  );
}
