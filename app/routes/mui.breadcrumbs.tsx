import { ImportContacts } from "@mui/icons-material";
import { Link, Box, Breadcrumbs } from "@mui/material";

export default function BreadcrumbsDemo() {
  return (
    <Box m={4}>
      <Breadcrumbs
        aria-aria-label="Breadcrumbs"
        separator={<ImportContacts />}
        maxItems={2}
      >
        <Link href="#">Link</Link>
        <Link href="#" color="secondary" variant="body2">
          Secondary
        </Link>
        <Link>Test</Link>
      </Breadcrumbs>
    </Box>
  );
}
