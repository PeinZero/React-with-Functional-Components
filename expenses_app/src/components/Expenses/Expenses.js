import React, {useState} from 'react'
import './Expenses.css'

import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    })


    return (
        <Card className="expenses">
            <ExpenseFilter onChangeFilter = {filterChangeHandler} selected = {filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>         
        </Card>
    )
}

export default Expenses
