import React from "react";
import "../assets/css/login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/contact.css";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});
function SignUp() {
  const navigate = useHistory();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data, e) => {
    const { firstname, lastname, phone, email, password } = data;
    axios
      .post("http://localhost:5000/users/signup", {
        firstname,
        lastname,
        phone,
        email,
        password,
      })
      .then((response) => {
      
        setOpen(true);
        reset();
      })
      .catch((err) => alert("Error"));
  };
  const onError = (errors, e) => console.log(errors, e);
  return (
    <Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Registered
        </Alert>
      </Snackbar>
      <AppBar>
        <Navbar />
      </AppBar>
      <Card
        style={{ maxWidth: 450, padding: "20px 5px", margin: "100px auto" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h3">
            Sign up
          </Typography>
          <Typography gutterBottom variant="h6">
            Quick and easy.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  fullWidth
                  type="text"
                  label="First name"
                  variant="outlined"
                  name="firstname"
                  defaultValue=""
                  {...register("firstname")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  fullWidth
                  type="text"
                  label="Last name"
                  variant="outlined"
                  name="lastname"
                  defaultValue=""
                  {...register("lastname")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  fullWidth
                  type="number"
                  label="Phone no."
                  variant="outlined"
                  name="phone"
                  defaultValue=""
                  {...register("phone")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  fullWidth
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  defaultValue=""
                  {...register("email")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  defaultValue=""
                  {...register("password")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  save
                </Button>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Button variant="outlined" color="secondary" fullWidth type="button" onClick={()=> navigate.push("/login")}>
                  Already Signed up? Click to login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <div className="footer">
        <Footer />
      </div>
    </Grid>
  );
}

export default SignUp;
