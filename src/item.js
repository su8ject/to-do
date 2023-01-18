import {
    Checkbox,
    IconButton,
    ListItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import cn from "classnames";

export const Item = ({checked, onClick, task, deleteItem}) => {
    return (
        <ListItem className="task">
            <Checkbox
                checked={checked}
                disableRipple
                onClick={onClick}
            />
            <span className={cn("content", {crossed: checked})}>{task}</span>
            <IconButton aria-label="delete" onClick={deleteItem}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};
