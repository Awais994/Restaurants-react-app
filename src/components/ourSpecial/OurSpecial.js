import React from "react";
import {
  Stack,
  Grid,
  Box,
  Typography,
  Rating,
  Card,
  CardContent,
  Slide,
} from "@mui/material";
import BtnComp from "./BtnComp";
import { useInView } from "react-intersection-observer";
const cardData = [
  {
    imgName: "food-3.png",
    heading: "Sweet Potato Fries Bowl",
    para: "These Sweet Potato Fries bowl are a glorious, messy plate ofgoodness. Crispy sweet potato fries loaded with lots offresh summer vegetables and a lime ranch. By adding aseasoning blend with chipotle powder, garlic, and onion,these spicy sweet potato fries are full of flavor.",
  },
  {
    imgName: "food-1.png",
    heading: "Vegan Salad bowl",
    para: "Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw orcooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosionof flavors and textures.",
  },
];
const data = {
  heading: "Our Specials",
  para: "All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals aredelivered to our customers",
  btnText: "Book Table",
  navgte: "booking",
};
function OurSpecial() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Grid container my={4} spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} sm={12}>
            <Stack
              // bgcolor="primary.main"
              spacing={2}
              direction={{ md: "row", xs: "row" }}
              justifyContent="center"
              // alignItems="center"
              mt={10}
              pt={2}
            >
              {cardData.map((info) => (
                <Box width="44%" position="relative" key={info.heading}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "-65px", md: "-85px", sm: "-90px" },
                      width: "100%",
                    }}
                  >
                    <Box
                      m="auto"
                      width={{ xs: "150px", md: "200px", sm: "200px" }}
                    >
                      <Box
                        component="img"
                        position="relative"
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                        src={info.imgName}
                        alt="food"
                      />
                    </Box>
                  </Box>
                  <Card
                    p={10}
                    sx={{
                      backgroundColor: "#D6E5D8",
                      marginTop: "20px",
                      paddingBottom: "20px",
                      //   height: { xs: "500px", md: "350px", sm: "350px" },
                    }}
                  >
                    <CardContent sx={{ paddingBottom: "40px" }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        mt={4}
                        fontSize={25}
                      >
                        {info.heading}
                      </Typography>
                      <Typography variant="body1" mt={1} color="success.main">
                        $18
                      </Typography>
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
                      <Typography variant="body2" mt={1}>
                        {info.para}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} ref={ref}>
            <BtnComp props={data} />
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default OurSpecial;
