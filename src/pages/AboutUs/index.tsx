import React from "react";
import {
  Box,
  Breadcrumbs,
  useTheme,
  Container,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Hub from "../../components/hub";
import GetStarted from "../../components/get-started";
import { NavLink } from "react-router-dom";

const AboutUs = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container className="about-us-wrapper">
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
                About Us
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
                  About Us
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
            <img src="/images/about.png" alt="contact us vector" />
          </Box>
        </Box>
      </Box>
      <Box className={"brief-about-text"} sx={{ width: "100%" }}>
        <Typography
          className={"section-title"}
          variant={"h6"}
          fontWeight={800}
          mb={3}
        >
          {" "}
          What Are We ?{" "}
        </Typography>
        <Typography
          component={"div"}
          variant={"subtitle2"}
          textAlign={"center"}
          fontWeight={600}
          position={"relative"}
          zIndex={100}
        >
          We believe in building partnerships, not acquiring clients. Above all,
          everything we do comes from the perspective of a business owner, and
          we treat your business like our own. We’re transparent about our
          methods, our pricing, and our deliverables. The best part? You get the
          peace of mind that we will bend over backwards to do whatever it takes
          to grow your business.
        </Typography>
      </Box>
      <Box className={"section-choose-us"}>
        <Box className={"section-content"}>
          <Typography
            component={"h3"}
            variant={"subtitle2"}
            color={"secondary"}
          >
            Why Choose Us ?
          </Typography>
          <Typography component={"h1"} variant={"h4"} fontWeight={800}>
            Looking To Build A Product And Make It Physical And Digitally known?
          </Typography>
          <Typography>
            Frutiv can help you build web and mobile applications to take your
            ideas from paper to a functioning product. And help you get your
            target audience with our digital tools.
          </Typography>
          <Box className={"steps"}>
            <Box className={"step one"}>
              <Box className={"circle"}>
                <Typography component={"h6"} variant={"h6"} color={"secondary"}>
                  1
                </Typography>
              </Box>
              <Box className={"step-content"}>
                <Typography component={"h3"} variant={"h6"} fontWeight={600}>
                  Understand Scope Of Work
                </Typography>
                <Typography
                  component={"p"}
                  variant={"subtitle1"}
                  fontWeight={500}
                >
                  We analyze the features of the application in detail and
                  estimate the time and cost
                </Typography>
              </Box>
            </Box>
            <Box className={"step two"}>
              <Box className={"circle"}>
                <Typography component={"h6"} variant={"h6"} color={"primary"}>
                  2
                </Typography>
              </Box>
              <Box className={"step-content"}>
                <Typography component={"h3"} variant={"h6"} fontWeight={600}>
                  Build Minimum Viable Product
                </Typography>
                <Typography
                  component={"p"}
                  variant={"subtitle1"}
                  fontWeight={500}
                >
                  We build MVP to help you test the product with your target
                  audience and get feedback
                </Typography>
              </Box>
            </Box>
            <Box className={"step three"}>
              <Box className={"circle"}>
                <Typography
                  component={"h6"}
                  variant={"h6"}
                  fontWeight={800}
                  color={"warning"}
                >
                  3
                </Typography>
              </Box>
              <Box className={"step-content"}>
                <Typography component={"h3"} variant={"h6"} fontWeight={600}>
                  Understand Scope Of Work
                </Typography>
                <Typography
                  component={"p"}
                  variant={"subtitle1"}
                  fontWeight={500}
                >
                  We analyze the features of the application in detail and
                  estimate the time and cost
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={"section-media"}>
          <img src="" alt="" />
        </Box>
      </Box>
      <Box className={"section-what-we-do"}>
        <Typography
          component={"h6"}
          variant={"h6"}
          fontWeight={700}
          color={"secondary"}
        >
          What Do We Do ?
        </Typography>
        <Typography component={"h6"} variant={"subtitle1"}>
          We cover every single part of your digital challenges, there is always
          the case whereby the ideas has only written document, we can bring it
          to life and there is also the case whereby it’s life but not
          functioning as expected; we can it all. We gat you cover.
        </Typography>
        <Box className={"services"}>
          <Box className={"service"}>
            <div className="service-keyword">
              <Typography variant={"h5"} fontWeight={800}>
                We Build & Rebuild
              </Typography>
            </div>
            <Typography variant={"subtitle2"} className="service-description">
              We can construct that product idea and give it functioning power,
              will can also re-frame what has been constructed but not optimize
              or not functioning well.
            </Typography>
          </Box>
          <Box className={"service"}>
            <div className="service-keyword">
              <Typography variant={"h5"} fontWeight={800}>
                We Brand & Rebrand
              </Typography>
            </div>
            <Typography variant={"subtitle2"} className="service-description">
              We can construct that product idea and give it functioning power,
              will can also re-frame what has been constructed but not optimize
              or not functioning well.
            </Typography>
          </Box>
          <Box className={"service"}>
            <div className="service-keyword">
              <Typography variant={"h5"} fontWeight={800}>
                We Analyze & Re-Analyze
              </Typography>
            </div>
            <Typography variant={"subtitle2"} className="service-description">
              We can construct that product idea and give it functioning power,
              will can also re-frame what has been constructed but not optimize
              or not functioning well.
            </Typography>
          </Box>
          <Box className={"service"}>
            <div className="service-keyword">
              <Typography variant={"h5"} fontWeight={800}>
                We Strategize & Re-Strategize
              </Typography>
            </div>
            <Typography variant={"subtitle2"} className="service-description">
              We can construct that product idea and give it functioning power,
              will can also re-frame what has been constructed but not optimize
              or not functioning well.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={"section-development"}>
        <Typography component={"h3"} variant={"h6"}>
          When It’s Comes To Development
        </Typography>
        <Typography component={"h3"} variant={"h6"}>
          We have expert in various programming language that will use to build
          digital product
        </Typography>
        <Box className={"language list"} role={"list"}>
          <Box role={"list-item"}>
            <img src="./images/python.png" alt="python png" />
          </Box>
          <Box role={"list-item"}>
            <img src="./images/react.png" alt="python png" />
          </Box>
          <Box role={"list-item"}>
            <img src="./images/flutter.png" alt="python png" />
          </Box>
          <Box role={"list-item"}>
            <img src="./images/wordpress.png" alt="python png" />
          </Box>
          <Box role={"list-item"}>
            <img src="./images/react-native.png" alt="python png" />
          </Box>
        </Box>
      </Box>
      <Hub />
      <GetStarted />
    </Container>
  );
};

export default AboutUs;
