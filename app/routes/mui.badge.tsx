import { Badge, Stack } from "@mui/material";
import { Mail } from "@mui/icons-material";

export default function BadgeDemo() {
  return (
    <Stack width={"20px"}>
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>

      <Badge
        badgeContent={0}
        variant="dot"
        color="secondary"
        showZero
        invisible={true}
      >
        <Mail />
      </Badge>
    </Stack>
  );
}
