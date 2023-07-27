import React from "react";
import {
  Grid,
  Button,
  TextField,
  FormLabel,
  Typography,
  Slide,
} from "@mui/material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import notifier from "../Notifier";
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/contactUs-data", formData)
      .then((res) => {
        if (res.status === 200) {
          notifier("Recived Succefully", "success");
        }
      })
      .catch((err) => {
        notifier("Something Went Wrong", "error");
      });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
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
          component="form"
          onSubmit={submitForm}
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant="h4" component="h3" gutterBottom>
              Contact & Inquiry
            </Typography>
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            {" "}
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <TextField
              id="firstName"
              fullWidth
              variant="outlined"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              sx={{
                mt: 1,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <TextField
              id="lastName"
              fullWidth
              required
              variant="outlined"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              sx={{
                mt: 1,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              required
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              sx={{
                mt: 1,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={5}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <TextField
              id="subject"
              fullWidth
              required
              variant="outlined"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              sx={{
                mt: 1,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <TextField
              id="message"
              fullWidth
              multiline
              required
              rows={6}
              variant="outlined"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              sx={{
                mt: 1,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Button
              color="success"
              variant="contained"
              type="submit"
              // onClick={bookingNavigate}
              disableElevation
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}

export default ContactForm;
