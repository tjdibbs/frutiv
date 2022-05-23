import { Icon } from "@iconify/react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function OurHub() {
  const theme = useTheme();
  return (
    <Container className="hub-wrapper">
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
                Our Hub
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
                  Our hub
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
            <img src="/images/hub-main.png" alt="contact us vector" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default OurHub;
