import { FileCopyOutlined, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

export default function SpeedDialDemo() {
  return (
    <SpeedDial
      ariaLabel="Nav speed dail"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<FileCopyOutlined />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Copy" />
    </SpeedDial>
  );
}
