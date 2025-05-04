import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export default function ButtonDemo() {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormats = (
    _event: React.MouseEvent<HTMLElement>,
    updateFormats: string | null
  ) => {
    console.log(updateFormats);
    setFormats(updateFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          Button
        </Button>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>¡
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" size="small">
          Small
        </Button>

        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          onClick={() => alert("test")}
        >
          SendIcon
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          SendIcon
        </Button>

        <IconButton aria-label="Send icon" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup
          exclusive
          value={formats}
          onChange={handleFormats}
          size="large"
          color="warning"
        >
          <ToggleButton aria-label="bold" value={"bold"}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton aria-label="Italic" value={"italic"}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton aria-label="underline" value={"underline"}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup
          aria-aria-label="test"
          variant="outlined"
          orientation="vertical"
          size="large"
          color="warning"
        >
          <Button>Left </Button>
          <Button>Center </Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
