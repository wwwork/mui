import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
const images = [
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
];

const images2 = [
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
];
const images3 = [
  {
    img: "https://picsum.photos/400/600",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/100/300",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/400/400",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/400/300",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/300/300",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Tetst",
  },
];
export default function NavBarDemo() {
  return (
    <Box width={"800px"}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-aria-label="logo"
          >
            <CatchingPokemon />
            <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
              POKEMONGO
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">FAQ</Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit">Features</Button>
            </Stack>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
