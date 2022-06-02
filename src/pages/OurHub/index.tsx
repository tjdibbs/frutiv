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
import Footer from "../../components/footer";

function OurHub() {
  const theme = useTheme();
  return (
    <React.Fragment>
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
              <img src="/images/hub-main.png" alt="contact us vector" />
            </Box>
          </Box>
        </Box>
        <Box
          className={"section-hub"}
          sx={{ my: 10, display: "flex", flexWrap: "nowrap" }}
        >
          <Box className={"section-wrapper"} sx={{ width: "70%" }}>
            <Box className={"section-header"}>
              <Typography
                component={"h1"}
                variant={"h4"}
                fontWeight={800}
                color={"secondary"}
              >
                THE FRUTIV TECH HUB
              </Typography>
              <Typography component={"h1"} variant={"subtitle1"} fontWeight={500}>
                Getting to know about the frutiv hub.
              </Typography>
            </Box>
            <Box className={"section-text"} sx={{ my: 5 }}>
              <Typography component={"p"} variant={"subtitle1"} fontWeight={500}>
                We are growing a hub in nigeria, we also have the goal to give
                tech minded youth the knowledge of latest technology at a very
                minimum fee, well this fee do not really define the remuneration
                of the knowledge and training we will be giving, it just to
                enhance support the training with some tools. One of our goal is
                to give tech minded youths, the knowledge of latest technology and
                be able to get job easily. During the training, we will also be
                working as a team building small technology, giving our trainee
                live
              </Typography>
            </Box>
            <Button
              variant={"outlined"}
              color={"secondary"}
              sx={{
                borderRadius: 10,
                mt: 2,
                textTransform: "none",
                py: 2,
                px: 5,
                boxShadow: theme.shadows[4],
              }}
              size={"large"}
            >
              Join Our Hub
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default OurHub;
