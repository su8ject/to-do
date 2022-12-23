import {Container} from "@mui/material";
import {useActions, useSelector} from "./store/helpers";
import {Header} from "./header";
import {NewTask} from "./newTask";
import {addCompleted, deleteUncompleted, deleteCompleted, addUncompleted} from "./store/actions";
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

    const actions = useActions({addCompleted, deleteUncompleted, deleteCompleted, addUncompleted});

    const transferToCompleted = (task) => {
        actions.addCompleted(task);
        actions.deleteUncompleted(task);
    };

    const returnToUncompleted = (task) => {
        actions.addUncompleted(task);
        actions.deleteCompleted(task);
    };

    return (
        <div className="App">
            <Header/>
            <Container fixed className="container">
                <NewTask/>
            </Container>
            <div className="columns">
                <ItemList header="Uncompleted" deleteItem={actions.deleteUncompleted} onClick={transferToCompleted} arr={uncompleted} checked={false}/>
                <ItemList header="Completed" deleteItem={actions.deleteCompleted} onClick={returnToUncompleted} arr={completed} checked={true}/>
            </div>
        </div>
    );
}
