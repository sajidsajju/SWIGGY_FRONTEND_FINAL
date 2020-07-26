import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider
  } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: { main: "#36454f" },
      secondary: {
        main: "#e3e3e3",
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    }
  }))

export default function allLogins() {
  document.title = "Swiggy Logins";
  // const classes = useStyles();

  return (
      <div>
        <ThemeProvider theme={theme}>
        <Typography component="h1" variant="h5" align="center">
                  SWIGGY
                <hr
                    style={{
                      backgroundColor: "black",
                      height: 1,
                      width: 600,
                    }}
                  />
                </Typography>
        <Grid
                    container
                    directio="column"
                    justify="center"
                    alignItems="center"
                    spacing={6}
                    style={{marginTop: 50}}
                  >
     <Grid item xs={3}><Button variant="contained" color="primary"><Link to={"/userLogin"} style={{textDecoration: "none", color: "#FFFFFF"}}>User Login</Link></Button></Grid>
     <Grid item xs={3}><Button variant="contained" color="primary"><Link to={"/restaurantLogin"} style={{textDecoration: "none", color: "#FFFFFF"}}>Restaurant Login</Link></Button></Grid>
     <Grid item xs={3}><Button variant="contained" color="primary"><Link to={"/DeliveryLogin"} style={{textDecoration: "none", color: "#FFFFFF"}}>Delivery Login</Link></Button></Grid>
    </Grid>
    </ThemeProvider>
    </div>
  );
}
