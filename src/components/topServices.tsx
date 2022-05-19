import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, useTheme} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import {topServices} from "../pages/LandingPage/data";
import React from "react";


export default function TopServices (){
    const theme = useTheme()
    const [active, setActive] = React.useState<number>(1);
    const [width, setWidth] = React.useState<boolean>(true);

    React.useLayoutEffect(()=>{
        setWidth(window.innerWidth < 600)

        window.onresize = ()=>{
            let w = window.innerWidth
            setWidth(w < 600)
        }
    }, [])

    return (
        <Box className={"section-top-services"} sx={{my: 20}}>
            <Typography component={"h2"} variant={"h6"} color={"secondary"} fontWeight={800} mb={4}>
                Our Top Services
            </Typography>
            {!width && <Box sx={{position: "relative"}}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="services-swiper"
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween:20
                        },
                        750: {
                            slidesPerView: 3,
                            spaceBetween:10
                        },
                        1100: {
                            slidesPerView: 4,
                            spaceBetween:20
                        },
                    }}
                    style={{padding: 2}}
                >
                    {topServices.map((service, index)=>{
                        let isActive = active === index;
                        let activeStyle = {bgcolor: theme.palette.primary.main, color: "#fff", height: "100%", borderRadius: "10px 10px 0 0",  position: "relative", overflow: "initial"}
                        return(
                            <SwiperSlide key={index} style={{height: "initial"}} id={"slide"+index}>
                                <Card  onClick={(e)=>{
                                    setActive(index)
                                }} elevation={7} sx={!isActive ? {height: "100%"} : activeStyle} className={"section-card"}>
                                    <CardActionArea sx={{display: "grid",height: "100%", placeItems: "center"}}>
                                        <CardMedia component={"img"} src={"/images/" + service.image} alt={service.title} sx={{maxWidth: "90%"}} />
                                        <CardContent sx={{textAlign: "center"}}>
                                            <Typography component={"div"} variant={"subtitle1"} mb={2} fontWeight={700}>
                                                {service.title}
                                            </Typography>
                                            <Typography component={"div"} variant={"subtitle2"} fontWeight={600}>
                                                {service.text}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Box className={"service-preview"} sx={{p: 4, bgcolor: theme.palette.primary.main, color: "#fff", borderRadius: "5px 5px 1.5em 1.5em"}}>
                    <Typography component={"h1"} variant={"h6"} fontWeight={800} mb={3}>
                        Digital Marketing
                    </Typography>
                    <Typography component={"p"} variant={"subtitle2"} fontWeight={500} mb={3}>
                        If you’re a business owner or marketing executive and you’re looking
                        for an awesome and enthusiastic partner to help you grow your business—from
                        strategy creation to execution and ongoing optimization, you’ve come to the
                        right place. Blue Corona helps companies increase leads and sales from the
                        web, differentiate their brand, and optimize their marketing cost.
                        The result? MORE BUSINESS GROWTH.

                        What makes us different from other digital marketing agencies is the fact
                        that we cut the fluff—everything we do is done from a business owner’s
                        perspective and is directly tied to improving your web presence. No fancy
                        jargon, no smoke and mirrors, and no “super secret sauce.” Your strategies
                        are rooted in data and analytics and
                        we have the expertise and technology to actually show you what’s working and what’s not.
                    </Typography>
                    <Button color={"info"} variant={"contained"} sx={{
                        borderRadius: 2,
                        boxShadow: theme.shadows[3],
                        width: 150,
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 600
                    }}>
                        Learn more
                    </Button>
                </Box>
            </Box>}
            {width && <Box className={"mobile-view"}>
                {topServices.map((service, index)=>{
                    return(
                        <Card key={index} elevation={7} sx={{height: "100%"}} className={"section-card"}>
                            <CardActionArea sx={{display: "grid",height: "100%", placeItems: "center"}}>
                                <CardMedia component={"img"} src={"/images/" + service.image} alt={service.title} sx={{maxWidth: "90%"}} />
                                <CardContent sx={{textAlign: "center"}}>
                                    <Typography component={"div"} variant={"subtitle1"} mb={2} fontWeight={700}>
                                        {service.title}
                                    </Typography>
                                    <Typography component={"div"} variant={"subtitle2"} fontWeight={600}>
                                        If you’re a business owner or marketing executive and you’re looking
                                        for an awesome and enthusiastic partner to help you grow your business—from
                                        strategy creation to execution and ongoing optimization, you’ve come to the
                                        right place. Blue Corona helps companies increase leads and sales from the
                                        web, differentiate their brand, and optimize their marketing cost.
                                        The result? MORE BUSINESS GROWTH.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Box>}
        </Box>
    )
}

