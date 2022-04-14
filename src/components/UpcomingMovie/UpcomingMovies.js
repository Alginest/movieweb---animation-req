import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import UpcomingCarousel from "../../Carousels/UpcomingCarousel/UpcomingCarousel";
const UpcomingMovies = () => {
  const classes = useStyles();
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section className={classes.upcomingMovies}>
      <Box className={classes.wide}>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          className={classes.generalName}
        >
          Upcoming Movies
        </Typography>

        <Link to="/movies" className={classes.link} onClick={handleClick}>
          <Button className={classes.moreBtn} variant="outlined" type="button">
            View More
          </Button>
        </Link>
      </Box>
      <UpcomingCarousel />
    </section>
  );
};

export default UpcomingMovies;
