import {generateCardSheet} from "./components/GenerateCardSheet.tsx";
import './App.css'
import {Routes, Route} from "react-router-dom";
import ExpandedEntry from "./pages/ExpandedEntry.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <div>{generateCardSheet(151)}</div>
            } />
            <Route path="/expandedentry/:pokemonNum" element={
                <ExpandedEntry />
            } />
        </Routes>
    )
}

export default App
