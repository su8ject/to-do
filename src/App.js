import { Container, List } from "@mui/material";
// import { useDispatch } from 'react-redux'
// import { useSelector, useActions } from './hooks'
import { useActions, useSelector } from "./store/helpers";
import { Header } from "./header";
import { Item } from "./item";
import { NewTask } from "./newTask";
// import { t } from './store/action-types'
// import { addUncompleted } from './store/actions'
import {addCompleted, deleteUncompleted} from "./store/actions";
import "./style/index.scss";

import { getUncompleted, getCompleted } from "./store/reducers";

const mapStateToProps = (state, { someProp }) => {
  console.log({ someProp });
  console.log(getUncompleted(state), getCompleted(state));

  return {
    uncompleted: getUncompleted(state),
    completed: getCompleted(state),
  };
};

export function App() {
  // const dispatch = useDispatch()

  const { uncompleted, completed } = useSelector(mapStateToProps, {
    someProp: 123,
  });

  const actions = useActions({ addCompleted, deleteUncompleted });

  const transferToCompleted = (task) => {
    actions.addCompleted(task);
    actions.deleteUncompleted(task);
  };

  // const returnToUncompleted = (task) => {
  //   addUncopleted(task);
  //   deleteCompleted(task);
  // };

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
                onClick={() => transferToCompleted(task)}
                // deleteItem={ () => deleteUncompleted(task) }
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
              // onClick={ () => returnToUncompleted(task) }
              // deleteItem={ () => deleteCompleted(task) }
              task={task}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
