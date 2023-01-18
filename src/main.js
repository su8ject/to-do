import {Container} from "@mui/material";
import {NewTask} from "./newTask";
import {ItemList} from "./itemList";
import {useActions, useSelector} from "./store/helpers";
import {addTask, deleteTask, toggleCompleted} from "./store/actions";
import {getCompleted, getUncompleted} from "./store/reducers";
import {useEffect} from "react";

const mapStateToProps = (state, {someProp}) => {
    return {
        uncompleted: getUncompleted(state),
        completed: getCompleted(state),
    };
};

export const Main = () => {

    const {uncompleted, completed} = useSelector(mapStateToProps, {
        someProp: 123,
    });

    const actions = useActions({addTask, deleteTask, toggleCompleted});

    const saveLocal = tasks => localStorage.setItem("tasks", JSON.stringify(tasks));

    useEffect(
        () => {
            saveLocal([...uncompleted, ...completed]);
        }, [uncompleted, completed]
    );

    const onClick = (task) => {
        actions.toggleCompleted(task);
    };

    return (
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
    );
};