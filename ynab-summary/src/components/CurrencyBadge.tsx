import { Badge } from "react-bootstrap";

interface CurrencyBadgeProps {
  value: number;
  className?: string;
}

export default function CurrencyBadge(props: CurrencyBadgeProps) {
  const badgeBackground =
    props.value === 0 ? "secondary" : props.value > 0 ? "success" : "danger";

  const currency = Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  return (
    <Badge bg={badgeBackground} className={props.className}>
      {currency.format(props.value)}
    </Badge>
  );
}
