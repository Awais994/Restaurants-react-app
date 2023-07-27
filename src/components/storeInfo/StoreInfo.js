import React from "react";
import { Stack, Slide } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import InfoCard from "./InfoCard";
import { useInView } from "react-intersection-observer";

const cardinfo = [
  {
    icon: <AccessTimeFilledIcon fontSize="large" color="success" />,
    heading: "10 AM - 7 PM",
    para: "Opening Hour",
  },
  {
    icon: <LocationOnIcon fontSize="large" color="success" />,
    heading: "GEC, Chittagong",
    para: "Address",
  },
  {
    icon: <PhoneForwardedIcon fontSize="large" color="success" />,
    heading: "+880123443",
    para: "Call Now",
  },
];

function StoreInfo() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack
          spacing={2}
          direction={{ md: "row", xs: "column" }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          p={5}
          ref={ref}
        >
          <InfoCard props={cardinfo} />
        </Stack>
      </Slide>
    </div>
  );
}

export default StoreInfo;
