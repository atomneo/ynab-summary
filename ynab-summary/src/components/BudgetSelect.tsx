import { useEffect, useState } from "react";
import { useYnabApi } from "../services/ynab/useYnabApi";
import { BudgetSummary } from "../services/ynab/data-contracts";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BudgetSelect() {
  const ynabApi = useYnabApi();

  const [budgets, setBudgets] = useState<BudgetSummary[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    ynabApi
      .getAllBudgets()
      .then((incomingBudgets) => {
        setBudgets(incomingBudgets.data.budgets);
        console.log("budgets", budgets);
      })
      .catch((err) => console.log("Error during loading budgets", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {budgets?.map((budget) => {
        return (
          <Row key={budget.id} className="mt-1">
            <Col onClick={() => navigate(`/budget/${budget.id}`)}>
              {budget.name}
            </Col>
          </Row>
        );
      })}
    </>
  );
}
