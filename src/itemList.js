import {List} from "@mui/material";
import {Item} from "./item";

export const ItemList = ({ header, onClick, deleteItem, arr}) => {
    return (
        <div className="column">
            <h2>{header}</h2>
            <List
                sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
            >
                {arr.map((task) => (
                    <Item
                        checked={task.completed}
                        onClick={() => onClick(task)}
                        deleteItem={() => deleteItem(task)}
                        task={task.content}
                        key={task.uid}
                    />
                ))}
            </List>
        </div>
    )
}