import React from "react";
import { Stack, Grid, Box, Typography, Button, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function SectionOne() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Grid
          container
          my={4}
          spacing={4}
          p={5}
          justifyContent="center"
          direction={{ xs: "column-reverse", md: "row", sm: "column-reverse" }}
        >
          <Grid item xs={12} md={5} sm={12}>
            <Box p={{ xs: 1, md: 10, sm: 4 }}>
              <Typography
                variant="h4"
                component="h1"
                pl={2}
                gutterBottom
                mt={5}
              >
                The flavor of tradition
              </Typography>
              <Typography variant="body2" pl={2}>
                We are a multi-cuisine restaurant offering a wide variety of
                food experience in both casual and fine dining environment.
              </Typography>
              <Stack spacing={2} direction="row" my={2} pl={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("menu")}
                >
                  Explore Menu
                </Button>
                <Button
                  variant="text"
                  color="success"
                  onClick={() => navigate("booking")}
                >
                  Book Table
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sm={12}>
            <Box
              sx={{
                maxWidth: "500px",
                width: "80%",
                margin: "0 auto",
              }}
            >
              <Box
                component="img"
                src="heroimg.png"
                alt="img"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default SectionOne;
