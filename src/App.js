import { Container, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./header";
import { Item } from "./item";
import { NewTask } from "./newTask";
import "./style/index.scss";

export function App() {
  const dispatch = useDispatch();
  const uncompleted = useSelector((state) => state.uncompleted);
  const completed = useSelector((state) => state.completed);

  const addCompleted = (task) => {
    dispatch({
      type: "ADD_COMPLETED",
      payload: task,
    });
    dispatch({ type: "DELETE_UNCOMPLETED", payload: task });
  };

  const returnToUncompleted = (task) => {
    dispatch({ type: "ADD_UNCOMPLETED", payload: task });
    dispatch({
      type: "DELETE_COMPLETED",
      payload: task,
    });
  };

  const deleteUncompleted = (task) => {
    dispatch({ type: "DELETE_UNCOMPLETED", payload: task });
  };

  const deleteCompleted = (task) => {
    dispatch({ type: "DELETE_COMPLETED", payload: task });
  };

  return (
    <div className="App">
      <Header />
      <Container fixed className="container">
        <NewTask />
      </Container>
      <div className="columns">
        <div className="column">
          <h2>Uncompleted:</h2>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {uncompleted.map((task, id) => (
              <Item
                checked={false}
                onClick={() => addCompleted(task)}
                deleteItem={() => deleteUncompleted(task)}
                task={task}
                key={id}
              />
            ))}
          </List>
        </div>
        <div className="column">
          <h2>Completed:</h2>
          {completed.map((task, id) => (
            <Item
              checked={true}
              onClick={() => returnToUncompleted(task)}
              deleteItem={() => deleteCompleted(task)}
              task={task}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
