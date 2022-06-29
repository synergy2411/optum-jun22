import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {

    return (
        <div className='col-4'>
            <div className='card'>
                <div className='card-header'>
                    <h6 className='text-center'>
                        {props.expense.title.toUpperCase()}
                    </h6>
                </div>
                <div className='card-body'>
                    <p className='lead'>Amount : {props.expense.amount}  </p>
                    <ExpenseDate createdAt = {props.expense.createdAt} />
                </div>
            </div>
        </div>
    )

}

export default ExpenseItem;