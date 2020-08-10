import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import cover from "../images/paper.svg";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 50,
    height: "340px",
  },
  safeFood: {
    fontSize: 56,
    fontWeight: 400,
    ["@media (max-width:420px)"]: {
      flexDirection: "column",
      fontSize: 55,
    fontWeight: 400,
    },
  },
  delivery: {
    color: "#E0052D",
    fontSize: 60,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
    ["@media (max-width:420px)"]: {
      flexDirection: "column",
      fontSize:35,
    },
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
    ["@media (max-width:420px)"]: {
      display:"none",
    },
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "50vh",
    ["@media (max-width:420px)"]: {
      height: "30vh",
      flexDirection: "column",
    },
  },
  coverImg: {
    
    height: "80%",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#FFCD05",
    marginTop: 30,
  },
}));

const HomeStart = () => {
  const classes = useStyles();
  return (
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Entregamos
        </Typography>
        <Typography className={classes.delivery} noWrap>
          TUS PRODUCTOS 
          
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Porque sabemos lo importante que es para ti cuidarte y cuidar de los tuyos
          realiza tus pedidos sin salir de casa, nosotros tomando todas las medidas de seguridad operativas para entregarte tus productos libres de COVID-19. 
        </Typography>
        <Button variant="outlined" className={classes.ctaOrder}>
          ORDENA AHORA
        </Button>
      </div>
      <div className={classes.cover}>
        <img src={cover} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
  );
};

export default React.memo(HomeStart);
