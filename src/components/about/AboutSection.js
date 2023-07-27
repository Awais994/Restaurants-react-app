import React from "react";
import { Box, Typography, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";
function AboutSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      {" "}
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} justifyContent="center">
          <Grid item xs={12} sm={12} md={5}>
            <Box p={2}>
              <Box m="auto">
                <Box
                  component="img"
                  src="ourstoryimg.png"
                  alt="ourStory"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box p={{ xs: 3, md: 5 }}>
              <Typography variant="h4" component="h3">
                Our Story
              </Typography>
              <Typography variant="body1" mt={2}>
                It's all started since 1998
              </Typography>
              <Typography variant="body2" mt={2}>
                {" "}
                Welcome to Shaif's Cuisine. We take pride in delivering warm,
                friendly service and creating mouth-watering culinary delights
                for all. Using only the freshest locally sourced ingredients,
                we’ll ensure you have a dining experience to remember.
              </Typography>
              <Typography variant="body2" mt={2}>
                Since 1998, we are the perfect place for a romantic meal for
                two, a catch-up with friends, family parties, business meetings,
                and bringing loved ones together. With comfortable surroundings,
                affordable prices, and seating for up to 65 guests, we can cater
                for all occasions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default AboutSection;
