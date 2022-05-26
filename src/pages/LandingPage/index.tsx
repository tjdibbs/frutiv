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

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

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
                  Let us get that audience You want, like a flowing stream
                </Typography>
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
        <Box className="section-breif">
          <Three small />
          <Box className={"brief-about-text"} sx={{ width: "100%" }}>
            <Typography
              variant="subtitle1"
              color="secondary"
              fontWeight={600}
              mb={3}
            >
              What We Believe
            </Typography>
            <Typography
              component={"div"}
              variant={"subtitle2"}
              fontWeight={600}
              position={"relative"}
              zIndex={100}
            >
              We believe in building partnerships, not acquiring clients. Above
              all, everything we do comes from the perspective of a business
              owner, and we treat your business like our own. We’re transparent
              about our methods, our pricing, and our deliverables. The best
              part? You get the peace of mind that we will bend over backwards
              to do whatever it takes to grow your business.
            </Typography>
          </Box>
        </Box>
        <Container>
          <Box className="section-method" sx={{ mt: 10 }}>
            <Typography
              component={"h1"}
              variant={"h5"}
              fontWeight={800}
              textAlign={"center"}
            >
              We also drive result through
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
    </Box>
  );
};

function Three({ small }: { small?: boolean }) {
  const theme = useTheme();
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
        <Box
          className={"card optimize"}
          sx={{ bgcolor: theme.palette.secondary.main }}
        >
          <Icon
            icon="simple-icons:googleoptimize"
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
            OPTIMIZE
          </Typography>
          <Typography
            component={"h1"}
            className={"secondary-text"}
            variant={"caption"}
          >
            Marketing Cost
          </Typography>
        </Box>
        <Box
          className={"card increase"}
          sx={{ bgcolor: theme.palette.primary.main }}
        >
          <Icon
            icon="icon-park-outline:increase"
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
            INCREASE
          </Typography>
          <Typography
            className={"secondary-text"}
            component={"h5"}
            variant={"caption"}
          >
            Marketing Cost
          </Typography>
        </Box>
        <Box
          className={"card different"}
          sx={{ bgcolor: theme.palette.info.main }}
        >
          <Icon
            icon="ic:outline-web"
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
            DIFFERENTIATE
          </Typography>
          <Typography
            className={"secondary-text"}
            component={"h5"}
            variant={"caption"}
          >
            Your Online
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
