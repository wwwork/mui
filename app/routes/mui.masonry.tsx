import { Masonry } from "@mui/lab";
import { Box, Paper } from "@mui/material";

const height = [150, 40, 30, 100, 50, 150, 40, 30, 100, 50];

export default function MasonryDemo() {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {height.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid",
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
