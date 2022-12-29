import {AppBar, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    ToDo App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
