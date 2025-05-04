import { Box, Stack, Divider } from "@mui/material";

export default function StackDemo() {
  return (
    <Stack
      sx={{ border: "1px solid", direction: "revert", gap: "5px" }}
      direction={"row"}
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "red",
          height: "100px",
          width: "100px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Test
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.light",
          color: "green",
          height: "100px",
          width: "100px",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        Test
      </Box>
    </Stack>
  );
}
