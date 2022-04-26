import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import {GlobalProvider} from "./contex/GlobalState"
import {Home, TeamsPage, NavigationBar, WebTeam} from "./Components";


function App() {
    return (
        <GlobalProvider>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/teams" element={<TeamsPage/>}/>
                    <Route path="/teams/:_id" element={<WebTeam/>}/>
                </Routes>
            </Router>
        </GlobalProvider>
    );
}

export default App;
