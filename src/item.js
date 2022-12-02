import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import cn from "classnames";

export const Item = ({ checked, onClick, task, deleteItem }) => {
  return (
    <ListItem>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            disableRipple
            onClick={onClick}
          />
        </ListItemIcon>
      </ListItemButton>
      <span className={cn({ crossed: checked })}>{task}</span>
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
