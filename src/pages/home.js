import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";
import Spinner from "../util/spinner/spinner";
import RestaurantContent from "../components/RestaurantContent";

// import store from "../redux/store";
// import { fetchRestaurantsByAddress } from "../redux/actions/dataActions";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
    ["@media (max-width:420px)"]: {
      flexDirection: "column",
      fontSize:"12px",
    },
  },
  SearchBar: {
    margin: "24px 0 28px 360px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    account: { role },
    authenticated,
  } = useSelector((state) => state.auth);
  const [locationStatus, setLocationStatus] = useState(
    localStorage.getItem("location") ? true : false
  );

  // let latlng = localStorage.getItem("latlng");

  // if (latlng) {
  //   const latlngArray = latlng.split(", ");
  //   dispatch(fetchRestaurantsByAddress(latlngArray[0], latlngArray[1]));
  // }

  let restaurantMarkup = loading ? <Spinner /> : <RestaurantContent />;
  return (
    <>
      {authenticated && role === "ROLE_SELLER" ? (
        <Redirect to="/seller/dashboard" />
      ) : (
        <>
          <HomeStart />
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5" className={classes.center} noWrap>
              Tus productos favoritos, listos para ser entregados &nbsp;&nbsp;
                <span style={{ fontSize: 40 }} role="img">📦</span>
              </Typography>
            </Grid>
            {/*<Grid item className={classes.SearchBar}>
              <SearchBar page="home" action={setLocationStatus} />
      </Grid>*/}
            <Grid item container>
              <Grid item xs={false} sm={1} />
              {/*<Grid item xs={12} sm={10}>
                {locationStatus ? (
                  restaurantMarkup
                ) : (
                  <Typography variant="body1" className={classes.center} noWrap>
                  Ingrese su ubicación para ver restaurantes cercanos
                  </Typography>
                )}
                </Grid>*/}
              <Grid item xs={false} sm={1} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Home;
