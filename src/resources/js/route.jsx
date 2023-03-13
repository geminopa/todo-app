import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Example from "./pages/Example";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/example' exact Component={Example} />
                <Route path='/' exact Component={Home} />
            </Routes>
        </div>
    )
}

const Index = createRoot(document.getElementById("app"));

Index.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)