import {
  Box,
  Paper,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
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
export default function ImageListDemo() {
  return (
    <Paper elevation={4}>
      <Stack spacing={4}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {images.map((item, idx) => (
            <ImageListItem key={idx}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList
          variant="woven"
          sx={{ width: 500, height: 450 }}
          cols={3}
          gap={8}
          rowHeight={164}
        >
          {images2.map((item, idx) => (
            <ImageListItem key={idx}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>

        <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8} rowHeight={164}>
            {images3.map((item, idx) => (
              <ImageListItem key={idx}>
                <img src={item.img} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Paper>
  );
}
