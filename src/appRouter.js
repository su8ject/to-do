import {Main} from "./main";
import {Routes, Route} from "react-router-dom";
import {Users} from "./users";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};