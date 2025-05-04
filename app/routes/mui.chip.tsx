import { useState } from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import { Face } from "@mui/icons-material";

export default function ChipDemo() {
  function handleClick() {
    alert(1);
  }

  const [chips, _] = useState(["chip1", "chip2", "chip3"]);
  return (
    <Stack width={"150px"} direction={"row"} spacing={1}>
      <Chip label="test" color="primary" icon={<Face />} />
      <Chip
        label="Delete"
        color="error"
        onDelete={() => alert("delete clicked")}
      />
      <Chip
        onClick={handleClick}
        label="test"
        color="primary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />

      {chips.map((item) => (
        <Chip
          key={item}
          label={item}
          onDelete={() => alert(` delete ${item}`)}
        />
      ))}
    </Stack>
  );
}
