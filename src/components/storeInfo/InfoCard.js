import { Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

function InfoCard({ props }) {
  return (
    <>
      {props.map((info) => (
        <Box
          width={info.para !== undefined ? "200px" : "180px"}
          key={info.heading}
        >
          {" "}
          <Card
            p={10}
            sx={{
              backgroundColor: "#D6E5D8",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <CardContent>
              {info.icon}
              <Typography variant="h5" mt={1} fontSize={20}>
                {info.heading}
              </Typography>
              {info.para !== undefined ? (
                <Typography variant="body2" mt={1}>
                  {info.para}
                </Typography>
              ) : null}
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default InfoCard;
