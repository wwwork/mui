import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";

export default function RatingDemo() {
  const [rating, setRating] = useState<number | null>(0);
  console.log(rating);
  const handleRating = (_: React.ChangeEvent<{}>, value: number | null) => {
    setRating(value);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleRating}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        icon={<Favorite fontSize="inherit" />}
      />
    </Stack>
  );
}
