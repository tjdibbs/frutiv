import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Stack,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import GetStarted from "../../components/get-started";
import j from "jquery";

const websites = [
  {
    name: "ZABLOT",
    text: "Zablot is growing social media platform built strictly for education purpose",
    image: "/images/websites/zablot.png",
    url: "https://zablot.herokuapp.com",
  },
  {
    name: "VEEGOR",
    text: "Veegor is a blockchain platform, that gives business to take advantage of change, creating their tokens and having multi wallet.",
    image: "/images/websites/veegor.png",
    url: "https://veegor.herokuapp.com",
  },
  {
    name: "KINGDOM FIRM PROPERTIES",
    text: "Kingdom firm properties is a growing company provide way means of getting homes and apartment wround the world with the worry of inspection or visibility to complete the processes.",
    image: "/images/websites/kfp.png",
    url: "https://kingdomfirmproperties.herokuapp.com",
  },
];

function Portfolio() {
  const theme = useTheme();
  const webRef = React.useRef<HTMLDivElement>(null);
  // React.useEffect(() => {
  //   const element = webRef.current as HTMLDivElement;
  //   let timerStore: NodeJS.Timer;

  //   function Animate() {
  //     let ended = true;
  //     timerStore = setInterval(() => {
  //       const w = j(element).prop("scrollWidth");
  //       const innerWidth = window.innerWidth;
  //       let left = j(element).prop("scrollLeft");

  //       if (w - innerWidth + 15 <= left || ended) {
  //         if (left <= 4 && left !== 0 && left !== 1) {
  //           setTimeout(() => {
  //             j(element).prop("scrollLeft", left - 2);
  //             ended = true;
  //           }, 1000);
  //         } else {
  //           j(element).prop("scrollLeft", left - 2);
  //           ended = true;
  //         }
  //       }

  //       if (!ended) {
  //         j(element).prop("scrollLeft", left + 2);
  //       }

  //       if (left <= 2) ended = false;
  //     }, 50);
  //   }

  //   Animate();

  //   return () => {
  //     clearInterval(timerStore);
  //   };
  // });

  return (
    <Box className="portfolio-wrapper">
      <Container className={"section-front"}>
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
                Portfolio
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
                  Portfolio
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
            <img src="/images/portfolio.png" alt="contact us vector" />
          </Box>
        </Box>
      </Container>
      <Box className="section-web-services">
        <Box className="section-header">
          <Typography
            component={"h6"}
            variant="subtitle2"
            textAlign="center"
            color="secondary"
            px={2}
          >
            Take a look at some of the ongoing and completed website and web app
            by frutiv technology
          </Typography>
          <Typography
            component={"h1"}
            px={2}
            variant={"h4"}
            mb={8}
            fontWeight={800}
          >
            Our Recents Web Job
          </Typography>
        </Box>
        <Box className="list-wrapper">
          <Box className="website-list" ref={webRef}>
            {websites.map((website, index) => {
              return (
                <Box className="website zablot" key={index}>
                  <Box className="image-wrapper">
                    <img
                      src={website.image}
                      className="website-cover"
                      alt="zablot website"
                      style={{ boxShadow: theme.shadows[10] }}
                    />
                  </Box>
                  <Box className="details content">
                    <Typography
                      component={"h3"}
                      variant="h6"
                      my={3}
                      fontWeight={800}
                      color="secondaru"
                      textAlign="center"
                    >
                      {website.name}
                    </Typography>
                    <Typography
                      component={"h3"}
                      variant="subtitle2"
                      mb={3}
                      textAlign="center"
                    >
                      {website.text}
                    </Typography>
                    <a href={website.url} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        sx={{ textTransform: "none", borderRadius: 5 }}
                        size="large"
                        color="secondary"
                      >
                        Visit Website
                      </Button>
                    </a>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box className="section-mobile" sx={{ my: 10 }}>
        <Typography
          component={"h6"}
          variant="subtitle1"
          textAlign="center"
          color="secondary"
        >
          Here we have our mobile application, we have built for our clients
        </Typography>
        <Typography
          component={"h1"}
          variant={"h4"}
          mb={6}
          fontWeight={800}
          textAlign="center"
        >
          Our Recents Development On Mobile
        </Typography>

        <Box className="mobile-applications" role="list">
          {Array.from(Array(3)).map((_, index) => {
            return (
              <Box className="application" key={index}>
                <Box className="frame">
                  <Box className="screen">
                    <Box className="status-bar">
                      <Box className="network-status">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </Box>
                      <Box className="top-bar">
                        <span className="speaker"></span>
                        <span className="camera"></span>
                      </Box>
                      <Box className="left-status">
                        <Box className="battery-status"></Box>
                        <Typography
                          variant="caption"
                          fontWeight={500}
                          className="battery-percentage"
                        >
                          80%
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="render-screen">
                      <Typography
                        variant="subtitle1"
                        color="secondary"
                        fontWeight={600}
                        className="app-name"
                      >
                        Veegor
                      </Typography>
                      <Box
                        className="app description"
                        style={{ color: "#fff" }}
                      >
                        <Typography
                          textAlign="center"
                          variant="subtitle2"
                          component={"p"}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reiciendis autem recusandae dolorum unde sunt
                          hic, magni consequuntur vitae vero perspiciatis ipsa
                          ipsum earum numquam ducimus blanditiis dolor rem,
                          veritatis doloremque.
                        </Typography>
                      </Box>
                      <Stack
                        direction="row"
                        spacing={2}
                        className="get-app-links"
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: "blue",
                            color: "blue",
                            textTransform: "none",
                          }}
                          className="get-apple-store link"
                        >
                          <Box className="icon">
                            <Icon
                              icon="ant-design:apple-filled"
                              color="blue"
                              height="24"
                            />
                          </Box>
                          <Box className="text">
                            <span className="title">Get on</span>
                            <span className="store">Apple Store</span>
                          </Box>
                        </Button>
                        <Button
                          variant={"outlined"}
                          color="secondary"
                          sx={{ textTransform: "none" }}
                          className="get-play-store link"
                        >
                          <Box className="icon">
                            <Icon
                              icon="bxl:play-store"
                              color={theme.palette.secondary.main}
                              height="24"
                            />
                          </Box>
                          <Box className="text">
                            <span className="title">Get on</span>
                            <span className="store">Play Store</span>
                          </Box>
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="section-testimonies" sx={{ my: 15 }}>
        <Box className="section-header" sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="subtitle1" component="p" color="secondary">
            Our Happy Clients
          </Typography>
          <Typography variant="h4" fontWeight={800} component="h1">
            Testimonies From Across The World
          </Typography>
        </Box>
        <Box className="clients-wrapper" sx={{ maxWidth: 800, m: "auto" }}>
          {Array.from(Array(10)).map((_, index) => {
            return (
              <Box className="client" key={index}>
                <Avatar
                  alt="Remy Sharp"
                  src="/images/user.jpg"
                  sx={{ width: 70, height: 70 }}
                />
                <Typography variant="subtitle2" fontWeight={600}>
                  Company Name
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Container>
        <GetStarted />
      </Container>
    </Box>
  );
}

export default Portfolio;
