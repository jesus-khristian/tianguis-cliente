import React from "react";

import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
  paraSeller: {
    fontSize: "x-large",
    marginLeft: "28%",
  },
});

function RestaurantItems(props) {
  const classes = useStyles();
  const { items } = props;
  const {
    account: { role },
  } = useSelector((state) => state.auth);

  return (
    <Grid item container direction="row">
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={10}>
        <Grid container spacing={2}>
          {items ? (
            items.length > 0 ? (
              items.map((item) => (
                <Grid item xs={12} sm={4} key={item._id}>
                  <ItemCard {...item} />
                </Grid>
              ))
            ) : role === "ROLE_SELLER" ? (
              <p className={classes.paraSeller}>
                No hay artículos presentes, comience a agregar artículos para obtener su primer pedido.
              </p>
            ) : (
              <p className={classes.para}>
                No hay artículos presentes para ordenar, vuelva más tarde.
              </p>
            )
          ) : null}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1} />
    </Grid>
  );
}

export default React.memo(RestaurantItems);
