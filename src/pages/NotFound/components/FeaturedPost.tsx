import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    link: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href={post.link} target={'_blank'} data-aos="fade-up">
        <Card sx={{ display: 'flex', height: 250 }} >
          <CardContent sx={{ flex: 1, height: 250 }} >
            <Typography component="h2" variant="h5" fontFamily={'Poppins'} data-aos="fade-up">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontFamily={'Poppins'} data-aos="fade-up">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph fontFamily={'Poppins'} data-aos="fade-up">
              {post.description}
            </Typography>
            <Typography variant="subtitle1" fontFamily={'Poppins'} color={'green'} display={'flex'} alignItems={'flex-end'}>
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
            data-aos="zoom-in"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
