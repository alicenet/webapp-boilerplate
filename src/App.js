import { Route, Routes } from "react-router-dom";
import { Container} from "semantic-ui-react";
import {
    DebugMenuAndPaths,
    Home,
} from "pages";

function App() {
    return (
        <Container className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/debug/*" element={< DebugMenuAndPaths />} />
            </Routes>
        </Container>
    );
}

export default App;
