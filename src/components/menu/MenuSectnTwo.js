import React from "react";
import { Stack, Typography, Grid, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";
import DishesCard from "../topDishes/DishesCard";
function MenuSectnTwo({ props }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack m="auto" p={5}>
          <Typography variant="h5" component="h1">
            {props.heading.head}
          </Typography>
          <Grid container my={1} spacing={2}>
            <DishesCard props={props.cards} />
          </Grid>
        </Stack>
      </Slide>
    </div>
  );
}

export default MenuSectnTwo;
