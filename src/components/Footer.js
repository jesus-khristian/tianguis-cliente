import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import imgFooter from "../images/fotter.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#A60321",
    marginTop: 40,
    height: "45vh",
    textAlign: "center",
    color: "white",
    padding:0,
  },
  innerCont: {
    margin: "74px 40px 40px 40px",
  },
  resources: {
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    color: "#000",
    width: "300px",
    height:"90px",
    fontSize:"20px",
    backgroundColor: "#FFCD05",
    "&:hover": {
      backgroundColor: "#5a5c5a",
      color: "white",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  coverImg: {
    
    width: "80%",
  },
}));

export default function Footer() {
  const { authenticated } = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} sm={4} className={classes.innerCont}>
        {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                Tianguis
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Acerca de nosotros <br />
                - Blog <br />
                - Carreras <br />
                - Contacto <br />
                - Reportar Fraude <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                Para ti
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Privacidad <br />
                - Términos <br />
                - Seguridad <br />
                - Mapa del sitio <br />
                - Código de conducta <br />
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h4" component="p">
              Registra tu negocio "GRATIS"
            </Typography>
            <Typography variant="body1" component="p">
            Obtenga más de su negocio, sin perder el enfoque en lo que es
              lo más importante: deleitar a sus clientes
            </Typography>
            <br />
            <Link to="/addrestaurant">
              <Button className={classes.buttonStyleOne}>Registra tu negocio</Button>
            </Link>
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={2} className={classes.innerCont}>
      <img src={imgFooter} alt="safe-delivery" className={classes.coverImg} />
   {/*
        <Typography variant="h5" component="p">
          Tianguis Noticias
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 28 }}>
        Manténgase actualizado con las nuevas ofertas de Tianguis
        </Typography>
        <TextField label="Escribe tu Email" variant="outlined" />
        <Button className={classes.buttonStyleTwo}>Enviar</Button>
   */}  
      </Grid>
      <Grid item xs={12} sm={3} className={classes.resources}>
        <Typography variant="h5" component="p">
         Universidad Politécnica del Valle de México
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 28 }}>
          - Maestría en Tecnologías de la Información y comunicación
          <br />
          - Programación Orientada a Web<br />
          - Full Stack MERN<br />
        
        </Typography>
      </Grid>
    </Grid>
  );
}
