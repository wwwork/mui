import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function ToolTipDemo() {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={600}
      leaveDelay={1000}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
}
