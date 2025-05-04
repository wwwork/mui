import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

export default function CardDemo() {
  return (
    <Paper elevation={4}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "red",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://api.api-ninjas.com/v1/randomimage"
          />
          <CardContent>
            <Typography component={"div"} variant="h3">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              reiciendis perferendis modi saepe, similique quas facilis. Dolor
              excepturi officiis non aliquid eligendi amet placeat, dolore
              accusantium! Delectus, atque laboriosam. Enim.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Button
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  );
}
