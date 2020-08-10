import React from "react";
//redux
import { useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Spinner from "../util/spinner/spinner";
import SwipeableImages from "./SwipeableImages";

const useStyles = makeStyles({
  borderBottom: {
    borderBottom: "2px solid #000",
    position: "absolute",
    top: "25.5%",
    left: "6.5%",
    bottom: 0,
    height: "40%",
    width: "44%",
  },
  borderLeft: {
    borderLeft: "2px solid #000",
    position: "absolute",
    top: "25.5%",
    left: "6.5%",
    bottom: 0,
    height: "40%",
  },
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
});

function Restaurant(props) {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    name,
    imageUrl,
    tags,
    costForOne,
    minOrderAmount,
    payment,
    address,
  } = props;
  let paymentString;
  let phoneNo;
  let addressString;

  if (address) {
    phoneNo = address.phoneNo;
    addressString = `${address.aptName}, ${address.locality}, ${address.street}`;
  }

  if (payment ? payment.length === 1 : null)
    paymentString = `Acepta pago en ${payment[0].toLowerCase()}. `;

  if (payment ? payment.length === 2 : null)
    paymentString = `Acepta pago en ${payment[0].toLowerCase()} & ${payment[1].toLowerCase()} .`;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid container direction="row">
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={6} style={{ marginTop: 120 }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                style={{ fontStyle: "bold" }}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {tags}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Costo $ {costForOne} for one
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Orden minima $ {minOrderAmount}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {paymentString}
              </Typography>
              <br />
              <Typography variant="body2" color="textPrimary">
                Direccion: {addressString}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Tel: +52 {phoneNo}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Horario de atencion : 9am to 9pm
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginTop: 34 }}>
              {imageUrl ? (
                <SwipeableImages images={imageUrl} type="restaurant"  />
              ) : null}
            </Grid>
            <div className={classes.borderLeft}></div>
            <div className={classes.borderBottom}></div>
            <Grid item xs={false} sm={1} />
          </Grid>
        </>
      )}
    </>
  );
}

export default React.memo(Restaurant);
