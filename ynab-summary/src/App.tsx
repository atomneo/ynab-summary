import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import BudgetDetails from "./components/BudgetDetails";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="budget/:id" element={<BudgetDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
