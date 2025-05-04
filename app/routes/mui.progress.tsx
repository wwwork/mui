import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function ProgressDemo() {
  return (
    <Stack spacing={2}>
      <CircularProgress color="warning" />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={70} />

      <LinearProgress color="warning" />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={70} />
    </Stack>
  );
}
