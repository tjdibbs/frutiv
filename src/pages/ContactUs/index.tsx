import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Breadcrumbs,
  TextField,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import GetStarted from "../../components/get-started";

const infos = [
  {
    title: "Company Name",
    caption: "Frutiv Technologies",
    icon: "ep:office-building",
  },
  {
    title: "Located At",
    caption: "70 Alhaji Masha Rd, Surulere 101241, Lagos",
    icon: "akar-icons:location",
  },
  {
    title: "Email Us At",
    caption: "info@frutiv.com",
    icon: "clarity:email-solid",
  },
  {
    title: "Phone Us To",
    caption: "+2349017241037",
    icon: "fluent:call-28-filled",
  },
];

function ContactUs() {
  const theme = useTheme();
  return (
    <Container className="contact-us-wrapper">
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
                Contact Us
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
                  Contact Us
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
                We provide digital quality services, we help you reach your
                target audience, we give full analytics , we help grow your
                social media.
              </Typography>
            </Box>
          </Box>
          <Box className={"float-right"}>
            <img src="/images/contact-us.png" alt="contact us vector" />
          </Box>
        </Box>
      </Box>
      <Box className="section-main" sx={{ my: 5 }}>
        <Box
          className="info-wrapper"
          sx={{
            mb: 5,
            [theme.breakpoints.down("md")]: {
              width: "600px !important",
            },
          }}
        >
          <Box className="info-header" sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight={800}
              color="secondary"
              className="info-title"
            >
              Our Info
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
              className="info-title"
            >
              We are always ready to be part of your business
            </Typography>
          </Box>
          <Box
            className="info-list"
            sx={{
              position: "relative",
              pl: 2,
            }}
          >
            {infos.map((info, index) => {
              return (
                <Box className="info" key={index} sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={4} alignItems="center">
                    <Box className="icon-wrap">
                      <Icon
                        icon={info.icon}
                        color={theme.palette.secondary.main}
                        height="24"
                      />
                    </Box>
                    <Box className="label">
                      <Typography
                        component="h6"
                        variant="subtitle1"
                        color="secondary"
                        fontWeight={600}
                      >
                        {info.title}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {info.caption}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          className="quota-wrapper"
          sx={{
            maxWidth: 500,
            width: "60%",
            [theme.breakpoints.down("md")]: { width: 600, maxWidth: "90%" },
          }}
        >
          <Box className="quota-header" sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight={800}
              color="secondary"
              className="info-title"
            >
              Get A Quote
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
              className="info-title"
            >
              We are ready to deliver to you at your required time
            </Typography>
          </Box>
          <Box component={"form"} action="#" className="form">
            <Grid
              container
              gap={3}
              sx={{
                placeContent: "space-between",
              }}
            >
              <Grid
                item
                sx={{
                  width: "45%",
                  [theme.breakpoints.down("sm")]: { width: "100%" },
                }}
              >
                <TextField
                  label="Full Name"
                  variant={"outlined"}
                  color={"secondary"}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "45%",
                  [theme.breakpoints.down("sm")]: { width: "100%" },
                }}
              >
                <TextField
                  label="Enter your email"
                  variant={"outlined"}
                  color={"secondary"}
                  fullWidth
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  label="Subject"
                  variant={"outlined"}
                  color={"secondary"}
                  fullWidth
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  label="Body Of Subject"
                  variant={"outlined"}
                  color={"secondary"}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box className="form-action" sx={{ mt: 3 }}>
              <Button variant="outlined" color="secondary" size="large">
                Get A Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <GetStarted />
    </Container>
  );
}

export default ContactUs;
