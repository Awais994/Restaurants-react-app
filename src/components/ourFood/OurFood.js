import React from "react";
import { Stack, Grid, Box, Typography, Slide } from "@mui/material";
import InfoCard from "../storeInfo/InfoCard";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { useInView } from "react-intersection-observer";

const propsData = {
  one: [
    {
      icon: <FoodBankIcon fontSize="large" color="success" />,
      heading: "Quality Food",
    },
    {
      icon: <RiceBowlIcon fontSize="large" color="success" />,
      heading: "Classical taste",
    },
  ],
  two: [
    {
      icon: <SelfImprovementIcon fontSize="large" color="success" />,
      heading: "Skilled chef",
    },
    {
      icon: <RoomServiceIcon fontSize="large" color="success" />,
      heading: "Best service",
    },
  ],
};
function OurFood() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box p={4} pt={8}>
              <Typography variant="h5" component="h2">
                Why Choose Our Food
              </Typography>
              <Typography variant="body2" mt={2}>
                Quality of Service, Food, Ambiance, and Value of Money are the
                primary elements for choosing a restaurant. Shaif's Cuisine is
                one of the most exquisite fine-dinning restaurant in Chittagong
                cities with a captivating view of GEC Hills, perfect ambiance,
                and scrumptious food.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box p={1}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <InfoCard props={propsData.one} />
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="center">
                <InfoCard props={propsData.two} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default OurFood;
