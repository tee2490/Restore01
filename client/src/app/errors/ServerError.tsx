import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { history } from "../..";

export default function ServerError() {
  //อ่ำนออบเจคที่แนบมำกับ agent.tsx (history.push('/server-error', { state: data }))
  const { state } = useLocation();

  var state1 = JSON.parse(JSON.stringify(state));

  return (
    <Container component={Paper}>
      {state1 ? (
        <>
          <Typography variant="h3" color="error" gutterBottom>
            {state1.state.title}
          </Typography>
          <Divider />
          <Typography>
            {state1.state.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          {state1.state.title}
        </Typography>
      )}
      <Button onClick={() =>history.push("/catalog")}>
        Go back to the store
      </Button>
    </Container>
  );
}
