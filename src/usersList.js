import {UserCard} from "./userCard";
import {Grid} from "@mui/material";

export const UsersList = ({users}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {users.map((user) => <UserCard user={user} key={user.id}/>)}
        </Grid>
    )
};