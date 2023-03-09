import { useHistory } from "react-router-dom";
import "../assets/css/login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
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
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

function Login() {
  const navigate = useHistory();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSignUpClick = () => {
    navigate.push("/signup");
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data, e) => {
    const { email, password } = data;

    axios
      .post("http://localhost:5000/users/login", { email, password })
      .then((response) => {
        const { firstname, lastname, _id } = response;
        sessionStorage.setItem("loggedUserName", `${firstname} ${lastname}`);
        sessionStorage.setItem("loggedUserId", _id);
        navigate.push("/");
      })
      .catch((error) => {
        setOpen(true);
        reset();
      });
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
        <Alert onClose={handleClose} severity="error">
          Invalid credentials
        </Alert>
      </Snackbar>
      <Navbar />
      <Card
        style={{ maxWidth: 450, padding: "20px 5px", margin: "100px auto" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h3">
            Login
          </Typography>
          <Typography gutterBottom variant="h6">
            Quick and easy.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  fullWidth
                  defaultValue=""
                  {...register("email")}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  fullWidth
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
                  Login
                </Button>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={handleSignUpClick}
                >
                  SignUp
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Footer />
    </Grid>
  );
}

export default Login;
