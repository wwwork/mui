import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box width="230px">
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="256px"
          height="144px"
          animation="wave"
        />
      ) : (
        <img
          src="https://picsum.photos/200/300"
          alt="test"
          width={256}
          height={144}
        />
      )}

      <Stack
        direction={"row"}
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width="40px"
            height="40px"
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton animation="wave" variant="text" width={"100%"} />
              </Typography>
              <Typography variant="body2">
                <Skeleton animation="wave" variant="text" width={"100%"} />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                autem voluptatum unde, quas ipsa quae ducimus sint dolores
                asperiores libero architecto tempore repudiandae suscipit
                deleniti enim, laboriosam sequi porro distinctio.
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
