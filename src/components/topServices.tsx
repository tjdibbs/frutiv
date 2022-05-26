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
        Our Top Services
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
              <CardMedia
                component={"img"}
                src={"/images/" + service.image}
                alt={service.title}
                sx={{ maxWidth: "90%" }}
              />
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
                  If you’re a business owner or marketing executive and you’re
                  looking for an awesome and enthusiastic partner to help you
                  grow your business—from strategy creation to execution and
                  ongoing optimization, you’ve come to the right place. Blue
                  Corona helps companies increase leads and sales from the web,
                  differentiate their brand, and optimize their marketing cost.
                  The result? MORE BUSINESS GROWTH.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant={"outlined"}
                  color={"secondary"}
                  sx={{ textTransform: "none", borderRadius: "5px" }}
                >
                  {" "}
                  Learn more{" "}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
