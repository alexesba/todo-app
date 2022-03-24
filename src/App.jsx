import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import AllPage from "./pages/AllPage";
import PendingPage from "./pages/PendingPage";
import CompletedPage from "./pages/CompletedPage";
import { TodoProvider } from './SharedContexts/Todo';

function App() {
  return (
    <div className="app">
      <Welcome />
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PendingPage />} />
            <Route path="/pending" element={<PendingPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/all" element={<AllPage /> } />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div >
  );
}

export default App;
