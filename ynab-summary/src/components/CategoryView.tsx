import { ListGroup } from "react-bootstrap";
import { Category } from "../services/ynab/data-contracts";
import CurrencyBadge from "./CurrencyBadge";

interface CategoryViewProps {
  category: Category;
  variant: string;
}

function CategoryView(props: CategoryViewProps) {
  return (
    <ListGroup.Item
      variant={props.variant}
      className="d-flex justify-content-between align-items-start"
    >
      <div>
        {props.category.name}
        <CurrencyBadge value={props.category.balance / 1000} className="ms-2" />
      </div>
    </ListGroup.Item>
  );
}

export default CategoryView;
