import { Box, Stack, Divider, Paper } from "@mui/material";

export default function PaperDemo() {
  return (
    <Paper elevation={4}>
      <Stack
        sx={{ direction: "revert", gap: "5px" }}
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
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Test
        </Box>
      </Stack>
    </Paper>
  );
}
