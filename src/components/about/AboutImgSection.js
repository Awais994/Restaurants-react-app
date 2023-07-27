import React from "react";
import { Box, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

function AboutImgSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} justifyContent="center">
          <Grid item xs={5} md={4}>
            <Box>
              <Box
                component="img"
                src="ourgoals_img1.png"
                sx={{ width: "100%", height: "100%" }}
              />{" "}
            </Box>
          </Grid>
          <Grid item xs={5} md={4}>
            <Box>
              <Box>
                <Box
                  component="img"
                  src="ourgoals_img2.png"
                  sx={{ width: "100%", height: "100%" }}
                />{" "}
              </Box>
              <Box mt={{ xs: 1, sm: 2, md: 2 }}>
                <Box
                  component="img"
                  src="ourgoals_img3.png"
                  sx={{ width: "100%", height: "100%" }}
                />{" "}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default AboutImgSection;
