import {List} from "@mui/material";
import {Item} from "./item";
import cn from "classnames";

export const ItemList = ({header, onClick, onDeleteItem, items}) => {
    return (
        <div className="column">
            <h2 className="title">{header}:</h2>
            <List disablePadding={true}
                  dense={true}
                  sx={{width: "100%"}}
                  className={cn({tasks: items[0]})}
            >
                {items.map((task) => (
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