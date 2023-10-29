import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivateAccount from "./pages/ActivateAccount";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
    return (
        <div>
            <ThemeProvider storageKey="vite-ui-theme">
                <Router>
                    <Routes>
                        <Route
                            path="/activate/:uid/:token"
                            element={<ActivateAccount />}
                        ></Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
