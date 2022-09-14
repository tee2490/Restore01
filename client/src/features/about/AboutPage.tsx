import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  }

  return (
    <Container>
      <ButtonGroup fullWidth variant="contained">
        <Button onClick={() => agent.TestErrors.get400Error()}>
          Test 400 Errors{" "}
        </Button>
        <Button onClick={() => agent.TestErrors.get401Error()}>
          Test 401 Errors{" "}
        </Button>
        <Button onClick={() => agent.TestErrors.get404Error()}>
          Test 404 Errors{" "}
        </Button>
        <Button onClick={() => agent.TestErrors.get500Error()}>
          Test 500 Errors{" "}
        </Button>
        <Button
          onClick={()=>getValidationError()}
        >
          Test Validate Errors{" "}
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
