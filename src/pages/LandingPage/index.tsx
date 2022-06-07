import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { drive } from "./data";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import TopServices from "../../components/topServices";
import Hub from "../../components/hub";
import GetStarted from "../../components/get-started";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";
import Footer from "../../components/footer";

interface Props {}

const Index: React.FC<Props> = (props): JSX.Element => {
  const theme = useTheme();
  const swiperRef = React.useRef<{ slide(i: number): void }>(null);

  const SwiperButtonNext = React.forwardRef(
    (props, ref: React.Ref<{ slide(i: number): void }>) => {
      const swiper = useSwiper();
      React.useImperativeHandle(ref, () => ({
        slide(index: number) {
          swiper.slideTo(index);
        },
      }));
      return null;
    }
  );
  return (
    <Box className="home-container">
      <div className="home-wrapper">
        <Container className={"section-front"}>
          <Box
            className="front-wrapper"
            sx={{
              mt: "0px !imporatant",
              alignItems: "flex-start!important",
              gap: "3em",
              mb: 5,
              flexWrap: "wrap!important",
            }}
          >
            <Box
              className="float-left"
              sx={{
                width: "60%!important",
                flexGrow: 1,
                [theme.breakpoints.down(850)]: { maxWidth: "100%!important" },
              }}
            >
              <Box>
                <Typography
                  className={"big-text"}
                  mx={"auto"}
                  mb={5}
                  component={"h3"}
                  variant={"h3"}
                  fontWeight={800}
                  // color={theme.palette.secondary.main}
                  sx={{
                    [theme.breakpoints.down(850)]: { textAlign: "center" },
                  }}
                >
                  Let us help you reach your target audience 
                </Typography>

                

          <br />

              </Box>
              <Box
                className={"float-right image-wrap"}
                sx={{
                  display: "none",
                  [theme.breakpoints.down(850)]: {
                    display: "block",
                    mx: "auto",
                  },
                }}
              >
                <img
                  src="/images/home.png"
                  alt="contact us vector"
                  style={{ maxWidth: "100%" }}
                />
              </Box>
              <Three />
            </Box>
            <Box
              className={"float-right"}
              sx={{
                [theme.breakpoints.down(850)]: { display: "none" },
                width: "40%",
              }}
            >
              <img
                src="/images/home.png"
                alt="contact us vector"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </Container>
        <Container
          sx={{
            [theme.breakpoints.down(450)]: { maxWidth: "100vw", m: 0, p: 0 },
          }}
          className="section-breif"
        >
          <Three small />
          <Box className={"brief-about-text"} sx={{ width: "100%" }}>
            <Typography
              variant="h6"
              color="secondary"
              fontWeight={800}
              mb={3}
            >
              You've Come To The Right Place
            </Typography>
            <Typography
              component={"div"}
              variant={"subtitle2"}
              fontWeight={600}
              position={"relative"}
              zIndex={100}
            >
              If you’re a business owner or marketing executive and you’re
              looking for an awesome and enthusiastic partner to help you
              grow your business—from strategy creation to execution and
              ongoing optimization, you’ve come to the right place. Frutiv Tech Company helps companies increase leads and sales from the web,
              differentiate their brand, and optimize their marketing costs.
              The result? MORE BUSINESS GROWTH.
            </Typography>
          </Box>
        </Container>
        <Container>
          <Box className="section-method" sx={{ mt: 10 }}>
            <Typography
              component={"h1"}
              variant={"h5"}
              fontWeight={800}
              textAlign={"center"}
            >
              We also drive results through:
            </Typography>
            <Stack
              flexWrap={"wrap"}
              direction={"row"}
              gap={3}
              sx={{ mx: "auto", my: 6 }}
              justifyContent={"center"}
            >
              {drive.map((d, index) => {
                let c = d.label.replace(" ", "-").toLowerCase();
                return (
                  <Box
                    className={"card " + c}
                    key={index}
                    sx={{
                      borderColor: `${theme.palette.primary.main}!important`,
                    }}
                  >
                    <Icon
                      icon={d.name}
                      color={theme.palette.primary.main}
                      height="30"
                      className={"icon"}
                    />
                    <Typography
                      component={"div"}
                      variant={"caption"}
                      color={"primary"}
                      fontWeight={500}
                    >
                      {d.label}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Box>
          <TopServices />
          <Box className={"section-team"}>
            <Box className={"section-header"} sx={{ textAlign: "center" }}>
              <Typography
                component={"div"}
                variant={"caption"}
                color={"secondary"}
                fontWeight={500}
              >
                The Best Team
              </Typography>
              <Typography
                component={"div"}
                variant={"h4"}
                color={"text.primary"}
                fontWeight={800}
              >
                Meet Our Professional Team
              </Typography>
            </Box>
            <Box className={"team"}>
              <Swiper
                initialSlide={2}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                pagination={true}
                breakpoints={{
                  800: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperButtonNext ref={swiperRef} />

                {Array.from(Array(5)).map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {({ isActive, isPrev, isNext }) => (
                        <Box
                          onClick={() => swiperRef.current?.slide(index)}
                          className={isActive ? "active team" : "team"}
                          sx={{
                            mt: isNext || isPrev ? "1em" : 0,
                          }}
                        >
                          <Box
                            className={
                              isActive ? "image-wrap" : "image-wrap not-active"
                            }
                            sx={{ boxShadow: theme.shadows[7] }}
                          >
                            <img
                              src={"/images/user.jpg"}
                              alt={"team-user"}
                              className={
                                isActive ? "staff-image active" : "staff-image"
                              }
                            />
                          </Box>
                          <Box
                            className={"staff-detail"}
                            sx={{
                              textAlign: "center",
                              opacity: isActive ? 1 : 0,
                              transition: `all .20s ${theme.transitions.easing.easeInOut}`,
                            }}
                          >
                            <Typography
                              component={"div"}
                              variant={"h6"}
                              fontWeight={600}
                            >
                              Darey Olushina
                            </Typography>
                            <Typography
                              component={"div"}
                              variant={"subtitle2"}
                              color={"secondary"}
                              fontWeight={600}
                            >
                              Executive Officer
                            </Typography>
                          </Box>
                          <Box
                            className={"icon-wrap"}
                            sx={{
                              mt: 1,
                              opacity: isActive ? 1 : 0,
                              transition: `all .20s ${theme.transitions.easing.easeInOut}`,
                            }}
                          >
                            <Stack direction={"row"} spacing={0.1}>
                              <IconButton size={"small"}>
                                <Icon
                                  icon="akar-icons:instagram-fill"
                                  color="#545454"
                                  height="15"
                                />
                              </IconButton>
                              <IconButton size={"small"}>
                                <Icon
                                  icon="akar-icons:facebook-fill"
                                  color="#545454"
                                  height="15"
                                />
                              </IconButton>
                              <IconButton size={"small"}>
                                <Icon
                                  icon="akar-icons:twitter-fill"
                                  color="#545454"
                                  height="15"
                                />
                              </IconButton>
                              <IconButton size={"small"}>
                                <Icon
                                  icon="foundation:social-linkedin"
                                  color="#545454"
                                  height="15"
                                />
                              </IconButton>
                            </Stack>
                          </Box>
                        </Box>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Box>
          <Box className={"section-testimonial"} sx={{ mt: 10 }}>
            <Box className={"section-header"} sx={{ textAlign: "center" }}>
              <Typography
                component={"div"}
                variant={"caption"}
                color={"secondary"}
                fontWeight={500}
              >
                How we make our clients proud of us
              </Typography>
              <Typography
                component={"div"}
                variant={"h4"}
                color={"text.primary"}
                fontWeight={800}
              >
                Testimonials From Our Clients
              </Typography>
            </Box>
            <Box className={"testimonial"} sx={{ my: 5 }}>
              <Swiper
                initialSlide={2}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 2,
                  },
                }}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ padding: "1em", minHeight: 350 }}
              >
                {Array.from(Array(5)).map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {({ isActive, isPrev, isNext }) => (
                        <Card
                          elevation={5}
                          className={
                            isActive ? "active testimonial" : "testimonial"
                          }
                          sx={{
                            mt: isNext || isPrev ? "1em" : 0,
                          }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                src={"/images/user.jpg"}
                                aria-label="testifier image"
                              />
                            }
                            title={
                              <Typography
                                variant={"subtitle1"}
                                fontWeight={600}
                                lineHeight={1}
                              >
                                Cynthia Adesoro
                              </Typography>
                            }
                            subheader={
                              <Typography
                                variant={"caption"}
                                color={"secondary"}
                              >
                                Global Fashions Company
                              </Typography>
                            }
                          />
                          <CardContent
                            className={"description text"}
                            sx={{ pt: 0 }}
                          >
                            <Typography
                              component={"h6"}
                              variant={"subtitle2"}
                              fontWeight={600}
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Alias, architecto assumenda
                              consectetur cupiditate dicta dolores earum
                              excepturi illo illum itaque laboriosam nesciunt
                              optio, quia quos repudiandae sit sunt temporibus
                              ullam?
                            </Typography>
                          </CardContent>
                        </Card>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Box>
          <Hub />
          <GetStarted />
        </Container>
      </div>
      <Footer />
    </Box>
  );
};

function Three({ small }: { small?: boolean }) {
  const theme = useTheme();
  const [width, setWidth] = React.useState(window.innerWidth < 520);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 520) {
        setWidth(false);
      } else setWidth(true);
    });

    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 520) {
          setWidth(false);
        } else setWidth(true);
      });
  });

  const data = [
    {
      icon: "simple-icons:googleoptimize",
      title: "OPTIMIZE",
      caption: "Marketing Costs",
      color: theme.palette.secondary.main,
    },
    {
      icon: "icon-park-outline:increase",
      title: "INCREASE",
      caption: "Leads & Sales",
      color: theme.palette.primary.main,
    },
    {
      icon: "ic:outline-web",
      title: "DIFFERENTIATE",
      caption: "Your Brand Online",
      color: theme.palette.info.main,
    },
  ];

  if (width) {
    return (
      <Box
        sx={{
          my: 3,
          display: small ? "none" : "block",
          [theme.breakpoints.down(850)]: {
            display: small ? "block" : "none",
            padding: 1,
          },
        }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.map((d, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{ display: "grid", placeItems: "center" }}
              >
                <Box
                  className={"card optimize"}
                  sx={{
                    bgcolor: d.color,
                    width: "60%!important",
                    height: "150px!important",
                  }}
                >
                  <Icon
                    icon={d.icon}
                    color="#fff"
                    height="30"
                    className={"icon"}
                  />
                  <Typography
                    className={"primary-text"}
                    component={"div"}
                    variant={"subtitle1"}
                    fontWeight={800}
                    color={"inherit"}
                  >
                    {d.title}
                  </Typography>
                  <Typography
                    component={"h1"}
                    className={"secondary-text"}
                    variant={"caption"}
                  >
                    {d.caption}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        my: 3,
        display: small ? "none" : "block",
        [theme.breakpoints.down(850)]: {
          display: small ? "block" : "none",
          padding: 1,
        },
      }}
    >
      <Box
        className={"card-container"}
        sx={{
          [theme.breakpoints.down(850)]: {
            justifyContent: "center",
            maxWidth: "100%",
            overflow: "auto",
          },
        }}
      >
        {data.map((d, index) => {
          return (
            <Box
              key={index}
              className={"card optimize"}
              sx={{ bgcolor: d.color }}
            >
              <Icon icon={d.icon} color="#fff" height="30" className={"icon"} />
              <Typography
                className={"primary-text"}
                component={"div"}
                variant={"subtitle1"}
                fontWeight={800}
                color={"inherit"}
              >
                {d.title}
              </Typography>
              <Typography
                component={"h1"}
                className={"secondary-text"}
                variant={"caption"}
              >
                {d.caption}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Index;
