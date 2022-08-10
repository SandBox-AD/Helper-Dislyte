import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from "@mui/material"
import Link from 'next/link'
export default function CardGrid({ children, data }){
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((esper, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345}}>
                        <Link href={"espers/"+esper.id.toString()}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{
                                        width:'auto'
                                    }}
                                    component="img"
                                    image={esper.picture}
                                    alt={esper.esper}
                                />
                                <CardContent>
                                    <Typography>
                                        {esper.esper}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}