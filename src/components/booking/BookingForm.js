import React from "react";
import {
  Grid,
  Button,
  TextField,
  FormLabel,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import notifier from "../Notifier";
function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tableType: "",
    guestNumber: "",
    placement: "",
    date: "",
    time: "",
    note: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/booking-data", formData)
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
      tableType: "",
      guestNumber: "",
      placement: "",
      date: "",
      time: "",
      note: "",
    });
  };
  const tableType = [
    { name: "Small(2 persons)", value: "small" },
    { name: "Medium(4 persons)", value: "medium" },
    { name: "large(6 persons)", value: "large" },
  ];
  const placement = [
    { name: "Outdoor", value: "outdoor" },
    { name: "Indoor", value: "indoor" },
    { name: "Rooftop", value: "rooftop" },
  ];
  return (
    <div>
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
            Book Table
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
          <FormLabel htmlFor="tableType">Table Type</FormLabel>
          <Select
            id="tableType"
            fullWidth
            displayEmpty
            required
            value={formData.tableType}
            onChange={(e) =>
              setFormData({ ...formData, tableType: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          >
            {" "}
            <MenuItem value="" disabled sx={{ display: "none" }}>
              Choose
            </MenuItem>
            {tableType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={10} sm={5} md={5}>
          <FormLabel htmlFor="guestNumber">Guest Number</FormLabel>
          <TextField
            id="guestNumber"
            required
            type="number"
            fullWidth
            variant="outlined"
            value={formData.guestNumber}
            onChange={(e) =>
              setFormData({ ...formData, guestNumber: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={5} md={5}>
          <FormLabel htmlFor="placement">Placement</FormLabel>
          <Select
            id="placement"
            fullWidth
            displayEmpty
            required
            value={formData.placement}
            onChange={(e) =>
              setFormData({ ...formData, placement: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          >
            {" "}
            <MenuItem value="" disabled sx={{ display: "none" }}>
              Choose
            </MenuItem>
            {placement.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={10} sm={5} md={5}>
          <FormLabel htmlFor="date">Date</FormLabel>
          <TextField
            id="date"
            required
            type="date"
            fullWidth
            variant="outlined"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={5} md={5}>
          <FormLabel htmlFor="time">Time</FormLabel>
          <TextField
            id="guestNumber"
            required
            type="time"
            fullWidth
            variant="outlined"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="note">Note</FormLabel>
          <TextField
            id="note"
            fullWidth
            multiline
            required
            rows={5}
            variant="outlined"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
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
            Book Table
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookingForm;
