import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { topServices } from "../pages/LandingPage/data";
import React from "react";

export default function TopServices() {
  return (
    <Box className={"section-top-services"} sx={{ my: 20 }}>
      <Typography
        component={"h2"}
        variant={"h6"}
        color={"secondary"}
        fontWeight={800}
        mb={4}
      >
        Our Services
      </Typography>
      <Box className={"mobile-view"}>
        {topServices.map((service, index) => {
          return (
            <Card
              key={index}
              elevation={7}
              sx={{ height: "100%", display: "grid", placeItems: "center" }}
              className={"section-card"}
            >
              <Box height={250} width={"100%"} display={"grid"}>
                <CardMedia
                  component={"img"}
                  src={"/images/" + service.image}
                  alt={service.title}
                  sx={{ maxWidth: "80%", objectFit: "fill", m: "auto" }}
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  component={"div"}
                  variant={"subtitle1"}
                  mb={2}
                  fontWeight={700}
                >
                  {service.title}
                </Typography>
                <Typography
                  component={"div"}
                  variant={"subtitle2"}
                  fontWeight={600}
                >
                  {service.text.length > 150
                    ? service.text.substring(0, 200) + "..."
                    : service.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant={"outlined"}
                  color={"secondary"}
                  sx={{ textTransform: "none", borderRadius: "5px" }}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
