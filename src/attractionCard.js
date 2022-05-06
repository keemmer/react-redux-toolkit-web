import * as React from 'react';
import { useGetAttractionByIDQuery } from './services/attraction';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux'

export default function AttractionCard() {
    const attraction = useSelector((state)=> state.attraction.value)
    const { data, error, isLoading } = useGetAttractionByIDQuery(attraction);
    // const { data, error, isLoading } = useGetAttractionByIDQuery(1);

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (

                <Card>
                    <Grid container spacing={2}>
                        <Grid item sm={6} >
                            <CardMedia
                                component="img"
                                width="100%"
                                image={data.attraction.coverimage}
                                alt={data.attraction.name}
                            />
                        </Grid>
                        <Grid item sm={6} >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.attraction.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.attraction.detail}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            ) : null}
        </>

    );
}
