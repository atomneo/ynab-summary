import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Budgets } from "./services/ynab/Budgets";

function App() {
  const budgets = new Budgets({
    securityWorker: (securityData: any) => {
      if (securityData && "apiKey" in securityData) {
        return {
          headers: {
            Authorization: `Bearer ${securityData.apiKey}`,
          },
        };
      }
      return {};
    },
  });

  budgets.setSecurityData({ apiKey: process.env.REACT_APP_YNAB_APIKEY });

  budgets
    .getBudgetById("4c2b8c0e-32ce-4690-b1f3-4f4268be265b")
    .then((budgets) => {
      console.log("budgets", budgets);
    })
    .catch((error) => {
      console.log("error", error);
    });

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
