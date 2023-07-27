import React from "react";
import { Box, Typography } from "@mui/material";
import TopDishes from "../topDishes/TopDishes";
import MenuSectnTwo from "./MenuSectnTwo";
const cardDataOne = {
  heading: {
    head: "Breakfast",
  },
  cards: [
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
    {
      heading: "Vegan Salad bowl",
      img: "food-1.png",
    },
    {
      heading: "Vegan Pesto Zoodles",
      img: "food-2.png",
    },
  ],
};
const cardDataTwo = {
  heading: {
    head: "Lunch",
  },
  cards: [
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
    {
      heading: "Vegan Salad bowl",
      img: "food-1.png",
    },
    {
      heading: "Vegan Pesto Zoodles",
      img: "food-2.png",
    },
  ],
};

const specialCardData = {
  heading: {
    head: "Our Special",
  },
  cards: [
    {
      img: "food-3.png",
      heading: "Sweet Potato Fries Bowl",
    },
    {
      img: "food-1.png",
      heading: "Vegan Salad bowl",
    },
  ],
};
const cardDataThree = {
  heading: {
    head: "Lunch",
  },
  cards: [
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
    {
      heading: "Vegan Salad bowl",
      img: "food-1.png",
    },
    {
      heading: "Vegan Pesto Zoodles",
      img: "food-2.png",
    },
  ],
};
function Menu() {
  return (
    <>
      <Box p={5}>
        <Typography variant="h4" component="h1">
          Explore Our Menu
        </Typography>
      </Box>
      <MenuSectnTwo props={specialCardData} />

      <TopDishes />
      <MenuSectnTwo props={cardDataOne} />
      <MenuSectnTwo props={cardDataTwo} />
      <MenuSectnTwo props={cardDataThree} />
    </>
  );
}

export default Menu;
