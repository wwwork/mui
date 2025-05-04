import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function DrawerDemo() {
  const [iSDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-lebel="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={iSDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={3} width={"250px"}>
          <Typography
            variant="h6"
            component={"div"}
            role="presentation"
            textAlign={"center"}
          >
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
