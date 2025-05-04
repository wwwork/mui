import { Box } from "@mui/material";

export default function BoxDemo() {
  return (
    <>
      <Box
        component={"span"}
        sx={{
          backgroundColor: "primary:main",
          color: "black",
          width: "100px",
          height: "100px",
          padding: "16px",
          "&: hover": {
            backgroundColor: "primary:light",
          },
        }}
      >
        test
      </Box>
      <Box
        bgcolor="success.light"
        width="100px"
        height="100px"
        display={"flex"}
        p={2}
      ></Box>
    </>
  );
}
