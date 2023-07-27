import React from "react";
import { Stack, Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ListFooter from "./ListFooter";

const listOne = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "menu" },
  { name: "Book Table", path: "booking" },
  { name: "About Us", path: "about" },
  { name: "Contact Us", path: "contact" },
  { name: "Privacy Policy", path: "privacypolicy" },
];
const listTwo = ["Contact", "Menu", "Support Center", "Feedback"];
const listThree = [
  "+880123",
  "webcifar@gmail.com",
  "GEC Circle, Chittagong, Bangladesh",
];

function Footer() {
  return (
    <>
      <Stack>
        <Box
          sx={{
            p: 2,
            backgroundColor: "#D6E5D8",
          }}
        >
          <Grid container my={4} spacing={2} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} sm={5} md={3}>
              <Box pl={3}>
                <Box>
                  <Box component="img" src="footerlogo.svg" />
                </Box>
                <Typography variant="body2" mt={2}>
                  Fresh and delicious traditional Bangladeshi food to delight
                  the whole family.
                </Typography>
                <Typography variant="h5" component="h4" mt={2}>
                  Follow us
                </Typography>
                <Box mt={2}>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>

                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Box pl={2}>
                <Typography variant="h6" component="h4" pl={2}>
                  Links
                </Typography>
                <ListFooter props={listOne} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Box pl={2}>
                <Typography variant="h6" component="h4" pl={2}>
                  Support
                </Typography>
                <ListFooter props={listTwo} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Box pl={2}>
                <Typography variant="h6" component="h4" pl={2}>
                  Contact
                </Typography>
                <ListFooter props={listThree} />
              </Box>
            </Grid>
          </Grid>{" "}
        </Box>
        <Box p={1}>
          <Typography variant="body2" pl={1}>
            &copy; copyright 2021 Shaif’s Cuisine | All rights reserved
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default Footer;
