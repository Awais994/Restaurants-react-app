import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Rating,
} from "@mui/material";
function DishesCard({ props }) {
  return (
    <>
      {props.map((info, i) => (
        <Grid item xs={12} sm={6} md={4} key={i * Math.random()}>
          <Box>
            <Card sx={{ display: "flex", p: 1, backgroundColor: "#D6E5D8" }}>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 130, sm: 140, md: 140 },
                  height: { xs: 170, sm: 170, md: 140 },
                  borderRadius: 2,
                }}
                image={info.img}
                title={info.heading}
              />
              <Box>
                <CardContent>
                  <Typography variant="h5" component="h3" fontSize={20}>
                    {info.heading}
                  </Typography>
                  <Typography variant="body1" mt={1} color="success.main">
                    $12
                  </Typography>
                  <Box mt={1}>
                    <Rating
                      name="read-only"
                      value={4}
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "success.main",
                        },
                      }}
                      readOnly
                    />
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default DishesCard;
