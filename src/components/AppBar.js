import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logoutAction } from "../redux/actions/authActions";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#A60321",
    marginBottom: 10,
  },
  title: { flex: 1, marginLeft: 60, color: "white" },
  buttonStyles: {
    color: "white",
    margin: "0 6px 0",
    display: "inline-block",
  },
  buttons: {
    marginRight: 60,
  },
  name: {
    fontStyle: "bold",
    fontSize: 32,
  },
}));

export default function AppBarPrimary() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="h6" noWrap>
            <span className={classes.name}>Tianguis</span>
          </Typography>
        </Link>
        {authenticated ? (
          role === "ROLE_SELLER" ? (
            <div className={classes.buttons}>
              <Typography className={classes.buttonStyles}>
                <Link to="/">
                <Button className={classes.buttonStyles}>Panel del administrativo </Button> 
                </Link>
              </Typography>
              <Link to="/seller/orders">
                <Button className={classes.buttonStyles}>Ordenes</Button>
              </Link>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
                variant="outlined"
              >
                Cerrar Sesión
              </Button>
            </div>
          ) : (
            <div className={classes.buttons}>
              <Typography className={classes.buttonStyles}>
                Hola, {firstName} {lastName}
              </Typography>
              <Link to="/orders">
                <Button className={classes.buttonStyles}>Ordenes</Button>
              </Link>
              <Link to={{ pathname: "/cart", state: { address: address } }}>
                <Button className={classes.buttonStyles}>Carrito</Button>
              </Link>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
                variant="outlined"
              >
                Cerrar Sesión
              </Button>
            </div>
          )
        ) : (
          <div className={classes.buttons}>
            <Link to="/login">
              <Button className={classes.buttonStyles}>Iniciar sesión</Button>
            </Link>
            <Link to="/register">
              <Button className={classes.buttonStyles} variant="outlined">
                Registro
              </Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
