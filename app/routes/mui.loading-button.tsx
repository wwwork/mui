import { Stack, SvgIcon } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function LoadingButtonDemo() {
  return (
    <Stack width="330px" spacing={2} direction={"row"}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton
        variant="outlined"
        loading
        loadingPosition="start"
        startIcon={<SvgIcon />}
      >
        SvgIcon
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="end"
        startIcon={<SvgIcon />}
      >
        SvgIcon
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="loading">
        Submit
      </LoadingButton>

      <LoadingButton loading variant="outlined">
        Cancel
      </LoadingButton>
    </Stack>
  );
}
