import { useEffect, useState } from "react";
import BudgetSelect from "./BudgetSelect";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function Home() {
  const localStorageTokenKey = "token";

  const [token, setToken] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem(localStorageTokenKey);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (inputValue) {
      localStorage.setItem(localStorageTokenKey, inputValue);
      setToken(inputValue);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Podaj personal access token YNAB"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
            />
            <Button onClick={handleLogin}>Zapisz</Button>
          </InputGroup>
        </Col>
      </Row>
      {token && (
        <Row className="mt-3">
          <Col>
            <BudgetSelect />
          </Col>
        </Row>
      )}
    </>
  );
}
