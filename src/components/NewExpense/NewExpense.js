import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //přijdou mu data který mu pošlem z expenseForm
      ...enteredExpenseData,
      //náhodně vygenerovaný id protože v App.js je objek kterej má i ID
      id: Math.random().toString()
    };
    //Ta funkce onSaveExpenseData(vlastní jeméno) dělá jen to, že posílá funkci saveExpenseDataHandler níž 
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}
export default NewExpense;
