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
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
type State = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactUs() {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();

  const onSubmit = (formData: State) => {
    console.log({ formData });
  };
  return (
    <React.Fragment>
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
              <img src={"/images/contact-us.png"} alt="contact us vector" />
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
                We are always ready to become a part of your business.
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
                We are ready to deliver to you at your specified time.
              </Typography>
            </Box>
            <Box
              onSubmit={handleSubmit(onSubmit)}
              component={"form"}
              action="#"
              className="form"
            >
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
                    label="Your Full Name"
                    variant={"outlined"}
                    color={"secondary"}
                    {...register("name", { required: true })}
                    fullWidth
                    error={Boolean(errors.name)}
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
                    label="Your Email"
                    variant={"outlined"}
                    color={"secondary"}
                    {...register("email", { required: true })}
                    fullWidth
                    error={Boolean(errors.email)}
                  />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                  <TextField
                    label="Subject"
                    variant={"outlined"}
                    color={"secondary"}
                    {...register("subject", { required: true })}
                    fullWidth
                    error={Boolean(errors.subject)}
                  />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                  <TextField
                    label="Message"
                    variant={"outlined"}
                    color={"secondary"}
                    {...register("message", { required: true })}
                    multiline
                    rows={4}
                    fullWidth
                    error={Boolean(errors.message)}
                  />
                </Grid>
              </Grid>
              <Box className="form-action" sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  type={"submit"}
                  color="secondary"
                  size="large"
                >
                  Get A Quote
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <GetStarted />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;

const infos = [
  {
    title: "Company Name",
    caption: "Frutiv Technologies",
    icon: "ep:office-building",
  },
  {
    title: "Located",
    caption: "70, Alhaji Masha Road, Surulere, Lagos State, Nigeria.",
    icon: "akar-icons:location",
  },
  {
    title: "Email",
    caption: "info@frutiv.com",
    icon: "clarity:email-solid",
  },
  {
    title: "Telephone",
    caption: "+2347085830807",
    icon: "fluent:call-28-filled",
  },
];
