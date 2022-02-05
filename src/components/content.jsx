import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Content() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ minHeight: '83vh', display: 'grid', alignContent: 'center' }} elevation={2}>
                    placeholder
                </Paper>
            </Grid>
        </Grid>
    );
}
