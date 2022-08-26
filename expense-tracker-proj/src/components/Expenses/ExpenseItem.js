import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "../UI/Card.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { date, title, amount } = props.data;
  return (
    <Card className="expense-item">
      <ExpenseDate time={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
