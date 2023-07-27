import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BtnComp({ props }) {
  const navigate = useNavigate();
  return (
    <div>
      <Box p={{ xs: 1, md: 10, sm: 4 }}>
        <Typography variant="h4" component="h1" pl={2} gutterBottom mt={5}>
          {props.heading}
        </Typography>
        <Typography variant="body2" pl={2}>
          {props.para}
        </Typography>
        <Stack spacing={2} direction="row" my={2} pl={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate(`${props.navgte}`)}
          >
            {props.btnText}
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default BtnComp;
