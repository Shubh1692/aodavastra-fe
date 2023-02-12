import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from '@mui/material';

export const BlockLoading = ({ blocking }) => {
    if (blocking) {
        return (
            <Grid
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress color="secondary" size={200} thickness={1} />
            </Grid>
        )
    } else {
        return ''
    }
}
