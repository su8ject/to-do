import {Header} from "./header";
import "./style/index.scss";
import {HashRouter} from "react-router-dom";
import {AppRouter} from "./appRouter";

export function App() {

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <AppRouter/>
            </HashRouter>
        </div>
    );
}