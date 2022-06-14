import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./views/home.view";


render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            {/*<Route path="/team" element={<Team />}></Route>*/}
            {/*<Route path="/event" element={<Event />}></Route>*/}
            {/*<Route path="/contact" element={<Contact />}></Route>*/}
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
