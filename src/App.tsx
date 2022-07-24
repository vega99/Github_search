import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import SidebarProvider from "./context/SidebarContext";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RepositoriesPage from "./pages/RepositoriesPage";
import UserPage from "./pages/UserPage";

function App() {
    return (
        <div className="App font-monospace">
            <BrowserRouter>
                <SidebarProvider>
                    <Routes>
                        <Route element={<SideBar />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/users" element={<UserPage />} />
                            <Route path="/repositories" element={<RepositoriesPage />}/>
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </SidebarProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
