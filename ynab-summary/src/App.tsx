import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetDetails from "./components/BudgetDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {
              //<Route path="/" element={<Home />} />
            }
            <Route path="budget/:id" element={<BudgetDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
