import React from 'react';
import {
    Box,
    Typography,
    Grid,
} from "@mui/material";
import { BackButton } from '../../Utils/Common/styledComponent';

const Posts = ({ data, handleClose }) => {
    console.table(data)
    return (
        <>
            <Grid item md={6} lg={6}>
                <Box sx={{ width: '720px' }}>
                    <Box sx={{ margin: "0px 0px 8px 0px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "400",
                                margin: "0px 0px 0px 26px",
                            }}
                        >
                            Liked Posts
                        </Typography>
                        <BackButton onClick={() => handleClose('post')}>Back</BackButton>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {data?.map((post) => <Grid sx={{ height: "240px", width: "240px" }} key={post._id}>
                            <Box component={"img"} height={"100%"} width={"100%"} src={post?.postId?.media} alt="post" />
                        </Grid>)}
                    </Box>
                </Box>
            </Grid>

        </>
    )
}
export default Posts;