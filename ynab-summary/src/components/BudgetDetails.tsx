import { useEffect, useState } from "react";
import { BudgetDetail } from "../services/ynab/data-contracts";
import { useYnabApi } from "../services/ynab/useYnabApi";
import { useParams } from "react-router-dom";
import CategoryGroupView from "./CategoryGroupView";
import {
  Alert,
  Button,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

function BudgetDetails() {
  const [budget, setBudget] = useState<BudgetDetail | undefined>(undefined);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const ynabApi = useYnabApi();

  const { id } = useParams();

  useEffect(() => {
    console.log("id", id);
    if (id) {
      ynabApi
        .getBudgetById(id)
        .then((incomingBudget) => {
          console.log("incomingBudget", incomingBudget);
          setBudget(incomingBudget.data.budget);
          setIsDataReady(true);
        })
        .catch((e) => {
          console.log("error occured:", e);
          setErrorMessage(e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row>
        <h1>{budget?.name}</h1>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              id="inputCategoriesFilter"
              onChange={(event) => setFilter(event.target.value.toLowerCase())}
              value={filter}
            />
            <Button
              variant="outline-secondary"
              onClick={() => setFilter(undefined)}
            >
              <XCircle size={22} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {!isDataReady && (
          <Row className="justify-content-md-center">
            <Col>
              <Spinner animation="border" variant="primary" />
            </Col>
          </Row>
        )}
        {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
        <ListGroup className="pe-0">
          {budget?.category_groups
            ?.filter(
              (categoryGroup) =>
                categoryGroup.deleted === false &&
                categoryGroup.hidden === false &&
                categoryGroup.name !== "Internal Master Category" &&
                categoryGroup.name !== "Hidden Categories"
            )
            .map((categoryGroup) => {
              return (
                <CategoryGroupView
                  categoryGroup={categoryGroup}
                  categories={budget.categories?.filter(
                    (category) =>
                      category.category_group_id === categoryGroup.id &&
                      category.deleted === false &&
                      category.hidden === false
                  )}
                  filter={filter}
                  key={categoryGroup.id}
                />
              );
            })}
        </ListGroup>
      </Row>
    </>
  );
}

export default BudgetDetails;
