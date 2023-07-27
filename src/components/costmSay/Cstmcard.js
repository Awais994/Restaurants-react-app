import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Rating,
} from "@mui/material";
function Cstmcard({ props }) {
  return (
    <>
      {props.map((info) => (
        <Grid item xs={12} sm={5} md={5} key={info.heading}>
          <Box>
            <Box>
              <Card sx={{ display: "flex", p: 1, backgroundColor: "#D6E5D8" }}>
                <Box direction="column" width={500}>
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: 2,
                      width: "100%",
                      height: "100%",
                    }}
                    image={info.img}
                    title="img"
                  />
                </Box>
                <Box>
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="h2"
                      fontSize={19}
                      textAlign="left"
                    >
                      {info.heading}
                    </Typography>
                    <Box mt={1} textAlign="left">
                      <Rating
                        name="read-only"
                        value={4}
                        size="small"
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "success.main",
                          },
                        }}
                        readOnly
                      />
                    </Box>
                    <Typography variant="body2" mt={1} textAlign="left">
                      {info.para}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default Cstmcard;
