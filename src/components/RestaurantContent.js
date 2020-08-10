import React from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import RestaurantCard from "./RestaurantCard";

const RestaurantContent = () => {
  const { restaurants } = useSelector((state) => state.data);
  console.log(restaurants)
  const restaurantArray = restaurants.restaurants;

  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={3} key={restaurantObj._id}>
        <RestaurantCard {...restaurantObj} />
      </Grid>
    );
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
        Ordene de su lugar favorito  -
      </Typography>
      <br />
      <Grid container spacing={2}>
        {restaurantArray ? (
          restaurantArray.length > 0 ? (
            restaurantArray.map((restaurant) => getRestaurantCard(restaurant))
          ) : (
            <p>
             No hay lugares disponibles actualmente en su área, vuelva más tarde.
            </p>
          )
        ) : (
          <p>Error en el servidor, vuelva más tarde.</p>
        )}
      </Grid>
    </>
  );
};

export default RestaurantContent;
