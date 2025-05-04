import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import { Check } from "@mui/icons-material";

export default function AlertDemo() {
  return (
    <Stack spacing={2}>
      <Alert security="warning" onClose={() => alert("close")}>
        <AlertTitle>AlertTitle</AlertTitle>
        This an error
      </Alert>
      <Alert security="info">This an error</Alert>
      <Alert
        variant="outlined"
        security="error"
        action={<Button color="inherit">test</Button>}
      >
        This an error
      </Alert>
      <Alert variant="filled" security="error" icon={<Check />}>
        This an error
      </Alert>
    </Stack>
  );
}
