import React, { useState } from "react";
import { connect } from "react-redux";
import { shortenURL } from "../actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  input: {
    background: "white",
    marginBottom: "2%",
    fontFamily: "Roboto",
  },
  submit: {
    color: "purple",
    borderColor: "purple",
    "&:hover": {
      borderColor: "blue",
      color: "black",
    },
  },
  cardStyle: {
    margin: "0 auto",
    marginTop: "3%",
    width: "50%",
  },
}));

const URLForm = ({ shortenURL, error, fetching, url }) => {
  const classes = useStyles();

  const [curURL, setURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrevURL(curURL);
    setURL("");
    shortenURL(curURL);
  };

  const handleView = () => {
    let el;
    if (url !== "" && error === "") {
      el = (
        <div>
          <Card className={classes.cardStyle}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Your URL
              </Typography>
              <Typography variant="h5" component="h2">
                {prevURL.toUpperCase()}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardStyle}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Shortened
              </Typography>
              <Typography variant="h5" component="h2">
                {url !== "" && error === "" ? (
                  url
                ) : (
                  <p style={{ color: "red" }}>{error}</p>
                )}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    } else if (error !== "") {
      el = (
        <Card className={classes.cardStyle}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Shortened
            </Typography>
            <Typography variant="h5" component="h2">
              {url !== "" && error === "" ? (
                url
              ) : (
                <p style={{ color: "red" }}>{error}</p>
              )}
            </Typography>
          </CardContent>
        </Card>
      );
    }
    return el;
  };

  return (
    <div>
      {fetching ? (
        <CircularProgress style={{ color: "purple" }} />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              label="URL"
              variant="filled"
              margin="normal"
              required
              value={curURL}
              onChange={(e) => setURL(e.target.value)}
              autoFocus={true}
              fullWidth
              placeholder="https://google.com"
              inputProps={{
                min: 0,
                style: { textAlign: "center", color: "black" },
              }}
              InputLabelProps={{
                style: { color: "purple" },
              }}
              InputProps={{ disableUnderline: true }}
              className={classes.input}
            />

            <Button variant="outlined" type="submit" className={classes.submit}>
              Shorten
            </Button>
          </form>
          {handleView()}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    url: state.url,
    error: state.error,
  };
};

export default connect(mapStateToProps, { shortenURL })(URLForm);