import React from "react";
import {
    Box, Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import {Icon} from "@iconify/react";
import {drive, topServices} from "./data"

interface Props {

}

const Index: React.FC<Props> = (props): JSX.Element => {
    const theme = useTheme()
    const [active, setActive] = React.useState<string>("digital marketing");
    return(
        <div className="home-container">
            <div className="home-wrapper">
               <Box className={"section-front"}>
                   <Box>
                       <Typography mx={"auto"} mt={8} component={"h3"} variant={"h3"} fontWeight={800} maxWidth={800} textAlign={"center"}>
                           Let’s get that audience You want, like a flowing river
                       </Typography>
                   </Box>
                   <Box sx={{my: 3}}>
                       <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}>
                           <Box className={"circle optimize"} sx={{bgcolor: theme.palette.secondary.main}}>
                               <Icon icon="simple-icons:googleoptimize" color="#fff" height="30" className={"icon"} />
                               <Typography component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   OPTIMIZE
                               </Typography>
                               <Typography component={"h5"} variant={"caption"}>Marketing Cost</Typography>
                           </Box>
                           <Box className={"circle increase"} sx={{bgcolor: theme.palette.primary.main}}>
                               <Icon icon="icon-park-outline:increase" color="#fff" height="30" className={"icon"}/>
                               <Typography component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   INCREASE
                               </Typography>
                               <Typography component={"h5"} variant={"caption"}>Marketing Cost</Typography>
                           </Box>
                           <Box className={"circle optimize"} sx={{bgcolor: theme.palette.info.main}}>
                               <Icon icon="ic:outline-web" color="#fff" height="30" className={"icon"}/>
                               <Typography component={"div"} variant={"subtitle1"} fontWeight={800} color={"inherit"}>
                                   DIFFERENTIATE
                               </Typography>
                               <Typography component={"h5"} variant={"caption"}>Your Online</Typography>
                           </Box>

                       </Stack>
                   </Box>
                   <Box className={"brief-about-text"} sx={{maxWidth: "80%", m: "auto"}}>
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
                    <Stack direction={"row"} spacing={3} sx={{mx: "auto" , my: 6}} justifyContent={"center"}>
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
                <Box className={"section-top-services"} sx={{my: 20}}>
                    <Box sx={{position: "relative"}}>
                        <Typography component={"h2"} variant={"h6"} color={"secondary"} fontWeight={800} mb={4}>
                            Our Top Services
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{gridTemplateColumns: "repeat(auto-fit,minmax(300px, 300px))"}}>
                            {topServices.map((service, index)=>{
                                let isActive = active === service.title.toLowerCase()
                                let activeStyle = {bgcolor: theme.palette.primary.main, color: "#fff", height: "100%"}
                                return(
                                    <Grid item xs={2} md={3} key={index} onClick={()=> setActive(service.title.toLowerCase())}>
                                        <Card  elevation={7} sx={!isActive ? {height: "100%"} : activeStyle} className={"section-card"}>
                                            <CardActionArea sx={{display: "grid",height: "100%", placeItems: "center",p: 2}}>
                                                <CardMedia component={"img"} src={service.image} alt={service.title} sx={{maxWidth: "90%"}} />
                                                <CardContent sx={{textAlign: "center"}}>
                                                    <Typography component={"div"} variant={"subtitle1"} mb={2} fontWeight={700}>
                                                        {service.title}
                                                    </Typography>
                                                    <Typography component={"div"} variant={"caption"} fontWeight={600}>
                                                        {service.text}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Box className={"service-preview"} sx={{p: 4, mt: 2, bgcolor: theme.palette.primary.main, color: "#fff", borderRadius: 1.5}}>
                            <Typography component={"h1"} variant={"subtitle1"} fontWeight={800} mb={3}>
                                Digital Marketing
                            </Typography>
                            <Typography component={"p"} variant={"caption"} fontWeight={500} mb={3}>
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
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Index;