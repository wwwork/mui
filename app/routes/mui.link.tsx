import { Stack, Link } from "@mui/material";

export default function LinkDemo() {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" variant="body2">
        Secondary
      </Link>
    </Stack>
  );
}
