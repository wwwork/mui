import { Avatar, AvatarGroup, Stack } from "@mui/material";

export default function AvatarDemo() {
  return (
    <Stack spacing={3}>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ backgroundColor: "green" }}>t1</Avatar>
        <Avatar sx={{ backgroundColor: "red" }}>t2</Avatar>
      </Stack>

      <Stack spacing={1} direction={"row"}>
        <AvatarGroup>
          <Avatar sx={{ backgroundColor: "green" }}>c1</Avatar>
          <Avatar
            variant="square"
            sx={{ backgroundColor: "red", width: 48, height: 48 }}
            src="https://picsum.photos/100/100"
            alt="c2"
          >
            c2
          </Avatar>
          <Avatar
            sx={{ backgroundColor: "red", width: 48, height: 48 }}
            src="https://picsum.photos/100/100"
            alt="t2"
          >
            t2
          </Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}
