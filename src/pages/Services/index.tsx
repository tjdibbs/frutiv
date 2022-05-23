import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { topServices } from "../LandingPage/data";
import GetStarted from "../../components/get-started";
import { NavLink } from "react-router-dom";

const Services = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Container className="our-services-wrapper">
      <Box className={"section-front"}>
        <Box className="front-wrapper">
          <Box className={"float-left"}>
            <Box className={"active-page"}>
              <Typography
                className={"big-text"}
                component={"h3"}
                variant={"h4"}
                fontWeight={800}
                color={theme.palette.info.main}
              >
                Services
              </Typography>
              <Breadcrumbs
                separator={
                  <Icon
                    icon="clarity:angle-line"
                    color="#545454"
                    height="15"
                    rotate={1}
                  />
                }
                aria-label="breadcrumb"
              >
                <NavLink
                  to={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </NavLink>
                <Typography variant="caption" color={theme.palette.info.main}>
                  Services
                </Typography>
              </Breadcrumbs>
            </Box>
            <Box sx={{ my: 3 }} className="brief-text">
              <Typography
                component={"h3"}
                fontWeight={600}
                variant={"subtitle1"}
                px={1}
              >
                We provide digital quality services, we help you reach your
                target audience, we give full analytics , we help grow your
                social media.
              </Typography>
            </Box>
          </Box>
          <Box className={"float-right"}>
            <img src="/images/services.png" alt="contact us vector" />
          </Box>
        </Box>
      </Box>
      <Box className={"section-services"}>
        <Typography
          component={"h2"}
          variant={"h6"}
          fontWeight={800}
          mb={3}
          color={"secondary"}
        >
          Our Services
        </Typography>
        <Box className={"services-wrapper list"} role={"list"}>
          {topServices.map((service, index) => {
            return (
              <Card
                key={index}
                elevation={10}
                sx={{ height: "100%", display: "grid", placeItems: "center" }}
                className={"section-card service"}
              >
                <CardMedia
                  component={"img"}
                  src={"/images/" + service.image}
                  alt={service.title}
                  sx={{ maxWidth: "90%", width: 400, m: "auto" }}
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
                    maxWidth={400}
                    m={"auto"}
                  >
                    If you’re a business owner or marketing executive and you’re
                    looking for an awesome and enthusiastic partner to help you
                    grow your business—from strategy creation to execution and
                    ongoing optimization, you’ve come to the right place. Blue
                    Corona helps companies increase leads and sales from the
                    web, differentiate their brand, and optimize their marketing
                    cost. The result? MORE BUSINESS GROWTH.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant={"outlined"}
                    color={"secondary"}
                    sx={{ textTransform: "none", borderRadius: 0.3 }}
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
      <GetStarted />
    </Container>
  );
};

export default Services;
