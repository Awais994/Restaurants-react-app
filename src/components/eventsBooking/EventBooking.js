import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Slide,
} from "@mui/material";
import BtnComp from "../ourSpecial/BtnComp";
import { useInView } from "react-intersection-observer";
const cardData = [
  {
    img: "event-corporate.png",
    heading: "Corporate Events",
    para: "Shaif's Cuisine is the perfect venue for your corporateevents. We specialize in private parties.",
  },
  {
    img: "event-weedings.png",
    heading: "Weddings",
    para: "Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is sophisticated and comfortable.",
  },
];
const propsData = {
  heading: "Book For Events",
  para: "Book your private event or corporate function at Shaif's cuisine to experience atruly unique experience.",
  btnText: "Contact Now",
  navgte: "contact",
};

function EventBooking() {
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
          spacing={2}
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            {cardData.map((info) => (
              <Box mt={2} p={2} key={info.heading}>
                <Card
                  sx={{ display: "flex", p: 1, backgroundColor: "#D6E5D8" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 160, sm: 160, md: 160 },
                      height: { xs: 170, sm: 170, md: 140 },
                      borderRadius: 2,
                    }}
                    image={info.img}
                    title={info.heading}
                  />
                  <Box>
                    <CardContent>
                      <Typography variant="h4" component="h2" fontSize={19}>
                        {info.heading}
                      </Typography>
                      <Typography variant="body2" mt={1}>
                        {info.para}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={5}>
            <BtnComp props={propsData} />
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default EventBooking;
