import {List} from "@mui/material";
import {Item} from "./item";

export const ItemList = ({checked, header, onClick, deleteItem, arr}) => {
    return (
        <div className="column">
            <h2>{header}</h2>
            <List
                sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
            >
                {arr.map((task, id) => (
                    <Item
                        checked={checked}
                        onClick={() => onClick(task)}
                        deleteItem={() => deleteItem(task)}
                        task={task}
                        key={id}
                    />
                ))}
            </List>
        </div>
    )
}