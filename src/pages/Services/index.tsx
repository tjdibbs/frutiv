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
import Footer from "../../components/footer";

const Services = (): JSX.Element => {
  const theme = useTheme();
  return (
    <React.Fragment>
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
              <Box className="brief-text">
                <Typography
                  component={"h3"}
                  fontWeight={600}
                  variant={"subtitle2"}
                  px={1}
                >
                  We provide high-quality digital services, with full analytics, that help you grow your social media, reach your target audience and improve your bottom line.
                </Typography>
              </Box>
            </Box>
            <Box className={"float-right"}>
              <img src="/images/services.png" alt="contact us vector" />
            </Box>
          </Box>
        </Box>
        <Box className={"brief-about-text"} sx={{ width: "100%", my: "5em !important"  }}>
          <Typography
            variant="subtitle1"
            color="secondary"
            fontWeight={600}
            mb={3}
          >
            Let's Make Collaboration
          </Typography>
          <Typography
            component={"div"}
            variant={"subtitle2"}
            fontWeight={600}
            position={"relative"}
            zIndex={100}
          >
            Let us help you reach your target audience and generate website-traffic as steady as a flowing stream.
            At Frutiv Tech, we place more emphasis on creating viable partnerships, rather than on merely getting
            new clients. Hence, we always work from the perspective of a business owner, and treat your business
            just like it were ours. Our methods, pricing, services
            and products are administered with the utmost level of transparency, and you can be rest-assured
            that we will go to great lengths in order to help you to grow your business.
          </Typography>
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
                  elevation={7}
                  sx={{ height: "100%", display: "grid", placeItems: "center" }}
                  className={"section-card service"}
                >
                  <CardMedia
                    component={"img"}
                    src={"/images/" + service.image}
                    alt={service.title}
                    sx={{ maxWidth: "80%", width: 400, m: "auto" }}
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
                      {service.text.length > 150 ? service.text.substring(0, 150) + "..." : service.text}
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
      <Footer />
    </React.Fragment>
  );
};

export default Services;
