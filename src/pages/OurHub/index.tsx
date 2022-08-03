import { Icon } from "@iconify/react";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Stack,
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
        <Box className={"section-hub"} sx={{ my: 10 }}>
          <Box className={"section-wrapper"}>
            <Box className={"section-header"}>
              <Typography
                component={"h1"}
                variant={"h4"}
                fontWeight={800}
                color={"secondary"}
              >
                THE FRUTIV TECH HUB
              </Typography>
              <Typography
                component={"h1"}
                variant={"subtitle1"}
                fontWeight={500}
              >
                Getting to know about the frutiv hub.
              </Typography>
            </Box>
            <Box className={"section-text"} sx={{ my: 5 }}>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                We are growing a hub in nigeria, we also have the goal to give
                tech minded youth the knowledge of latest technology at a very
                minimum fee, well this fee do not really define the remuneration
                of the knowledge and training we will be giving, it just to
                enhance support the training with some tools. One of our goal is
                to give tech minded youths, the knowledge of latest technology
                and be able to get job easily. During the training, we will also
                be working as a team building small technology, giving our
                trainee live
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                We are a team of tech, that come together to share knowledge and
                at the same time, utilizing the shared knowledge into live
                project. In the hub, every one takes participation in everything
                that will be coming out of the hub, in terms of rendering
                services to clients and software development.
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
              >
                We are a team of tech, that come together to share knowledge and
                at the same time, utilizing the shared knowledge into live
                project. In the hub, every one takes participation in everything
                that will be coming out of the hub, in terms of rendering
                services to clients and software development.
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
              >
                When it comes to software development, role is assign to every
                group/category of tech in the hub. We find out that, for starter
                developers to get better fast and to get a better practice and
                experience, is when they get their hands on real live projects,
                so they will be able to see the process and practice of software
                development.
              </Typography>
            </Box>
            <Box className={"hub-group"} sx={{ my: 5 }}>
              <Typography
                component={"h6"}
                color={"secondary"}
                variant={"h6"}
                fontWeight={800}
                mb={3}
              >
                FRUTIV HUB GROUPS
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                In <b style={{ color: "#F06908" }}>FRUTIV HUB</b>, there are
                groups in <b style={{ color: "#F06908" }}>FRUTIV HUB</b>. There
                are different areas in technology, that why we have different
                groups which fall in the list below
              </Typography>

              <Box className="groups" mb={2}>
                <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
                  {[
                    "UI/UX",
                    "Front-end development",
                    "Back-end development",
                    "Digital marketing",
                    "App Development",
                  ].map((group, index) => {
                    return (
                      <Chip label={group} key={index} variant="outlined" />
                    );
                  })}
                </Stack>
              </Box>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                The good thing about{" "}
                <b style={{ color: "#F06908" }}>FRUTIV HUB</b> is that everyone
                is still learning, so no one knows it all, we are just a group
                of tech bodies coming together and building together and
                offering products to the world.
              </Typography>
            </Box>
            <Box className={"hub-purpose"} sx={{ my: 5 }}>
              <Typography
                component={"h6"}
                variant={"h6"}
                mb={3}
                color={"secondary"}
                fontWeight={800}
              >
                PURPOSE OF FRUTIV HUB
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                The purpose of this hub is gather together beginner developers
                and intermediate and expose them to modern tech way and practice
                and also sharing knowledge with each other. The hub we actually
                be strict, because we want all to be serious and focused on
                building ourselves to be what we want to be and be Presentable
                to companies with confident and assurance.
              </Typography>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                Every member will always be assign a task based on your level of
                understanding, and there won't be limit to what you will know,
                you will be welcome to participate in any program even if is not
                your area of tech.
              </Typography>

              <Typography
                component={"p"}
                variant={"subtitle1"}
                fontWeight={500}
                mb={2}
              >
                For we to hold strong and ensure you are going to be serious, a
                payment needs to be made to make you feel you put something in
                before you joined and you need to be serious and participating
                and active in the hub. The price token is{" "}
                <b style={{ color: "#F06908" }}>#10,000</b>, if you know the
                value of what you will get and even in a fast way, you won't say
                you are paying for what u will get. The payment is just to get
                seriousness from you and it's a mandate payment you need to make
                before you can be part{" "}
                <b style={{ color: "#F06908" }}>FRUTIV HUB</b>.
              </Typography>
              <Box className="groups" mb={2}>
                <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
                  {[
                    "Web 3 - Block chain development",
                    "Advance and modern technologies",
                    "Faster way of building software’s",
                    "Real time applications",
                    "A lot more ...",
                  ].map((group, index) => {
                    return (
                      <Chip label={group} key={index} variant="outlined" />
                    );
                  })}
                </Stack>
              </Box>
            </Box>

            <Typography
              component={"p"}
              mb={2}
              variant={"subtitle1"}
              fontWeight={500}
            >
              WE WILL BE GLAD TO HAVE YOU HERE TO LEARN FROM OTHER DEVELOPERS
              AND LEVEL UP YOU EXPERIENCE.
            </Typography>

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
