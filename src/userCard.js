import {Avatar, Card, Grid} from "@mui/material";

export const UserCard = ({user}) => {

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card className="userCard">
                <Avatar src={user.picture} sx={{width: 56, height: 56}}/>
                <div className="cardName">
                    <p className="user-name">{user.title}. {user.firstName} {user.lastName}</p>
                </div>
            </Card>
        </Grid>
    );
};