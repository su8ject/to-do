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
            <div className="application-wrap">
                <Container maxWidth="100px" disableGutters={true} className="container">
                    <NewTask/>
                </Container>
                <div className="columns">
                    <ItemList header="Uncompleted" onDeleteItem={actions.deleteTask} onClick={onClick}
                              items={uncompleted}/>
                    <ItemList header="Completed" onDeleteItem={actions.deleteTask} onClick={onClick}
                              items={completed}/>
                </div>
            </div>
        </div>
    );
}