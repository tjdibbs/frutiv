import React from "react";
import {
    Avatar,
    Box, Button,
    Card,
    CardContent, CardHeader, IconButton,
    Stack, TextField,
    Typography,
    useTheme
} from "@mui/material";
import {Icon} from "@iconify/react";
import {drive,} from "./data"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import TopServices from "../../components/topServices";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

interface Props {}

const Index: React.FC<Props> = (props): JSX.Element => {
    const theme = useTheme()
    const swiperRef = React.useRef<{slide(i: number): void}>(null)

    const SwiperButtonNext = React.forwardRef((props, ref: React.Ref<{slide(i: number): void}>)=>{
        const swiper = useSwiper();
        React.useImperativeHandle(ref,()=>({
            slide(index: number){
                swiper.slideTo(index)
            }
        }))
        return null
    })
    return(
        <div className="home-container">
            <div className="home-wrapper">
               <Box className={"section-front"}>
                   <Box>
                       <Typography className={"big-text"} mx={"auto"} mt={8} component={"h3"} variant={"h3"} fontWeight={800} maxWidth={800} textAlign={"center"}>
                           Let’s get that audience You want, like a flowing river
                       </Typography>
                   </Box>
                   <Box sx={{my: 3}}>
                       <Box className={"circle-container"}>
                           <Box className={"circle optimize"} sx={{bgcolor: theme.palette.secondary.main}}>
                               <Icon icon="simple-icons:googleoptimize" color="#fff" height="30" className={"icon"} />
                               <Typography className={"primary-text"} component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   OPTIMIZE
                               </Typography>
                               <Typography component={"h5"} className={"secondary-text"} variant={"caption"}>Marketing Cost</Typography>
                           </Box>
                           <Box className={"circle increase"} sx={{bgcolor: theme.palette.primary.main}}>
                               <Icon icon="icon-park-outline:increase" color="#fff" height="30" className={"icon"}/>
                               <Typography className={"primary-text"} component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   INCREASE
                               </Typography>
                               <Typography className={"secondary-text"} component={"h5"} variant={"caption"}>Marketing Cost</Typography>
                           </Box>
                           <Box className={"circle different"} sx={{bgcolor: theme.palette.info.main}}>
                               <Icon icon="ic:outline-web" color="#fff" height="30" className={"icon"}/>
                               <Typography className={"primary-text"} component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   DIFFERENTIATE
                               </Typography>
                               <Typography className={"secondary-text"} component={"h5"} variant={"caption"}>Your Online</Typography>
                           </Box>
                       </Box>
                   </Box>
                   <Box className={"brief-about-text"} sx={{width: "100%"}}>
                       <Typography component={"div"} variant={"subtitle2"} textAlign={"center"} fontWeight={600} position={"relative"} zIndex={100}>
                           We believe in building partnerships, not acquiring clients. Above all,
                           everything we do comes from the perspective of a business owner, and we
                           treat your business like our own. We’re transparent about our methods,
                           our pricing, and our deliverables. The best part? You get the peace of
                           mind that we will bend over backwards to do whatever it takes to grow
                           your business.
                       </Typography>
                   </Box>
               </Box>
                <Box className="section-method" sx={{mt: 10}}>
                    <Typography component={"h1"} variant={"h5"} fontWeight={800} textAlign={"center"}>
                        We also drive result through
                    </Typography>
                    <Stack flexWrap={"wrap"} direction={"row"} gap={3} sx={{mx: "auto" , my: 6}} justifyContent={"center"}>
                        {
                            drive.map((d, index)=>{
                                let c = d.label.replace(" ","-").toLowerCase()
                                return (
                                    <Box className={"card "+c} key={index} sx={{borderColor: `${theme.palette.primary.main}!important`}}>
                                        <Icon icon={d.name} color={theme.palette.primary.main} height="30" className={"icon"}  />
                                        <Typography component={"div"} variant={"caption"} color={"primary"} fontWeight={500}>
                                            {d.label}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }

                    </Stack>
                </Box>
                <TopServices />
                <Box className={"section-team"}>
                    <Box className={"section-header"} sx={{textAlign: "center"}}>
                        <Typography component={"div"} variant={"caption"} color={"secondary"} fontWeight={500}>
                            The Best Team
                        </Typography>
                        <Typography component={"div"} variant={"h4"} color={"text.primary"} fontWeight={800}>
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
                                    slidesPerView: 5
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperButtonNext ref={swiperRef} />

                            {Array.from(Array(5)).map((_,index)=>{
                                return (
                                    <SwiperSlide key={index}>
                                        {({ isActive , isPrev, isNext}) => (
                                            <Box onClick={()=> swiperRef.current?.slide(index)} className={isActive ? "active team" : "team"} sx={{
                                                mt: (isNext || isPrev) ? "1em" : 0
                                            }}>
                                                <Box className={isActive ? "image-wrap" : "image-wrap not-active"} sx={{boxShadow: theme.shadows[7]}}>
                                                    <img src={"/images/user.jpg"} alt={"team-user"}
                                                         className={isActive ? "staff-image active" : "staff-image"}
                                                    />
                                                </Box>
                                                <Box className={"staff-detail"}
                                                     sx={{textAlign: "center", opacity: isActive ? 1 : 0,
                                                         transition: `all .20s ${theme.transitions.easing.easeInOut}`}}>
                                                    <Typography component={"div"}
                                                                variant={"h6"}
                                                                fontWeight={600}
                                                    >
                                                        Darey Olushina
                                                    </Typography>
                                                    <Typography component={"div"} variant={"subtitle2"}
                                                                color={"secondary"} fontWeight={600}>
                                                        Executive Officer
                                                    </Typography>
                                                </Box>
                                                <Box className={"icon-wrap"}
                                                     sx={{mt: 1, opacity: isActive ? 1 : 0, transition: `all .20s ${theme.transitions.easing.easeInOut}`  }}>
                                                    <Stack direction={"row"} spacing={0.1}>
                                                        <IconButton size={"small"}>
                                                            <Icon icon="akar-icons:instagram-fill" color="#545454" height="15" />
                                                        </IconButton>
                                                        <IconButton size={"small"}>
                                                            <Icon icon="akar-icons:facebook-fill" color="#545454" height="15" />
                                                        </IconButton>
                                                        <IconButton size={"small"}>
                                                            <Icon icon="akar-icons:twitter-fill" color="#545454" height="15" />
                                                        </IconButton>
                                                        <IconButton size={"small"}>
                                                            <Icon icon="foundation:social-linkedin" color="#545454" height="15" />
                                                        </IconButton>

                                                    </Stack>
                                                </Box>
                                            </Box>
                                        )}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </Box>
                <Box className={"section-testimonial"} sx={{mt: 10}}>
                    <Box className={"section-header"} sx={{textAlign: "center"}}>
                        <Typography component={"div"} variant={"caption"} color={"secondary"} fontWeight={500}>
                            How we make our clients proud of us
                        </Typography>
                        <Typography component={"div"} variant={"h4"} color={"text.primary"} fontWeight={800}>
                            Testimonials From Our Clients
                        </Typography>
                    </Box>
                    <Box className={"testimonial"} sx={{my: 5}}>
                        <Swiper
                            initialSlide={2}
                            centeredSlides={true}
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 3
                                },
                                800: {
                                    slidesPerView: 2
                                },
                            }}
                            pagination={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            style={{padding: "1em", minHeight: 350}}
                        >
                            {Array.from(Array(5)).map((_,index)=>{
                                return (
                                    <SwiperSlide key={index}>
                                        {({ isActive , isPrev, isNext}) => (
                                            <Card elevation={5} className={isActive ? "active testimonial" : "testimonial"} sx={{
                                                mt: (isNext || isPrev) ? "1em" : 0,
                                            }} >
                                                <CardHeader
                                                    avatar={
                                                        <Avatar src={"/images/user.jpg"}  aria-label="testifier image" />
                                                    }
                                                    title={<Typography variant={"subtitle1"} fontWeight={600} lineHeight={1}>Cynthia Adesoro</Typography>}
                                                    subheader={<Typography variant={"caption"} color={"secondary"}>Global Fashions Company</Typography>}
                                                />
                                                <CardContent className={"description text"} sx={{pt: 0}}>
                                                    <Typography component={"h6"} variant={"subtitle2"} fontWeight={600}>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, architecto
                                                        assumenda consectetur cupiditate dicta dolores earum excepturi illo illum itaque
                                                        laboriosam nesciunt optio, quia quos repudiandae sit sunt temporibus ullam?
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </Box>
                <Box className={"section-hub"} sx={{my: 10, display: "flex", flexWrap: "nowrap"}} >
                    <Box className={"section-wrapper"} sx={{width: "70%"}}>
                        <Box className={"section-header"} >
                            <Typography component={"h1"} variant={"h4"} fontWeight={800} color={"secondary"}>
                                FRUTIV HUB
                            </Typography>
                            <Typography component={"h1"} variant={"subtitle1"} fontWeight={500}>
                                Getting to know about the frutiv hub.
                            </Typography>
                        </Box>
                        <Box className={"section-text"} sx={{my: 5}}>
                            <Typography component={"p"} variant={"subtitle1"} fontWeight={500}>
                                We are growing a hub in nigeria,
                                we also have the goal to give tech
                                minded youth the knowledge of latest technology at
                                a very minimum fee, well this fee do not really define
                                the remuneration of the knowledge and training we will
                                be giving, it just to enhance support the training
                                with some tools. One of our goal is to give tech
                                minded youths, the knowledge of latest technology
                                and be able to get job easily.

                                During the training, we will also be working
                                as a team building small technology, giving our trainee live
                            </Typography>
                        </Box>
                        <Button variant={"contained"} color={"secondary"} sx={{borderRadius: 10, mt: 2,textTransform: "none",py: 2, px: 5, boxShadow: theme.shadows[4]}} size={"large"}> Learn more </Button>
                    </Box>
                    <Box className={"image-container"} sx={{right: 0, maxWidth: "40%", width: "max-content"}}>
                        <img src={"/images/hub.png"} alt={"hub"} style={{width: "450px", maxWidth: "100%"}} />
                    </Box>
                </Box>
                <Box className={"get-started-section"} sx={
                    {
                        px: 2,
                        py: 3,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 1,
                        boxShadow: theme.shadows[10],
                        textAlign:"center",
                        mt: 30,
                        mb: 10
                    }
                }>
                    <Box className={"section-header"} sx={{mx: "auto",mb: 3, maxWidth: 500}}>
                        <Typography component={"h2"} variant={"h5"} fontWeight={800} color={"#fff"}>
                            Want How Service
                        </Typography>
                        <Typography component={"h2"} variant={"subtitle2"} fontWeight={400} color={"#fff"}>
                            Provide your email below or chat directly with us with the chat talk at the bottom-right of the page, to get our solutions and services now
                        </Typography>
                    </Box>
                    <Box className={"form-group"} sx={{mb: 2}}>
                        <TextField
                            label={"Enter your email"}
                            fullWidth
                            variant={"filled"}
                            sx={{
                                ".MuiFilledInput-root":{
                                    bgcolor: "#fff",
                                    borderRadius: 3,
                                    "&::before, &::after": {
                                        display: "none!important"
                                    }},
                                width: 350,
                                maxWidth: "90%",
                                mx: "auto",
                                ".MuiFilledInput-input":{fontWeight: "600!important", textAlign: "center",
                                    borderRadius: 3, bgcolor: "#fff"},
                                ".MuiInputLabel-root":{fontWeight: "600!important",width: "100%",
                                    "&.Mui-focused":{left: "50%",transform: "translate(-40%, 7px) scale(0.75)"
                                }
                                }
                        }}
                        />
                    </Box>
                    <Button color={"secondary"} size={"large"} variant={"contained"} sx={{minWidth: 150, bgcolor: "#F0AF08", borderRadius: 5}}>Submit</Button>
                </Box>
            </div>
        </div>
    )
}

export default Index;