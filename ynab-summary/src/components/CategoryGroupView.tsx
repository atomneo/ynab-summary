import { Badge, ListGroup } from "react-bootstrap";
import { Category, CategoryGroup } from "../services/ynab/data-contracts";
import CategoryView from "./CategoryView";
import { useState } from "react";
import CurrencyBadge from "./CurrencyBadge";

interface CategoryGroupViewProps {
  categoryGroup: CategoryGroup;
  categories: Category[] | undefined;
  filter: string | undefined;
}

function CategoryGroupView(props: CategoryGroupViewProps) {
  const categoryGroupBalance =
    (props.categories || []).reduce(
      (acc, category) => acc + category.balance,
      0
    ) / 1000;

  const [isCategoryVisible, setIsCategoryVisible] = useState<boolean>(
    categoryGroupBalance > 0
  );

  return (
    <>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start mt-1"
        variant="primary"
        onClick={() => setIsCategoryVisible(!isCategoryVisible)}
      >
        <div>
          <b>{props.categoryGroup.name}</b>
          <CurrencyBadge value={categoryGroupBalance} className="ms-2" />
        </div>
        {!isCategoryVisible && (
          <Badge bg="secondary">{props.categories?.length}</Badge>
        )}
      </ListGroup.Item>
      {isCategoryVisible &&
        props.categories
          ?.filter(
            (category: Category) =>
              props.filter === undefined ||
              category.name.toLowerCase().includes(props.filter)
          )
          ?.map((category, index) => (
            <CategoryView
              category={category}
              key={category.id}
              variant={index % 2 === 0 ? "secondary" : ""}
            />
          ))}
    </>
  );
}

export default CategoryGroupView;
