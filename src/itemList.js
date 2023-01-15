import {List} from "@mui/material";
import {Item} from "./item";

export const ItemList = ({header, onClick, onDeleteItem, arr}) => {
    return (
        <div className="column">
            <h2>{header}:</h2>
            <List
                sx={{width: "100%", maxWidth: 360}}
            >
                {arr.map((task) => (
                    <Item
                        checked={task.completed}
                        onClick={() => onClick(task)}
                        deleteItem={() => onDeleteItem(task)}
                        task={task.content}
                        key={task.uid}
                    />
                ))}
            </List>
        </div>
    )
}