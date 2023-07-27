import { Grid, Box } from "@mui/material";
import React from "react";

function TestGrid() {
  return (
    <>
      <Grid container my={4} spacing={2} rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={3}>
          <Box bgcolor="primary.main" p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="primary.main" p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="primary.main" p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="primary.main" p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TestGrid;
