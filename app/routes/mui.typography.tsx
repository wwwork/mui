import { Typography } from "@mui/material";

export default function TypographyDemo() {
  return (
    <div>
      <Typography variant="h1">MuiTypography</Typography>
      <Typography variant="h2">MuiTypography</Typography>
      <Typography variant="h3">MuiTypography</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        MuiTypography
      </Typography>
      <Typography variant="h5">MuiTypography</Typography>
      <Typography variant="h6">MuiTypography</Typography>
      <Typography variant="subtitle1">sub title2</Typography>
      <Typography variant="subtitle2">Sub title2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eaque
        mollitia pariatur consequatur ullam quam recusandae maxime et error
        enim, provident perspiciatis quos quo eligendi nam tempore molestiae,
        fugit nulla.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel
        non ut sed voluptates, repudiandae nisi, veritatis optio maxime fuga
        excepturi consequatur harum amet iusto, voluptatem culpa distinctio.
        Sed, corporis.
      </Typography>
    </div>
  );
}
