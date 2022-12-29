import {Container} from "@mui/material";
import {useActions, useSelector} from "./store/helpers";
import {Header} from "./header";
import {NewTask} from "./newTask";
import {addTask, deleteTask, toggleCompleted} from "./store/actions";
import "./style/index.scss";

import {getUncompleted, getCompleted} from "./store/reducers";
import {ItemList} from "./itemList";

const mapStateToProps = (state, {someProp}) => {

    return {
        uncompleted: getUncompleted(state),
        completed: getCompleted(state),
    };
};

export function App() {

    const {uncompleted, completed} = useSelector(mapStateToProps, {
        someProp: 123,
    });

    const actions = useActions({addTask, deleteTask, toggleCompleted});

    const onClick = (task) => {
        actions.toggleCompleted(task);
    };

    return (
        <div className="App">
            <Header/>
            <Container fixed className="container">
                <NewTask/>
            </Container>
            <div className="columns">
                <ItemList header="Uncompleted:" deleteItem={actions.deleteTask} onClick={onClick}
                          arr={uncompleted}/>
                <ItemList header="Completed:" deleteItem={actions.deleteTask} onClick={onClick}
                          arr={completed}/>
            </div>
        </div>
    );
}