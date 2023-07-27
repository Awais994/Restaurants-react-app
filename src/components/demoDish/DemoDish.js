import React from "react";
import {
  Stack,
  Box,
  Typography,
  Grid,
  Rating,
  Button,
  Slide,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const imgData = [
  {
    img: "food-5.png",
  },
  {
    img: "food-4.png",
  },
  {
    img: "food-3.png",
  },
];
function DemoDish() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack p={{ xs: 3, sm: 4, md: 5 }}>
          <Box
            sx={{
              p: 1,
              background: "url('background.png') no-repeat bottom right /200px",
              backgroundColor: "#D6E5D8",
              borderRadius: 4,
            }}
          >
            <Grid container spacing={2} p={1}>
              <Grid item xs={12} sm={12} md={8}>
                <Box>
                  <Stack
                    spacing={1}
                    direction={{ md: "row", xs: "row" }}
                    flexWrap="no-wrap"
                  >
                    {imgData.map((info) => (
                      <Box
                        height={{ xs: "200px", sm: "400px", md: "300px" }}
                        width="420px"
                        key={info.img}
                      >
                        <Box
                          component="img"
                          src={info.img}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 5,
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box p={2} pt={4}>
                  <Typography variant="h5" component="h3" color="success.main">
                    20% OFF
                  </Typography>
                  <Typography variant="h4" component="h3">
                    Demo Dish For Discount
                  </Typography>
                  <Box>
                    <Typography
                      component="span"
                      fontSize={20}
                      sx={{ textDecoration: "line-through" }}
                    >
                      {" "}
                      $45
                    </Typography>
                    <Typography
                      component="span"
                      color="success.main"
                      fontSize={20}
                    >
                      {" "}
                      $35
                    </Typography>
                  </Box>
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
                  <Stack spacing={2} direction="row" my={2}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => navigate("booking")}
                    >
                      Book Table
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Slide>
    </div>
  );
}

export default DemoDish;
