import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivateAccount from "./pages/ActivateAccount";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";

function App() {
    return (
        <div>
            <ThemeProvider storageKey="vite-ui-theme">
                <Router>
                    <Layout>
                        <Routes>
                            <Route
                                path="/activate/:uid/:token"
                                element={<ActivateAccount />}
                            ></Route>
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
