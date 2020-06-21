import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalState';
import Button from '@material-ui/core/Button';

const AddTransaction = () => {
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction);

    }

    return (
        <>
         <h3>Add New Transaction</h3>
         <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter The Text . . ." required/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (negative - expense, positive + income)</label> <br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter The Amount . . ." required/>
            </div>
            <Button className="btn" variant="contained" color="primary" onClick={onSubmit}>Add Transaction</Button>
         </form>
        </>
    )
}
export default AddTransaction