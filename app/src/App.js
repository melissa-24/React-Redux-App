import React, { useState } from "react";
import URLForm from "./components/URLForm";
import Header from "./components/Header";
import "./App.css";
import { Container, Typography, Paper } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" style={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          component="h5"
          style={{ marginBottom: "2%", fontSize: "2rem" }}
        >
          Enter A URL To Shorten
        </Typography>
        <ArrowDownwardIcon
          style={{ marginBottom: "2%", fontSize: "3rem", color: "purple" }}
        />
        <URLForm />
      </Container>
    </div>
  );
};

export default App;