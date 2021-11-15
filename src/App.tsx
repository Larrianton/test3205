import React from 'react';

import './App.css';
import {Convert} from "./components/Convert/Convert";
import {Course} from "./components/Course/Course";
import {HashRouter, Routes} from "react-router-dom";
import {Route} from "react-router";


function App() {

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Convert/>}/>
                    <Route path="/course" element={<Course/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
