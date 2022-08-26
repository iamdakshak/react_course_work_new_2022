import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log("Props : ", props);
  const date = props.time;
  return (
    <div className="expense-date">
      <div className="expense-date__date__month">
        {date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">
        {date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </div>
  );
};

export default ExpenseDate;
