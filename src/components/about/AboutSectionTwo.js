import React from "react";
import { Box, Typography, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";
function AboutSectionTwo() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      {" "}
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} textAlign="center">
          <Box p={6} m="auto">
            <Typography variant="h3" component="h3">
              Our Goals
            </Typography>
            <Typography
              variant="body2"
              mt={2}
              sx={{ maxWidth: "800px", fontSize: 17 }}
            >
              We shall sell delicious and remarkable food and beverages that
              meet the highest quality, freshness, and seasonality criteria
              while combining modern-creative and classic cooking traditions. By
              showcasing warmth, graciousness, efficiency, skill,
              professionalism, and integrity in our work, we will continually
              serve our consumers with exceptional service. To have every
              customer who comes through our doors leave impressed by their
              experience at Shaif's Cuisine and excited to come back again.
            </Typography>
          </Box>
        </Grid>
      </Slide>
    </div>
  );
}

export default AboutSectionTwo;
