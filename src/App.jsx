/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import NoteApp from "./NoteApp";
import ArchivePage from "./ArchivePage";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<NoteApp />} />
                <Route path="/archive" element={<ArchivePage />} />
            </Routes>
        </div>
    );
}

export default App;