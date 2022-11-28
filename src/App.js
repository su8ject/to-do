import { Button, Container } from "@mui/material";
import { Header } from "./header";
import { NewTask } from "./newTask";
import "./style/index.scss";

export function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed className="container">
        <div className="row">
          <NewTask />
          <Button variant="contained">ADD</Button>
        </div>
      </Container>
    </div>
  );
}
