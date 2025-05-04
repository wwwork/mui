import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
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
export default function MenuDemo() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (even: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(even.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
              <Button
                color="inherit"
                id="resources-button"
                onClick={handleClick}
                aria-controls={open ? "resources-menu" : undefined}
                aria-aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                endIcon={<KeyboardArrowDown />}
              >
                Res
              </Button>
              <Menu
                id="resources-menu"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{ "aria-labelledby": "resources-button" }}
              >
                <MenuItem onClick={handleClose}> Blog</MenuItem>
                <MenuItem onClick={handleClose}> Podcast</MenuItem>
              </Menu>
            </Stack>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
