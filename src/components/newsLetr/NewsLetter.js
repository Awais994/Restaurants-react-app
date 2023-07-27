import React from "react";
import {
  Stack,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Slide,
} from "@mui/material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import notifier from "../Notifier";
function NewsLetter() {
  const [formData, setFormData] = useState({ email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/emailSending", formData)
      .then((res) => {
        if (res.status === 200) {
          notifier("Check your Email", "success");
        }
      })
      .catch((err) => {
        notifier("Something Went Wrong", "error");
      });
    setFormData({ email: "" });
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Slide direction="right" in={inView} timeout={700}>
        <Stack p={{ xs: 3, sm: 4, md: 10 }}>
          <Box
            sx={{
              p: 4,
              backgroundColor: "#A2DE96",
              borderRadius: 4,
            }}
          >
            <Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12} sm={7} md={7}>
                <Box p={2}>
                  <Typography variant="h4" component="h5" mt={1}>
                    Join Newsletter
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Get notified with the latest news and recent offers from the
                    “Shaif’s Cuisine”
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={5}>
                <Box pt={{ md: 4, sm: 4, xs: 1 }}>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      display: "flex",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <TextField
                      placeholder="Your Email Address"
                      fullWidth
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      sx={{ background: "#fff" }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ pl: 4, pr: 4 }}
                      color="success"
                    >
                      {" "}
                      join
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Slide>
    </div>
  );
}

export default NewsLetter;
