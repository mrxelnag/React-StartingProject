import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  //Možnost JEDNA
  //State functions
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //To se volá po kliku buttonu
  const titleChangeHandeler = (event) => {
    //event je v klasickým JS, je to klasická proměnná kterou si dělá browser
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
  };

  //Objekt, kterej kontroluje submit formuláře, né buttonu
  const submitHandler = (event) => {
    //Prevente to, že když se submitne button(formulář), tak se refreshne celá stránka
    event.preventDefault();
    
    //Objekt kterej uloží values z formuláře po submitu. 
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //Tohle pošle data nahoru do NewExpense
    props.onSaveExpenseData(expenseData);
    //Resetování values po submitu
    setEnteredTitle(' ');
    setEnteredAmount(' ');
    setEnteredDate(' ');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            //Po tom submitu, se mi resetne hodnota
            value={enteredTitle}
            onChange={titleChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandeler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
