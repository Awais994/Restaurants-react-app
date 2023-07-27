import React from "react";
import { Stack, Typography, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";
import DishesCard from "./DishesCard";

const cardData = [
  {
    heading: "Vegan Salad bowl",
    img: "food-1.png",
  },
  {
    heading: "Vegan Pesto Zoodles",
    img: "food-2.png",
  },
  {
    heading: "Hot Green Bowl",
    img: "food-7.png",
  },
];

function TopDishes() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack m="auto" p={5}>
          <Typography variant="h5" component="h1">
            Top Dashes
          </Typography>
          <Grid container my={1} spacing={2}>
            <DishesCard props={cardData} />
          </Grid>
        </Stack>
      </Slide>
    </div>
  );
}

export default TopDishes;
