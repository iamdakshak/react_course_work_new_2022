import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem data={item} />
      ))}
    </Card>
  );
};

export default Expenses;
