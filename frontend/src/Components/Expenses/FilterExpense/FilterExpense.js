import React from 'react';

const FilterExpense = (props) => {
    return (
        <select className='form-control' value={props.initialYear} onChange={(event) => props.filterExpense(event.target.value)}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    );
}

export default FilterExpense;
