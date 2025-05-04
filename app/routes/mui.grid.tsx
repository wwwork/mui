import { Box, Stack, Divider, Grid } from "@mui/material";

export default function GridDemo() {
  return (
    <>
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
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Test
        </Box>
      </Stack>
      <Grid container my={3} rowSpacing={2} columnSpacing={1}>
        <Grid>
          <Box sx={{ backgroundColor: "primary.light" }} p={2}>
            Item1
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ backgroundColor: "primary.light" }} p={2}>
            Item2
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ backgroundColor: "primary.light" }} p={2}>
            Item3
          </Box>
        </Grid>
        <Grid>
          <Box sx={{ backgroundColor: "primary.light" }} p={2}>
            Item4
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
