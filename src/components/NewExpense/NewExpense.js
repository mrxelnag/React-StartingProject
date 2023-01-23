import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //přijdou mu data který mu pošlem z expenseForm
      ...enteredExpenseData,
      //náhodně vygenerovaný id protože v App.js je objek kterej má i ID
      id: Math.random().toString(),
    };
    //Ta funkce onSaveExpenseData(vlastní jeméno) dělá jen to, že posílá funkci saveExpenseDataHandler níž
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const starEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={starEditingHandler}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={starEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
