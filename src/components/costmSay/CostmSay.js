import React from "react";
import { Stack, Typography, Grid, Slide } from "@mui/material";
import Cstmcard from "./Cstmcard";
import { useInView } from "react-intersection-observer";

const propsData = [
  {
    img: "person_img1.png",
    heading: "Sayed Ahmed",
    para: "“Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again”",
  },
  {
    img: "person_img1.png",
    heading: "Arfan",
    para: "“from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world”",
  },
  {
    img: "person_img1.png",
    heading: "Fahim & Nishat",
    para: "“A warm and friendly welcome with fantastic customer service. Always great, tasty food served pipinghot- just the way we love it . Would definitely recommend. We have been repeatedly and it's consistentlyexceeded our expectations”",
  },
  {
    img: "person_img1.png",
    heading: "Hussain",
    para: "“I would just like to say thank you for the excellent service we received in your restaurant last night.Although the place was very busy we still had an excellent time and really appreciated the liveentertainment too!”",
  },
];

function CostmSay() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack textAlign="center" p={3}>
          <Typography variant="h4" component="h3" mt={4}>
            What Our Customers Say
          </Typography>
          <Grid container my={4} spacing={2} justifyContent="center">
            <Cstmcard props={propsData} />
          </Grid>
        </Stack>
      </Slide>
    </div>
  );
}

export default CostmSay;
