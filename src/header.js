import {AppBar, Toolbar, Typography} from "@mui/material";
import {Navigation} from "./navigation";

export const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar className="toolbar" variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    ToDo App
                </Typography>
                <Navigation/>
            </Toolbar>
        </AppBar>
    );
};
