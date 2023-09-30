import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import RandomMessage from "./meassages.js";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<RandomMessage />} />
            </Routes>
        </Router>
    )
}

export default App;