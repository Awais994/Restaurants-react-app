import React from "react";
import { Box, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

function ImgContainer() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} justifyContent="center">
          <Grid item xs={6} sm={6} md={6}>
            <Box bgcolor="primary.main">
              <Box
                sx={{
                  height: { xs: "200px", sm: "400px", md: "450px" },
                }}
              >
                <Box
                  component="img"
                  src="eventsmedia1.png"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <Box bgcolor="primary.main">
              <Box
                sx={{
                  height: { xs: "200px", sm: "400px", md: "450px" },
                }}
              >
                <Box
                  component="img"
                  src="eventsmedia2.png"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default ImgContainer;
