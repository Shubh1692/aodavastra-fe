import React from 'react';
import {
    Box,
    Typography,
    Grid,
} from "@mui/material";
import post1 from "../../Assets/Images/post-1.png";
import post2 from "../../Assets/Images/post-2.png";
import post3 from "../../Assets/Images/post-3.png";

const Posts = () => {
    return (
        <>

            <Grid item md={6} lg={6}>
                <Typography
                    sx={{
                        fontSize: "24px",
                        fontWeight: "400",
                        margin: "0px 0px 8px 26px",
                    }}
                >
                    Liked Posts
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Grid sx={{ height: "240px", width: "240px" }}>
                        <Box
                            component={"img"}
                            height={"100%"}
                            width={"100%"}
                            src={post1}
                            alt="post"
                        />
                    </Grid>
                    <Grid sx={{ height: "240px", width: "240px" }}>
                        <Box
                            component={"img"}
                            height={"100%"}
                            width={"100%"}
                            src={post2}
                            alt="post"
                        />
                    </Grid>
                    <Grid sx={{ height: "240px", width: "240px" }}>
                        <Box
                            component={"img"}
                            height={"100%"}
                            width={"100%"}
                            src={post3}
                            alt="post"
                        />
                    </Grid>
                    <Grid sx={{ height: "240px", width: "240px" }}>
                        <Box
                            component={"img"}
                            height={"100%"}
                            width={"100%"}
                            src={post3}
                            alt="post"
                        />
                    </Grid>
                </Box>
            </Grid>

        </>
    )
}
export default Posts;