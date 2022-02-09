import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const stopEditingHandler = () => {
        setIsEditing(true)
    }

    return (
        <div className="new-expense">
            {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
               : <button type="submit" onClick={stopEditingHandler}> Add New Expense</button>         
            }
        </div>
    )
}

export default NewExpense
