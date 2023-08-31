import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useYnabApi } from "./services/ynab/useYnabApi";
import { BudgetSummary } from "./services/ynab/data-contracts";

function App() {
  const ynabApi = useYnabApi();

  const [allBudgets, setAllBudgets] = useState<BudgetSummary[]>([]);

  useEffect(() => {
    ynabApi
      .getAllBudgets()
      .then((response) => {
        return setAllBudgets(response.data.budgets);
      })
      .catch((error) => {
        console.log("Error during getting budgets", error);
      });
  }, []);

  console.log("allBudgets", allBudgets);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
